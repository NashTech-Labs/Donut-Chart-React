import { Box, Typography } from '@mui/material';
import './App.css';
import DonutChart from './Components/DonutChart';

const data = [
  { value: 17, label: 'FrontEnd', color: '#b30000' },
  { value: 12, label: 'Backend', color: '#000080' },
  { value: 8, label: 'Database', color: '#595959' },
  { value: 20, label: 'Automation', color: '#0086b3' },
];

function App() {
  return (
    <div className='App'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '50vh',
        }}
      >
        <Typography variant='h4' sx={{ paddingTop: '3rem' }}>
          Donut Chart with Center Label
        </Typography>
        <DonutChart data={data} />
      </Box>
    </div>
  );
}

export default App;
