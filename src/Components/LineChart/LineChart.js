import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = ({chartData}) => {
    return (
        <div className='Bar'>
            <Line data={chartData}/>
        </div>
    );
};

export default LineChart;