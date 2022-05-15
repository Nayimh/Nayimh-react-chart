import React, { useState } from 'react';
import './Home.css';
import BarChart from '../BarChart/BarChart';
import {Data} from '../data/Data'
import LineChart from '../LineChart/LineChart';
import Pichart from '../Pichart/Pichart';
import Doughnutchart from '../doughnut/Doughnutchart';
import PolarChart from '../PolarChart/PolarChart.js';
import RadarChart from '../Radar/Radar';


const Home = () => {

    const [userData, setUserData] = useState({
        labels: Data.map(data => data.year),
        datasets: [
            {
                label: "value",
                data: Data.map(data => data.value),
                backgroundColor: [
                    'steelblue',
                    'coral',
                    'salmon',
                    'orange',
                    '#194d33',
                    '#c2185b',
                    '#303f9f'
                ]
            }
        ]
    });

    return (
        <div className='home'>
            <h1 className='heading'> Assignment of Plotmydata</h1>
            <div className='container'>
            <BarChart chartData={userData} />
            <LineChart chartData={userData}/>
            <Pichart chartData={userData}/>
            <Doughnutchart chartData={userData}/>
            <PolarChart chartData={userData}/>
            <RadarChart chartData={userData}/>
            </div>
        </div>
    );
};

export default Home;