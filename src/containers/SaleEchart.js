import React from "react";
import ReactEcharts from "echarts-for-react";
function SaleEchart(){
    const getOption=()=>{
        let option={
            title:{
                show:false
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                data:['1','2','3','4']
            },
            yAxis:{
                type:'value'
            },
            series:[{
                name:'总转发量',
                type:'line',
                data:[5,10,15,20,25]
            }],
            grid:{
                left:0,
                top:15,
                containLabel:true
            }
        }
        return option;
    }
    return(
        <ReactEcharts className="echarts-style" option={getOption()}></ReactEcharts>
    );
}
export default SaleEchart;