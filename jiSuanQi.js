var data_list = [];
function loadXMLDoc() {

    var xmlhttp;
    var txt, x, i;
    xmlhttp = new XMLHttpRequest();

    xmlDoc = xmlhttp.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("XGD");
    for (i = 0; i < x.length; i++) {
        txt = txt + x[i].childNodes[0].nodeValue + "<br>";
    }
    xmlhttp.open("GET", "./ajax/biaoZhun.xml", true);
    xmlhttp.send();

}
// document.getElementById("y1").innerHTML = txt;
// document.getElementById("y2").innerHTML = txt;
// document.getElementById("y3").innerHTML = txt;
// document.getElementById("y4").innerHTML = txt;
// document.getElementById("y5").innerHTML = txt;
// document.getElementById("y6").innerHTML = txt;
// document.getElementById("y7").innerHTML = txt;
$(document).ready(function () {
    var y01 = $("#y1").val();
    var y02 = $("#y2").val();
    var y03 = $("#y3").val();
    var y04 = $("#y4").val();
    var y05 = $("#y5").val();
    var y06 = $("#y6").val();
    var y07 = $("#y7").val();
    var y08 = $("#y8").val();
    data_list = [y01, y02, y03, y04, y05, y06, y07, y08];
});
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
        data: data_list
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

//    alert(data_list);
//     var title = {
//         text:'标准曲线'
//     };
//     var subtitle={
//         text: "fe"
//     };
//     var yAxis= {
//         title:{
//             text:"吸光度"
//         }
//     };
//     var legend={
//         layout:"vertical",
//         align: "right",
//         verticalAlign: "middle"
//     };
//     var plotOptions={
//         series:{
//             label:{
//                 connectorAllowed: false 
//             },
//             pointStart: 0
//         }
//     };
//     var series=[{
//         name: "铁",
//         // val:[
//         //     0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9
//         // ],
//         // data:[
//         //     y01,y02,y03,y04,y05,y06,y07,y08
//         // ],
//         data: data_list
//     }];
//     var responsive={
//         rules:[{
//             condition:{
//                 maxWidth: 500
//             },
//             chartOptions:{
//                 legend:{
//                     layout:"horizontal",
//                     align:"center",
//                     verticalAlign:"bottom"
//                 }
//             }
//         }]
//     };
//     var json={};
//     json.title = title;
//     json.subtitle = subtitle;
//     // json.xAxis = xAxis;
//     json.yAxis = yAxis;
//     json.legend = legend;
//     json.series = series;
//     json.responsive = responsive;
//     json.plotOptions = plotOptions;
//     $("#container").highcharts(json);
// });