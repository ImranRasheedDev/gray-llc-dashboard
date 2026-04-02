import { EyeOutlined } from '@ant-design/icons';
import { Table, Tag } from 'antd';
import './RecentOrders.css';

const statusConfig = {
  Delivered: { color: '#15803d', bg: '#dcfce7' },
  Processing: { color: '#1d4ed8', bg: '#dbeafe' },
  Shipped: { color: '#a16207', bg: '#fef9c3' },
  Pending: { color: '#374151', bg: '#f3f4f6' },
};

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'orderId',
    key: 'orderId',
    width: 130,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
    width: 180,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    width: 120,
    render: (val) => `$ ${val}`,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 130,
    render: (status) => {
      const cfg = statusConfig[status];
      return (
        <Tag
          style={{
            color: cfg.color,
            background: cfg.bg,
            border: 'none',
            borderRadius: 999,
            fontFamily: 'var(--font-heading)',
            fontSize: 12,
          }}
        >
          {status}
        </Tag>
      );
    },
  },
  {
    title: 'Action',
    key: 'action',
    width: 80,
    render: () => (
      <button className="orders-table__action" aria-label="View order">
        <EyeOutlined />
      </button>
    ),
  },
];

const data = [
  { key: '1', orderId: '#ORD-7865', customer: 'Eleanor Pena', amount: '350.00', status: 'Delivered' },
  { key: '2', orderId: '#ORD-7864', customer: 'Cody Fisher', amount: '125.50', status: 'Processing' },
  { key: '3', orderId: '#ORD-7863', customer: 'Kristin Watson', amount: '275.00', status: 'Shipped' },
  { key: '4', orderId: '#ORD-7862', customer: 'Kathryn Murphy', amount: '520.75', status: 'Pending' },
  { key: '5', orderId: '#ORD-7861', customer: 'Theresa Webb', amount: '175.25', status: 'Delivered' },
  { key: '6', orderId: '#ORD-7865', customer: 'Jane Cooper', amount: '350.00', status: 'Delivered' },
  { key: '7', orderId: '#ORD-7864', customer: 'Marvin McKinney', amount: '125.50', status: 'Processing' },
  { key: '8', orderId: '#ORD-7863', customer: 'Savannah Nguyen', amount: '275.00', status: 'Shipped' },
  { key: '9', orderId: '#ORD-7862', customer: 'Cameron Williamson', amount: '520.75', status: 'Pending' },
  { key: '10', orderId: '#ORD-7861', customer: 'Jenny Wilson', amount: '175.25', status: 'Delivered' },
];

export default function RecentOrders() {
  return (
    <div className="recent-orders">
      <div className="recent-orders__header">
        <h3 className="recent-orders__title">Recent Orders</h3>
        <a href="#" className="recent-orders__link">View All</a>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="middle"
        className="recent-orders__table"
      />
    </div>
  );
}
