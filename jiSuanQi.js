var app = new Vue({
    el: '#app',
    data: {
        nd: "10",
        x1: "0",
        x2: "1",
        x3: "2",
        x4: "3",
        x5: "4",
        x6: "6",
        x7: "7",
        x8: "8",

        y1: '0.001',
        y2: "0.002",
        y3: "0.003",
        y4: '0.004',
        y5: '0.005',
        y6: '0.006',
        y7: '0.007',
        y8: '0.008',
    }
}) 
// var data_list = [app.y1, app.y2, app.y3, app.y4, app.y5, app.y6, app.y7, app.y8];
var y1 = parseFloat(app.y1);
var y2 = parseFloat(app.y2);
var y3 = parseFloat(app.y3);
var y4 = parseFloat(app.y4);
var y5 = parseFloat(app.y5);
var y6 = parseFloat(app.y6);
var y7 = parseFloat(app.y7);
var y8 = parseFloat(app.y8);
var chart = Highcharts.chart("container", {

    title: {
        text: "标准曲线"
    },
    subtitle: {
        text: "硫酸盐"
    },
    yAxis: {
        title: {
            text: "吸光度"
        }
    },
    legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 0
        }
    },
    series: [{
        name: "Fe",
        data: [y1, y2, y3, y4, y5, y6, y7, y8] 
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: "horizontal",
                    align: "center",
                    verticalAlign: "bottom"
                }
            }
        }]
    }
});