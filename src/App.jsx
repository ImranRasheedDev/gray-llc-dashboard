import { ConfigProvider } from 'antd';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';

const antTheme = {
  token: {
    colorPrimary: '#f17547',
    fontFamily: "'Jost', sans-serif",
    borderRadius: 8,
    colorBgContainer: '#ffffff',
  },
};

function App() {
  return (
    <ConfigProvider theme={antTheme}>
      <Dashboard />
    </ConfigProvider>
  );
}

export default App;
