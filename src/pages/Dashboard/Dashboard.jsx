import {
  ShoppingCartOutlined,
  CalendarOutlined,
  TeamOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import StatCard from '../../components/StatCard/StatCard';
import SalesChart from '../../components/SalesChart/SalesChart';
import QuickActions from '../../components/QuickActions/QuickActions';
import RecentActivity from '../../components/RecentActivity/RecentActivity';
import RecentOrders from '../../components/RecentOrders/RecentOrders';
import RecentUsers from '../../components/RecentUsers/RecentUsers';
import Notifications from '../../components/Notifications/Notifications';
import './Dashboard.css';

const stats = [
  {
    key: 'orders-today',
    title: 'Orders Today',
    value: '42',
    icon: <ShoppingCartOutlined />,
    accentColor: '#f17547',
    iconBg: '#fdf1ec',
  },
  {
    key: 'orders-week',
    title: 'Orders This Week',
    value: '287',
    icon: <CalendarOutlined />,
    accentColor: '#cc5f00',
    iconBg: '#ffecd6',
  },
  {
    key: 'total-users',
    title: 'Total Users',
    value: '86',
    icon: <TeamOutlined />,
    accentColor: '#2563eb',
    iconBg: '#dbeafe',
  },
  {
    key: 'total-products',
    title: 'Total Products',
    value: '1,254',
    icon: <AppstoreOutlined />,
    accentColor: '#9333ea',
    iconBg: '#f3e8ff',
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="dashboard">
        {/* Welcome */}
        <section className="dashboard__welcome">
          <h1 className="dashboard__welcome-title">Welcome back, Devon Lane!</h1>
          <p className="dashboard__welcome-sub">
            Here&apos;s what&apos;s happening on{' '}
            <strong>Monday, July 28, 2025</strong>
          </p>
        </section>

        {/* Stat Cards */}
        <section className="dashboard__stats">
          {stats.map((s) => (
            <StatCard
              key={s.key}
              title={s.title}
              value={s.value}
              icon={s.icon}
              accentColor={s.accentColor}
              iconBg={s.iconBg}
            />
          ))}
        </section>

        {/* Chart + Quick Actions row */}
        <section className="dashboard__row">
          <SalesChart />
          <div className="dashboard__side-panel">
            <QuickActions />
            <RecentActivity />
          </div>
        </section>

        {/* Orders + Users row */}
        <section className="dashboard__row">
          <RecentOrders />
          <RecentUsers />
        </section>

        {/* Notifications */}
        <section className="dashboard__notifications">
          <Notifications />
        </section>
      </div>
    </DashboardLayout>
  );
}
