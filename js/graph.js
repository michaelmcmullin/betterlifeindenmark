"use strict";

d3.tsv("all_countries.tsv", function (data) {
    // Initial set up
    var country = "Denmark";
    var dict = {};

    selectCountry();
    var svg = dimple.newSvg("#chart", 1200, 600);
    var countries = d3.select("#countries");
    var countryChart = new dimple.chart(svg, data);
    countryChart.setMargins(200, 30, 50, 50);

    var x = countryChart.addMeasureAxis("x", country);
    x.title = "Comparison with OECD Average";
    x.overrideMin = -80;
    x.overrideMax = 80;

    var y = countryChart.addCategoryAxis("y", "Category");
    y.addOrderRule("Order", true);

    countryChart.addSeries(null, dimple.plot.bar);
    refreshGraph(0);

    // Handle the selection of a new country.
    countries.on("change", function(d){
        country = d3.select(this).property("value");
        x.measure = country;
        refreshGraph(1000);
    });

    // Maintain a dictionary of certain data that can be used to selectively
    // manipulate various aspects of the chart.
    function populateDict() {
        var chartData = countryChart.data;
        for(var i=0; i<data.length; i++) {
            var category = chartData[i]["Category"];
            dict[category] = { positiveValue: chartData[i]["PositiveValue"],
                               countryScore: chartData[i][country] };
        }
    }

    // Selects a country from the drop down that matches the currently
    // displayed chart data.
    function selectCountry() {
        var countrySelect = document.getElementById("countries");
        for(var i, j = 0; i = countrySelect.options[j]; j++) {
            if(i.value == country) {
                countrySelect.selectedIndex = j;
                break;
            }
        }
    }

    // Takes care of drawing the graph, for example, when the page loads, or
    // when a new country is selected. The 'duration' parameter animates any
    // changes over a given time in milliseconds.
    function refreshGraph(duration){
        populateDict();
        countryChart.draw(duration);

        // Reset the bar styles, otherwise they carry through when a new country
        // is selected.
        countryChart.svg.selectAll(".dimple-bar").classed("bad-bar", false);

        // Select results that are 'bad', and highlight those bars. This is to
        // make it clear that for some categories, low scores are better, while
        // the opposite applies to other categories.
        countryChart.svg.selectAll(".dimple-bar").filter(function(d) {
            var countryData = dict[d.cy];
            return countryData.positiveValue == 0 ? countryData.countryScore > 0 : countryData.countryScore < 0;
        }).classed("bad-bar", true);
    }
});

