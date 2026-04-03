import { useState } from 'react';
import {
  SearchOutlined,
  EyeOutlined,
  PauseOutlined,
  DeleteOutlined,
  CaretRightOutlined,
  CloseOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Avatar, Input, Select, Checkbox } from 'antd';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './Users.css';

const users = [
  {
    key: 1,
    name: 'Eleanor Pena',
    email: 'eleano.r@gmail.com',
    phone: '(684) 555-0102',
    city: 'NYC',
    state: 'NY, USA',
    product: 'Snow white touch screen AC',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/88?img=5',
  },
  {
    key: 2,
    name: 'Devon Lane',
    email: 'eleano.r@gmail.com',
    phone: '(239) 555-0108',
    city: 'NYC',
    state: 'NY, USA',
    product: 'Snow white touch screen AC',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/88?img=8',
  },
  {
    key: 3,
    name: 'Courtney Henry',
    email: 'eleano.r@gmail.com',
    phone: '(252) 555-0126',
    city: 'NYC',
    state: 'NY, USA',
    product: 'Snow white touch screen AC',
    status: 'Pending',
    avatar: 'https://i.pravatar.cc/88?img=9',
  },
  {
    key: 4,
    name: 'Darlene Robertson',
    email: 'eleano.r@gmail.com',
    phone: '(217) 555-0113',
    city: 'NYC',
    state: 'NY, USA',
    product: 'Snow white touch screen AC',
    status: 'Suspended',
    avatar: 'https://i.pravatar.cc/88?img=15',
  },
  {
    key: 5,
    name: 'Cameron Williamson',
    email: 'eleano.r@gmail.com',
    phone: '(907) 555-0101',
    city: 'NYC',
    state: 'NY, USA',
    product: 'Snow white touch screen AC',
    status: 'Pending',
    avatar: 'https://i.pravatar.cc/88?img=11',
  },
  {
    key: 6,
    name: 'Wade Warren',
    email: 'eleano.r@gmail.com',
    phone: '(270) 555-0117',
    city: 'NYC',
    state: 'NY, USA',
    product: 'Snow white touch screen AC',
    status: 'Pending',
    avatar: 'https://i.pravatar.cc/88?img=11',
  },
  {
    key: 7,
    name: 'Robert Fox',
    email: 'eleano.r@gmail.com',
    phone: '(808) 555-0111',
    city: 'NYC',
    state: 'NY, USA',
    product: 'Snow white touch screen AC',
    status: 'Pending',
    avatar: 'https://i.pravatar.cc/88?img=11',
  },
];

const statusConfig = {
  Active: { className: 'users-table__badge--active' },
  Pending: { className: 'users-table__badge--pending' },
  Suspended: { className: 'users-table__badge--suspended' },
};

const pages = [1, 2, 3, '...', 9];

function ActionButtons({ status }) {
  if (status === 'Active') {
    return (
      <div className="users-table__actions">
        <button className="users-table__action-btn" aria-label="View"><EyeOutlined /></button>
        <button className="users-table__action-btn" aria-label="Pause"><PauseOutlined /></button>
        <button className="users-table__action-btn users-table__action-btn--danger" aria-label="Delete"><DeleteOutlined /></button>
      </div>
    );
  }
  if (status === 'Suspended') {
    return (
      <div className="users-table__actions">
        <button className="users-table__action-btn" aria-label="View"><EyeOutlined /></button>
        <button className="users-table__action-btn users-table__action-btn--success" aria-label="Activate"><CaretRightOutlined /></button>
        <button className="users-table__action-btn users-table__action-btn--danger" aria-label="Delete"><DeleteOutlined /></button>
      </div>
    );
  }
  return (
    <div className="users-table__actions">
      <button className="users-table__action-btn" aria-label="View"><EyeOutlined /></button>
      <button className="users-table__action-btn users-table__action-btn--success" aria-label="Approve"><CaretRightOutlined /></button>
      <button className="users-table__action-btn users-table__action-btn--danger" aria-label="Reject"><CloseOutlined /></button>
    </div>
  );
}

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRow = (key) => {
    setSelectedRows((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <DashboardLayout activeKey="users">
      <div className="users-page">
        {/* Filters */}
        <div className="users-filters">
          <Input
            className="users-filters__search"
            placeholder="Search users by name, email"
            prefix={<SearchOutlined style={{ color: '#9ca3af' }} />}
            size="large"
          />
          <div className="users-filters__dropdowns">
            <Select
              defaultValue="all"
              className="users-filters__select"
              size="large"
              options={[
                { value: 'all', label: 'All Statuses' },
                { value: 'active', label: 'Active' },
                { value: 'pending', label: 'Pending' },
                { value: 'suspended', label: 'Suspended' },
              ]}
            />
            <Select
              defaultValue="all"
              className="users-filters__select"
              size="large"
              options={[
                { value: 'all', label: 'All Locations' },
                { value: 'nyc', label: 'NYC' },
              ]}
            />
            <Select
              defaultValue="all"
              className="users-filters__select"
              size="large"
              options={[
                { value: 'all', label: 'All Products' },
                { value: 'ac', label: 'Snow white touch screen AC' },
              ]}
            />
          </div>
        </div>

        {/* Table */}
        <div className="users-table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th className="users-table__th users-table__th--user">User</th>
                <th className="users-table__th">Contact</th>
                <th className="users-table__th">Location</th>
                <th className="users-table__th">Products</th>
                <th className="users-table__th">Status</th>
                <th className="users-table__th">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.key} className="users-table__row">
                  <td className="users-table__td users-table__td--user">
                    <Checkbox
                      checked={selectedRows.includes(user.key)}
                      onChange={() => toggleRow(user.key)}
                    />
                    <Avatar size={40} src={user.avatar} />
                    <span className="users-table__name">{user.name}</span>
                  </td>
                  <td className="users-table__td">
                    <div className="users-table__contact">
                      <span className="users-table__email">{user.email}</span>
                      <span className="users-table__phone">{user.phone}</span>
                    </div>
                  </td>
                  <td className="users-table__td">
                    <div className="users-table__location">
                      <span className="users-table__city">{user.city}</span>
                      <span className="users-table__state">{user.state}</span>
                    </div>
                  </td>
                  <td className="users-table__td">
                    <span className="users-table__product">{user.product}</span>
                  </td>
                  <td className="users-table__td">
                    <span className={`users-table__badge ${statusConfig[user.status].className}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="users-table__td">
                    <ActionButtons status={user.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="users-pagination">
            <span className="users-pagination__info">
              Showing <strong>1</strong> to <strong>5</strong> of <strong>45</strong> users
            </span>
            <nav className="users-pagination__nav">
              <button
                className="users-pagination__btn users-pagination__btn--arrow"
                aria-label="Previous page"
              >
                <LeftOutlined />
              </button>
              {pages.map((page, i) => (
                <button
                  key={i}
                  className={`users-pagination__btn ${page === currentPage ? 'users-pagination__btn--active' : ''} ${page === '...' ? 'users-pagination__btn--ellipsis' : ''}`}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  disabled={page === '...'}
                >
                  {page}
                </button>
              ))}
              <button
                className="users-pagination__btn users-pagination__btn--arrow"
                aria-label="Next page"
              >
                <RightOutlined />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
