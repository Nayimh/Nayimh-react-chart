import React from 'react';
import { Pie } from 'react-chartjs-2';


const Pichart = ({chartData}) => {
    return (
        <div className='Bar'>
            <Pie data={chartData}/>
        </div>
    );
};

export default Pichart;