import {
  DashboardOutlined,
  UserOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';
import './Sidebar.css';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: <DashboardOutlined /> },
  { key: 'users', label: 'Users', icon: <UserOutlined /> },
  { key: 'products', label: 'Products', icon: <ShoppingOutlined /> },
  { key: 'orders', label: 'Orders', icon: <ShoppingCartOutlined /> },
  { key: 'finance', label: 'Finance Management', icon: <DollarOutlined /> },
];

export default function Sidebar({ activeKey = 'dashboard' }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <a
            key={item.key}
            href="#"
            className={`sidebar__item ${item.key === activeKey ? 'sidebar__item--active' : ''}`}
          >
            <span className="sidebar__icon">{item.icon}</span>
            <span className="sidebar__label">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar__profile">
        <Avatar size={44} src="https://i.pravatar.cc/88?img=12" />
        <div className="sidebar__profile-info">
          <span className="sidebar__profile-name">John Doe</span>
          <span className="sidebar__profile-role">Admin</span>
        </div>
        <button className="sidebar__logout" aria-label="Logout">
          <LogoutOutlined />
        </button>
      </div>
    </aside>
  );
}
