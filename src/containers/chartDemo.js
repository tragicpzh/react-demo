import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';

function DemoArea(){
    const data=[
        {Date:'7-15',scales:'55'},
        {Date:'7-16',scales: '60'},
        {Date: '7-17',scales: '65'},
        {Date: '7-20',scales: '70'},
        {Date: '7-21',scales: '75'}
    ];
    const config = {
        title: {
            visible: true,
        },
        data,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            type: 'dateTime',
            tickCount: 5,
        },
    };
    return <Area {...config} />;
};

export default DemoArea;
