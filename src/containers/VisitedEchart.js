import React from "react";
import ReactEcharts from "echarts-for-react";
function VisitedEchars(){
    const getOption=()=> {
        let option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }],
            grid:{
                left:0,
                top:15,
                containLabel:true
            }
        };
        return option;
    };
    return(
        <ReactEcharts option={getOption()} className="echarts-style"></ReactEcharts>
    );
}
export default VisitedEchars;