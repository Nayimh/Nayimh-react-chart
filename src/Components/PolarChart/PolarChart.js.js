import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const PolarChart = ({chartData}) => {
    return (
        <div className='Bar'>
            <PolarArea data={chartData}/>
        </div>
    );
};

export default PolarChart;