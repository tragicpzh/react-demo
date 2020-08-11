import React from "react";
import ReactEcharts from "echarts-for-react";
function RadarEchart(){
    let option = {
        tooltip: {},
        legend: {
            data: ['生活区（Allocated Budget）', '鬼畜区（Actual Spending）'],
            orient:'vertical',
            x:'left',
            y:'top'
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '收藏量', max: 10000},
                { name: '点击量', max: 10000},
                { name: '人气值', max: 10000},
                { name: '转发量', max: 10000},
                { name: '投币数', max: 10000},
                { name: '关注人数', max: 10000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [2000, 3000, 5000, 6000, 4000, 4000],
                    name: '生活区（Allocated Budget）'
                },
                {
                    value: [5000, 5000, 7000, 4000, 4000, 3000],
                    name: '鬼畜区（Actual Spending）'
                }
            ]
        }]
    };
    return <ReactEcharts option={option}></ReactEcharts>
}
export default RadarEchart;