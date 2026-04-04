import { useState } from 'react';
import {
  SearchOutlined,
  EyeOutlined,
  EditOutlined,
  CopyOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Input, Select, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './Finance.css';

const transactions = [
  {
    key: 1,
    orderId: '#ORD-7829',
    date: 'July 28, 2024',
    time: '10:23 AM',
    customer: 'Theresa Webb',
    location: 'NY, USA',
    avatar: 'https://i.pravatar.cc/80?img=5',
    payment: '356.00',
    status: 'In Progress',
  },
  {
    key: 2,
    orderId: '#ORD-7828',
    date: 'July 28, 2024',
    time: '09:47 AM',
    customer: 'Guy Hawkins',
    location: 'NY, USA',
    avatar: 'https://i.pravatar.cc/80?img=8',
    payment: '1,250.00',
    status: 'Accepted',
  },
  {
    key: 3,
    orderId: '#ORD-7827',
    date: 'July 28, 2024',
    time: '08:15 AM',
    customer: 'Jacob Jones',
    location: 'NY, USA',
    avatar: 'https://i.pravatar.cc/80?img=11',
    payment: '480.00',
    status: 'Completed',
  },
  {
    key: 4,
    orderId: '#ORD-7826',
    date: 'July 27, 2024',
    time: '11:32 PM',
    customer: 'Cameron Williamson',
    location: 'NY, USA',
    avatar: 'https://i.pravatar.cc/80?img=15',
    payment: '750.00',
    status: 'Pending',
  },
  {
    key: 5,
    orderId: '#ORD-7825',
    date: 'July 27, 2024',
    time: '06:19 PM',
    customer: 'Esther Howard',
    location: 'NY, USA',
    avatar: 'https://i.pravatar.cc/80?img=20',
    payment: '195.00',
    status: 'Rejected',
  },
];

const statusConfig = {
  'In Progress': { className: 'finance-table__badge--in-progress' },
  Accepted: { className: 'finance-table__badge--accepted' },
  Completed: { className: 'finance-table__badge--completed' },
  Pending: { className: 'finance-table__badge--pending' },
  Rejected: { className: 'finance-table__badge--rejected' },
};

const paginationItems = [1, 2, 3, '...', 5];

export default function Finance() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleRow = (key) => {
    setSelectedRows((prev) => {
      const next = prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key];
      setSelectAll(next.length === transactions.length);
      return next;
    });
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    setSelectedRows(checked ? transactions.map((t) => t.key) : []);
  };

  return (
    <DashboardLayout activeKey="finance">
      <div className="finance-page">
        {/* Filters */}
        <div className="finance-filters">
          <Input
            className="finance-filters__search"
            placeholder="Search by Order ID, Customer or User"
            prefix={<SearchOutlined style={{ color: '#9ca3af' }} />}
            size="large"
          />
          <div className="finance-filters__dropdowns">
            <Select
              defaultValue="all-statuses"
              className="finance-filters__select"
              size="large"
              options={[
                { value: 'all-statuses', label: 'All Statuses' },
                { value: 'in-progress', label: 'In Progress' },
                { value: 'accepted', label: 'Accepted' },
                { value: 'completed', label: 'Completed' },
                { value: 'pending', label: 'Pending' },
                { value: 'rejected', label: 'Rejected' },
              ]}
            />
            <Select
              defaultValue="all-payments"
              className="finance-filters__select"
              size="large"
              options={[
                { value: 'all-payments', label: 'All Payments' },
                { value: 'paid', label: 'Paid' },
                { value: 'unpaid', label: 'Unpaid' },
                { value: 'refunded', label: 'Refunded' },
              ]}
            />
            <Select
              defaultValue="all-delivery"
              className="finance-filters__select"
              size="large"
              options={[
                { value: 'all-delivery', label: 'All Delivery' },
                { value: 'standard', label: 'Standard' },
                { value: 'express', label: 'Express' },
              ]}
            />
            <Button
              icon={<CalendarOutlined />}
              size="large"
              className="finance-filters__date-btn"
            >
              Date Range
            </Button>
          </div>
        </div>

        {/* Select All */}
        <div className="finance-select-all">
          <Checkbox checked={selectAll} onChange={handleSelectAll}>
            Select All
          </Checkbox>
        </div>

        {/* Table card */}
        <div className="finance-table-card">
          <table className="finance-table">
            <thead>
              <tr>
                <th className="finance-table__th finance-table__th--check" />
                <th className="finance-table__th">Order ID</th>
                <th className="finance-table__th">Date &amp; Time</th>
                <th className="finance-table__th">Customer</th>
                <th className="finance-table__th">Payment</th>
                <th className="finance-table__th">Status</th>
                <th className="finance-table__th finance-table__th--actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.key} className="finance-table__row">
                  <td className="finance-table__td finance-table__td--check">
                    <Checkbox
                      checked={selectedRows.includes(txn.key)}
                      onChange={() => toggleRow(txn.key)}
                    />
                  </td>
                  <td className="finance-table__td">
                    <Link to={`/orders/${txn.key}`} className="finance-table__order-id">{txn.orderId}</Link>
                  </td>
                  <td className="finance-table__td">
                    <div className="finance-table__datetime">
                      <span className="finance-table__date">{txn.date}</span>
                      <span className="finance-table__time">{txn.time}</span>
                    </div>
                  </td>
                  <td className="finance-table__td">
                    <div className="finance-table__customer">
                      <img
                        className="finance-table__avatar"
                        src={txn.avatar}
                        alt={txn.customer}
                      />
                      <div className="finance-table__customer-info">
                        <span className="finance-table__customer-name">{txn.customer}</span>
                        <span className="finance-table__customer-location">{txn.location}</span>
                      </div>
                    </div>
                  </td>
                  <td className="finance-table__td">
                    <span className="finance-table__payment">$ {txn.payment}</span>
                  </td>
                  <td className="finance-table__td">
                    <span className={`finance-table__badge ${statusConfig[txn.status].className}`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="finance-table__td">
                    <div className="finance-table__actions">
                      <Link to={`/orders/${txn.key}`} className="finance-table__action-btn" aria-label="View">
                        <EyeOutlined />
                      </Link>
                      <button className="finance-table__action-btn" aria-label="Edit">
                        <EditOutlined />
                      </button>
                      <button className="finance-table__action-btn" aria-label="Copy">
                        <CopyOutlined />
                      </button>
                      <button className="finance-table__action-btn finance-table__action-btn--delete" aria-label="Delete">
                        <DeleteOutlined />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="finance-pagination">
            <span className="finance-pagination__info">
              Showing <strong>1</strong> to <strong>5</strong> of <strong>24</strong> orders
            </span>
            <nav className="finance-pagination__nav">
              <button
                className="finance-pagination__btn finance-pagination__btn--arrow"
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <LeftOutlined />
              </button>
              {paginationItems.map((page, i) => (
                <button
                  key={i}
                  className={`finance-pagination__btn ${page === currentPage ? 'finance-pagination__btn--active' : ''} ${page === '...' ? 'finance-pagination__btn--ellipsis' : ''}`}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  disabled={page === '...'}
                >
                  {page}
                </button>
              ))}
              <button
                className="finance-pagination__btn finance-pagination__btn--arrow"
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
