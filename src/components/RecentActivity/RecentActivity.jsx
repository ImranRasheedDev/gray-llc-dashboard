import {
  DeleteOutlined,
  UserAddOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import './RecentActivity.css';

const activities = [
  {
    key: 1,
    icon: <DeleteOutlined />,
    iconBg: 'var(--color-yellow-light)',
    iconColor: 'var(--color-yellow-dark)',
    text: 'Recently removed a review',
    time: '6 hours ago',
  },
  {
    key: 2,
    icon: <UserAddOutlined />,
    iconBg: 'var(--color-orange-light)',
    iconColor: 'var(--color-primary)',
    text: 'New user "Lorem Ipsum" joined',
    time: '2 hours ago',
  },
  {
    key: 3,
    icon: <ShoppingCartOutlined />,
    iconBg: 'var(--color-blue-light)',
    iconColor: 'var(--color-blue)',
    text: '15 new orders received',
    time: '4 hours ago',
  },
];

export default function RecentActivity() {
  return (
    <div className="recent-activity">
      <h4 className="recent-activity__title">Recent Activity</h4>
      <div className="recent-activity__list">
        {activities.map((item) => (
          <div key={item.key} className="recent-activity__item">
            <div
              className="recent-activity__icon"
              style={{ background: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
            </div>
            <div className="recent-activity__content">
              <span className="recent-activity__text">{item.text}</span>
              <span className="recent-activity__time">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
