import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import './DashboardLayout.css';

export default function DashboardLayout({ children, activeKey = 'dashboard' }) {
  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar activeKey={activeKey} />
      <main className="dashboard-layout__main">
        {children}
      </main>
    </div>
  );
}
