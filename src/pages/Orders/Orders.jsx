import { useState } from 'react';
import {
  SearchOutlined,
  EyeOutlined,
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Input, Select, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './Orders.css';

const orders = [
  {
    key: 1,
    orderId: '#ORD-7829',
    date: 'July 28, 2024',
    time: '10:23 AM',
    customer: 'Theresa Webb',
    location: 'NY, USA',
    avatar: 'https://i.pravatar.cc/80?img=5',
    amount: '356.00',
    status: 'Processing',
  },
  {
    key: 2,
    orderId: '#ORD-7828',
    date: 'July 28, 2024',
    time: '09:47 AM',
    customer: 'Guy Hawkins',
    location: 'NY, USA',
    avatar: 'https://i.pravatar.cc/80?img=8',
    amount: '1,250.00',
    status: 'Shipped',
  },
  {
    key: 3,
    orderId: '#ORD-7827',
    date: 'July 28, 2024',
    time: '08:15 AM',
    customer: 'Jacob Jones',
    location: 'NY, USA',
    avatar: 'https://i.pravatar.cc/80?img=11',
    amount: '480.00',
    status: 'Delivered',
  },
  {
    key: 4,
    orderId: '#ORD-7826',
    date: 'July 27, 2024',
    time: '11:32 PM',
    customer: 'Cameron Williamson',
    location: 'NY, USA',
    avatar: 'https://i.pravatar.cc/80?img=15',
    amount: '750.00',
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
    amount: '195.00',
    status: 'Cancelled',
  },
];

const statusConfig = {
  Processing: { className: 'orders-table__badge--processing' },
  Shipped: { className: 'orders-table__badge--shipped' },
  Delivered: { className: 'orders-table__badge--delivered' },
  Pending: { className: 'orders-table__badge--pending' },
  Cancelled: { className: 'orders-table__badge--cancelled' },
};

const paginationItems = [1, 2, 3, '...', 5];

export default function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleRow = (key) => {
    setSelectedRows((prev) => {
      const next = prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key];
      setSelectAll(next.length === orders.length);
      return next;
    });
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    setSelectedRows(checked ? orders.map((o) => o.key) : []);
  };

  return (
    <DashboardLayout activeKey="orders">
      <div className="orders-page">
        {/* Filters */}
        <div className="orders-filters">
          <Input
            className="orders-filters__search"
            placeholder="Search by Order ID, Customer or User"
            prefix={<SearchOutlined style={{ color: '#9ca3af' }} />}
            size="large"
          />
          <div className="orders-filters__dropdowns">
            <Select
              defaultValue="all-statuses"
              className="orders-filters__select"
              size="large"
              options={[
                { value: 'all-statuses', label: 'All Statuses' },
                { value: 'processing', label: 'Processing' },
                { value: 'shipped', label: 'Shipped' },
                { value: 'delivered', label: 'Delivered' },
                { value: 'pending', label: 'Pending' },
                { value: 'cancelled', label: 'Cancelled' },
              ]}
            />
            <Select
              defaultValue="all-payments"
              className="orders-filters__select"
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
              className="orders-filters__select"
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
              className="orders-filters__date-btn"
            >
              Date Range
            </Button>
          </div>
        </div>

        {/* Select All */}
        <div className="orders-select-all">
          <Checkbox checked={selectAll} onChange={handleSelectAll}>
            Select All
          </Checkbox>
        </div>

        {/* Table card */}
        <div className="orders-table-card">
          <table className="orders-table">
            <thead>
              <tr>
                <th className="orders-table__th orders-table__th--check" />
                <th className="orders-table__th">Order ID</th>
                <th className="orders-table__th">Date &amp; Time</th>
                <th className="orders-table__th">Customer</th>
                <th className="orders-table__th">Amount</th>
                <th className="orders-table__th">Status</th>
                <th className="orders-table__th orders-table__th--actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.key} className="orders-table__row">
                  <td className="orders-table__td orders-table__td--check">
                    <Checkbox
                      checked={selectedRows.includes(order.key)}
                      onChange={() => toggleRow(order.key)}
                    />
                  </td>
                  <td className="orders-table__td">
                    <Link to={`/orders/${order.key}`} className="orders-table__order-id">{order.orderId}</Link>
                  </td>
                  <td className="orders-table__td">
                    <div className="orders-table__datetime">
                      <span className="orders-table__date">{order.date}</span>
                      <span className="orders-table__time">{order.time}</span>
                    </div>
                  </td>
                  <td className="orders-table__td">
                    <div className="orders-table__customer">
                      <img
                        className="orders-table__avatar"
                        src={order.avatar}
                        alt={order.customer}
                      />
                      <div className="orders-table__customer-info">
                        <span className="orders-table__customer-name">{order.customer}</span>
                        <span className="orders-table__customer-location">{order.location}</span>
                      </div>
                    </div>
                  </td>
                  <td className="orders-table__td">
                    <span className="orders-table__amount">$ {order.amount}</span>
                  </td>
                  <td className="orders-table__td">
                    <span className={`orders-table__badge ${statusConfig[order.status].className}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="orders-table__td">
                    <div className="orders-table__actions">
                      <Link to={`/orders/${order.key}`} className="orders-table__action-btn" aria-label="View">
                        <EyeOutlined />
                      </Link>
                      <button className="orders-table__action-btn orders-table__action-btn--success" aria-label="Approve">
                        <CheckOutlined />
                      </button>
                      <button className="orders-table__action-btn orders-table__action-btn--danger" aria-label="Reject">
                        <CloseOutlined />
                      </button>
                      <button className="orders-table__action-btn orders-table__action-btn--delete" aria-label="Delete">
                        <DeleteOutlined />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="orders-pagination">
            <span className="orders-pagination__info">
              Showing <strong>1</strong> to <strong>5</strong> of <strong>24</strong> orders
            </span>
            <nav className="orders-pagination__nav">
              <button
                className="orders-pagination__btn orders-pagination__btn--arrow"
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <LeftOutlined />
              </button>
              {paginationItems.map((page, i) => (
                <button
                  key={i}
                  className={`orders-pagination__btn ${page === currentPage ? 'orders-pagination__btn--active' : ''} ${page === '...' ? 'orders-pagination__btn--ellipsis' : ''}`}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  disabled={page === '...'}
                >
                  {page}
                </button>
              ))}
              <button
                className="orders-pagination__btn orders-pagination__btn--arrow"
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
