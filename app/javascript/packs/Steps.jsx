import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const Steps = ({steps}) =>
  <div className="card">
    <div className="card-heading"><h4>Steps</h4></div>
    <div className="card-body">
      <BarChart width={500} height={300} data={steps["activities-steps"]} 
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="dateTime" />
      <YAxis />
      <Tooltip/>
      <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  </div>
    
export default Steps;