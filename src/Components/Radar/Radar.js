import React from 'react';
import {  Radar } from 'react-chartjs-2';


const RadarChart = ({chartData}) => {
    return (
        <div className='Bar'>
            <Radar data={chartData}/>
        </div>
    );
};

export default RadarChart;