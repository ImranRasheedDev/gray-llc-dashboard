import { BellOutlined } from '@ant-design/icons';
import './Notifications.css';

const notifications = [
  {
    key: 1,
    title: 'New Signup',
    message: 'John Doe have joined Melbud.',
    time: '10 minutes ago',
  },
  {
    key: 2,
    title: 'New Product Added',
    message: (
      <>John Doe added a new product <strong>Bliss Flower</strong></>
    ),
    time: '10 minutes ago',
  },
  {
    key: 3,
    title: 'New Review',
    message: 'Customer left a 4-star review for "Exotic Succulents Collection"',
    time: '10 minutes ago',
  },
];

export default function Notifications() {
  return (
    <div className="notifications">
      <div className="notifications__header">
        <h3 className="notifications__title">Recent Notifications</h3>
        <a href="#" className="notifications__link">Mark All as Read</a>
      </div>
      <div className="notifications__grid">
        {notifications.map((n) => (
          <div key={n.key} className="notifications__card">
            <div className="notifications__icon-wrap">
              <BellOutlined />
            </div>
            <div className="notifications__content">
              <span className="notifications__card-title">{n.title}</span>
              <p className="notifications__message">{n.message}</p>
              <span className="notifications__time">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
