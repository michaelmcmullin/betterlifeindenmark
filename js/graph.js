var svg = dimple.newSvg("#chart", 1200, 600);
d3.tsv("all_countries.tsv", function (data) {
    "use strict";
    var denmarkChart = new dimple.chart(svg, data);
    denmarkChart.setMargins(200, 30, 50, 50)
    var x = denmarkChart.addMeasureAxis("x", "Denmark");
    x.title = "Comparison with OECD Average";
    x.overrideMin = -50;
    x.overrideMax = 50;
    var y = denmarkChart.addCategoryAxis("y", "Category");
    y.addOrderRule("Order", true);
    denmarkChart.addSeries(null, dimple.plot.bar);
    denmarkChart.draw();
});
