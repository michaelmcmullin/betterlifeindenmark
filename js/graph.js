var svg = dimple.newSvg("#chart", 1200, 600);
d3.tsv("denmark.tsv", function (data) {
    var denmarkChart = new dimple.chart(svg, data);
    denmarkChart.setMargins(200, 30, 50, 50)
    var x = denmarkChart.addMeasureAxis("x", "Difference");
    x.title = "Comparison with OECD Average";
    var y = denmarkChart.addCategoryAxis("y", "Category");
    y.addOrderRule("Difference");
    denmarkChart.addSeries(null, dimple.plot.bar);
    denmarkChart.draw();
});
