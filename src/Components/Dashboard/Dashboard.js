import React from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const data =[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    
    return (
        <div className='chart-container'> 
            <div className='m-20'>
                <LineChart width={500} height={450} data={data}>
                    <Line dataKey={'revenue'} stroke="red" ></Line>
                    <Line dataKey={'investment'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </LineChart>
                <h1 className='text-4xl my-5'>Line chart</h1>
            </div>
            <div className='m-20'>
                <BarChart width={500} height={450} data={data}>
                    <Bar dataKey={'revenue'} fill='#8884D8'></Bar>
                    <Bar dataKey={'investment'} fill='#9901F0'></Bar>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </BarChart>
                <h1 className='text-4xl my-5'>Bar chart</h1>
            </div>
        </div>
    );
};

export default Dashboard;