import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', projects: 4 },
  { name: 'Feb', projects: 6 },
  { name: 'Mar', projects: 5 },
];

const Dashboard = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">Project Completion Over Time</Typography>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="projects" stroke="#8884d8" />
      </LineChart>
    </CardContent>
  </Card>
);

export default Dashboard;
