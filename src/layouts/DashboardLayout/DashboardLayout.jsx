import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './DashboardLayout.css';

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar activeKey="dashboard" />
      <main className="dashboard-layout__main">
        {children}
      </main>
    </div>
  );
}
