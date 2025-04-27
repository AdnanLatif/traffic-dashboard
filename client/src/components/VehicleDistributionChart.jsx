import { useEffect, useState } from 'react';
import { fetchVehicles } from '../services/trafficService';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const chartColors = [
  '#FFBB28',
  '#00C49F',
  '#FF8042',
  '#0088FE',
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#ff7f50',
];

const VehicleDistributionChart = () => {
  const [vehicles, setVehicles] = useState([]);
  const [chartType, setChartType] = useState('bar');

  useEffect(() => {
    fetchVehicles()
      .then((response) => setVehicles(response.data))
      .catch((error) => console.error('Error fetching vehicles:', error));
  }, []);

  return (
    <div className='chart-container'>
      <h2>Vehicle Type Distribution</h2>

      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}>
          <option value='bar'>Bar Chart</option>
          <option value='line'>Line Chart</option>
          <option value='pie'>Pie Chart</option>
        </select>
      </div>

      <ResponsiveContainer width='100%' height={400}>
        {chartType === 'bar' && (
          <BarChart data={vehicles}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='vehicle_type' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='count' fill='#FF8042' />
          </BarChart>
        )}

        {chartType === 'line' && (
          <LineChart data={vehicles}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='vehicle_type' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='count' stroke='#00C49F' />
          </LineChart>
        )}

        {chartType === 'pie' && (
          <PieChart>
            <Pie
              data={vehicles}
              dataKey='count'
              nameKey='vehicle_type'
              cx='50%'
              cy='50%'
              outerRadius={150}
              fill='#FF8042'
              label>
              {vehicles.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={chartColors[index % chartColors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default VehicleDistributionChart;
