import React from "react";
import ReactEcharts from "echarts-for-react";
function CollectionEchart(){
    const option = {
        dataset: {
            source: [
                [ 'amount', 'product'],
                [ 100, '星期一'],
                [ 200, '星期二'],
                [ 300, '星期三'],
                [ 250, '星期四'],
                [ 400, '星期五'],
                [ 100, '星期六'],
                [ 50, '星期日'],
            ]
        },
        grid: {
            left:0,
            top:15,
            containLabel: true
        },
        xAxis: {name: 'amount'},
        yAxis: {type: 'category'},
        tooltip:{
            trigger:"axis"
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
    };
    return (
        <ReactEcharts option={option} className="echarts-style"></ReactEcharts>
    );
}
export default CollectionEchart;