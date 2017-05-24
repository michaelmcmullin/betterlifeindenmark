var svg = dimple.newSvg("#chart", 1200, 600);
var countries = d3.select("#countries");
var country = "Denmark";

d3.tsv("all_countries.tsv", function (data) {
    "use strict";
    var countryChart = new dimple.chart(svg, data);
    countryChart.setMargins(200, 30, 50, 50);
    var x = countryChart.addMeasureAxis("x", country);
    x.title = "Comparison with OECD Average";
    x.overrideMin = -50;
    x.overrideMax = 50;
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
