import { ShoppingOutlined, TeamOutlined } from '@ant-design/icons';
import './QuickActions.css';

const actions = [
  { key: 'products', label: 'View Products', icon: <ShoppingOutlined /> },
  { key: 'users', label: 'View Users', icon: <TeamOutlined /> },
];

export default function QuickActions() {
  return (
    <div className="quick-actions">
      <h3 className="quick-actions__title">Quick Actions</h3>
      <div className="quick-actions__grid">
        {actions.map((action) => (
          <button key={action.key} className="quick-actions__btn">
            <span className="quick-actions__btn-icon">{action.icon}</span>
            <span className="quick-actions__btn-label">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
