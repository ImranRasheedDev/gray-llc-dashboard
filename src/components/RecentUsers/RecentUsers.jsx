import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import './RecentUsers.css';

const users = [
  { key: 1, name: 'Lorem Ipsum', date: 'July 27, 2023', color: '#6366f1' },
  { key: 2, name: 'Lorem Ipsum', date: 'July 26, 2023', color: '#f97316' },
  { key: 3, name: 'Lorem Ipsum', date: 'July 25, 2023', color: '#10b981' },
  { key: 4, name: 'Lorem Ipsum', date: 'July 24, 2023', color: '#ec4899' },
  { key: 5, name: 'Lorem Ipsum', date: 'July 25, 2023', color: '#8b5cf6' },
  { key: 6, name: 'Lorem Ipsum', date: 'July 25, 2023', color: '#14b8a6' },
];

export default function RecentUsers() {
  return (
    <div className="recent-users">
      <div className="recent-users__header">
        <h3 className="recent-users__title">Recently Joined Users</h3>
        <a href="#" className="recent-users__link">View All</a>
      </div>
      <div className="recent-users__list">
        {users.map((user) => (
          <div key={user.key} className="recent-users__card">
            <Avatar
              size={40}
              icon={<UserOutlined />}
              style={{ background: '#f3f4f6', color: user.color }}
              className="recent-users__avatar"
            />
            <div className="recent-users__info">
              <span className="recent-users__name">{user.name}</span>
              <span className="recent-users__date">Applied: {user.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
