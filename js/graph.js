"use strict";

d3.tsv("all_countries.tsv", function (data) {
    var svg = dimple.newSvg("#chart", 1200, 600);
    var country = "Denmark";
    SelectCountry(country);
    var countries = d3.select("#countries");
    var countryChart = new dimple.chart(svg, data);
    countryChart.setMargins(200, 30, 50, 50);
    var x = countryChart.addMeasureAxis("x", country);
    x.title = "Comparison with OECD Average";
    x.overrideMin = -100;
    x.overrideMax = 100;
    var y = countryChart.addCategoryAxis("y", "Category");
    y.addOrderRule("Order", true);
    countryChart.addSeries(null, dimple.plot.bar);
    countryChart.draw();

    countries.on("change", function(d){
        country = d3.select(this).property("value");
        x.measure = country;
        countryChart.draw(1000);
    });
});

function SelectCountry(country) {
    var countrySelect = document.getElementById("countries");
    for (var i, j = 0; i = countrySelect.options[j]; j++) {
        if(i.value == country) {
            countrySelect.selectedIndex = j;
            break;
        }
    }
}
