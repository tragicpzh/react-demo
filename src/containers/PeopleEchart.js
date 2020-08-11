import React from "react";
import ReactEcharts from "echarts-for-react";
function PeopleEchart(){
    const option = {
        backgroundColor:'white',
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '80%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '0-10'},
                    {value: 310, name: '10-20'},
                    {value: 274, name: '20-25'},
                    {value: 235, name: '25-35'},
                    {value: 400, name: '35以上'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    color: 'rgba(0,0,0,0.3)'
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
    return(
      <ReactEcharts option={option} className="echarts-style"></ReactEcharts>
    );
}
export default PeopleEchart;