import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/trafficService';
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
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#ff7f50',
  '#0088FE',
  '#FFBB28',
  '#00C49F',
  '#FF8042',
];

const CountryTrafficChart = () => {
  const [countries, setCountries] = useState([]);
  const [chartType, setChartType] = useState('bar');

  useEffect(() => {
    fetchCountries()
      .then((response) => setCountries(response.data))
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className='chart-container'>
      <h2>Country-wise Traffic</h2>

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
          <BarChart data={countries}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='country' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='vehicle_count' fill='#8884d8' />
          </BarChart>
        )}

        {chartType === 'line' && (
          <LineChart data={countries}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='country' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='vehicle_count' stroke='#82ca9d' />
          </LineChart>
        )}

        {chartType === 'pie' && (
          <PieChart>
            <Pie
              data={countries}
              dataKey='vehicle_count'
              nameKey='country'
              cx='50%'
              cy='50%'
              outerRadius={150}
              fill='#8884d8'
              label>
              {countries.map((entry, index) => (
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

export default CountryTrafficChart;
