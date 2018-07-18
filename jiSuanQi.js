

$(document).ready(function(){
    var y01 = $("#y1").val();
    var y02 = $("#y2").val();
    var y03 = $("#y3").val();
    var y04 = $("#y4").val();
    var y05 = $("#y5").val();
    var y06 = $("#y6").val();
    var y07 = $("#y7").val();
    var y08 = $("#y8").val();
    var title = {
        text:'标准曲线'
    };
    var subtitle={
        text: "fe"
    };
    var yAxis= {
        title:{
            text:"吸光度"
        }
    };
    var legend={
        layout:"vertical",
        align: "right",
        verticalAlign: "middle"
    };
    var plotOptions={
        series:{
            label:{
                connectorAllowed: false 
            },
            pointStart: 0
        }
    };
    var series=[{
        name: "铁",
        // val:[
        //     0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9
        // ],
        // data:[
        //     y01,y02,y03,y04,y05,y06,y07,y08
        // ],
        data:[
            $("#y1").val(),$("#y2").val(),$("#y1").val(),$("#y2").val(),$("#y1").val(),$("#y2").val(),$("#y1").val(),$("#y2").val(),
        ]
    }];
    var responsive={
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
    };
    var json={};
    json.title = title;
    json.subtitle = subtitle;
    // json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.legend = legend;
    json.series = series;
    json.responsive = responsive;
    json.plotOptions = plotOptions;
    $("#container").highcharts(json);
});