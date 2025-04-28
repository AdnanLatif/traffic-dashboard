import CountryTrafficChart from '../components/CountryTrafficChart';
import VehicleDistributionChart from '../components/VehicleDistributionChart';

const Dashboard = () => {
  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Traffic Dashboard
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}>
        <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
          <CountryTrafficChart />
        </div>

        <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
          <VehicleDistributionChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
