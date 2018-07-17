var y1 = document.ElementById("y1").value();
var y2 = document.ElementById("y2").value();
var y3 = document.ElementById("y3").value();
var y4 = document.ElementById("y4").value();
var y5 = document.ElementById("y5").value();
var y6 = document.ElementById("y6").value();
var y7 = document.ElementById("y7").value();
var y8 = document.ElementById("y8").value();

Highcharts.chart('container',{
    title:{
        text:'标准曲线'
    },
    subtitle:{
        text: fe
    },
    yAxis: {
        title:{
            text:"吸光度"
        }
    },
    legend:{
        layout:"vertical",
        align: "right",
        verticalAlign: "middle"
    },
    plotOptions:{
        series:{
            label:{
                connectorAllowed: false
            },
            pointStart: 2018
        }
    },
    series:[{
        name: "铁",
        data:[
            y1,y2,y3,y4,y5,y6,y7,y8
        ]
    }],
    responsive:{
        rules:[{
            condition:{
                maxWidth: 500
            },
            chartOptions:{
                legend:{
                    layout:"horizontal",
                    align:"center",
                    verticalAlign:"bottom"
                }
            }
        }]
    }
});