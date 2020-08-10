import React from "react"
import "../styles/Item1.css"
import ReactEcharts from "echarts-for-react";
function Item1(props) {
    const data=[
        {Date:'7-15',scales:'55'},
        {Date:'7-16',scales: '60'},
        {Date: '7-17',scales: '65'},
        {Date: '7-20',scales: '70'},
        {Date: '7-21',scales: '75'}
    ];
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
                name:'销售额',
                type:'line',
                data:[5,10,15,20,25]
            }]
        }
        return option;
    }
    const bread=props.bread.split('/');
    console.log(bread);
    var breadnav=[];
    for(let i=0;i<bread.length;i++){
        breadnav.push(<a href="#">{bread[i]}</a>);
        breadnav.push(<span>/</span>);
    }
    breadnav.pop();
    return (
        <div className="contain">
            <div className="breadcrumb">
                {breadnav}
            </div>
            <div className="simple-context">
                <div className="simple-card">
                    <div className="simple-card-body">
                        <div className="simple-card-header">
                            <h1>总销售额</h1>
                        </div>
                        <div className="simple-card-nums">
                            <h2>¥ 126,560</h2>
                        </div>
                        <div className="simple-card-chart">
                            <ReactEcharts className="echarts-style" option={getOption()}></ReactEcharts>
                        </div>
                        <div className="simple-card-footer">
                            <h3>日销售额￥12,423</h3>
                        </div>
                    </div>
                </div>
                <div className="simple-card">
                    2
                </div>
                <div className="simple-card">
                    2
                </div>
                <div className="simple-card">
                    2
                </div>
            </div>
            <div className="large-table">

            </div>
            <div className="large-chart">

            </div>
        </div>
    );
}
export default Item1;
