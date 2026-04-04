import {
  ArrowLeftOutlined,
  MailOutlined,
  PhoneOutlined,
  ShoppingOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './OrderDetail.css';

const order = {
  id: '#ORD-7829',
  status: 'Processing',
  items: [
    { key: 1, name: 'Snow white touch screen AC', price: 79.99, qty: 1, image: '/placeholder-product.png' },
    { key: 2, name: 'Snow white touch screen AC', price: 24.99, qty: 1, image: '/placeholder-product.png' },
    { key: 3, name: 'Snow white touch screen AC', price: 14.99, qty: 1, image: '/placeholder-product.png' },
  ],
  cost: {
    subtotal: 119.97,
    discount: 10.00,
    delivery: 8.99,
    taxRate: 8.25,
    tax: 9.49,
    total: 128.45,
  },
  customer: {
    name: 'Jane Doe',
    initials: 'JD',
    since: 'Customer since Jan 2023',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    previousOrders: 5,
    recentOrders: [
      { id: '#ORD-7512', date: 'Jul 10, 2023', amount: '$95.20' },
      { id: '#ORD-7350', date: 'Jun 24, 2023', amount: '$42.99' },
      { id: '#ORD-7103', date: 'May 18, 2023', amount: '$127.50' },
    ],
  },
  shipping: {
    name: 'Jane Doe',
    street: '123 Main Street, Apt 4B',
    city: 'New York, NY 10001',
    country: 'United States',
    phone: '+1 (555) 123-4567',
  },
  billing: {
    name: 'Jane Doe',
    street: '123 Main Street, Apt 4B',
    city: 'New York, NY 10001',
    country: 'United States',
  },
};

const statusConfig = {
  Processing: 'order-detail__status-badge--processing',
  Shipped: 'order-detail__status-badge--shipped',
  Delivered: 'order-detail__status-badge--delivered',
  Pending: 'order-detail__status-badge--pending',
  Cancelled: 'order-detail__status-badge--cancelled',
};

export default function OrderDetail() {
  const navigate = useNavigate();
  const { id: _id } = useParams();

  return (
    <DashboardLayout activeKey="orders">
      <div className="order-detail">
        {/* Top bar */}
        <div className="order-detail__topbar">
          <div className="order-detail__topbar-left">
            <button
              className="order-detail__back-btn"
              onClick={() => navigate('/orders')}
              aria-label="Back to orders"
            >
              <ArrowLeftOutlined />
            </button>
            <h1 className="order-detail__title">Order {order.id}</h1>
            <span className={`order-detail__status-badge ${statusConfig[order.status]}`}>
              {order.status}
            </span>
          </div>
          <div className="order-detail__topbar-right">
            <Button
              icon={<DownloadOutlined />}
              className="order-detail__download-btn"
            >
              Download Invoice
            </Button>
          </div>
        </div>

        {/* Two-column content */}
        <div className="order-detail__content">
          {/* Left column — items + actions */}
          <div className="order-detail__left">
            <div className="order-detail__card">
              <div className="order-detail__card-header">
                <h2 className="order-detail__card-title">Ordered Items ({order.items.length})</h2>
              </div>
              <div className="order-detail__items">
                {order.items.map((item) => (
                  <div key={item.key} className="order-detail__item">
                    <div className="order-detail__item-image">
                      <ShoppingOutlined className="order-detail__item-icon" />
                    </div>
                    <span className="order-detail__item-name">{item.name}</span>
                    <div className="order-detail__item-pricing">
                      <span className="order-detail__item-price">${item.price.toFixed(2)}</span>
                      <span className="order-detail__item-qty">Qty: {item.qty}</span>
                      <span className="order-detail__item-total">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-detail__actions">
              <Button className="order-detail__reject-btn" size="large">
                Reject
              </Button>
              <Button type="primary" className="order-detail__accept-btn" size="large">
                Accept
              </Button>
            </div>
          </div>

          {/* Right column — summary, customer, addresses */}
          <div className="order-detail__right">
            {/* Cost Summary */}
            <div className="order-detail__card">
              <div className="order-detail__card-header">
                <h2 className="order-detail__card-title">Cost Summary</h2>
              </div>
              <div className="order-detail__summary">
                <div className="order-detail__summary-row">
                  <span className="order-detail__summary-label">Subtotal</span>
                  <span className="order-detail__summary-value">${order.cost.subtotal.toFixed(2)}</span>
                </div>
                <div className="order-detail__summary-row">
                  <span className="order-detail__summary-label">Discount</span>
                  <span className="order-detail__summary-value order-detail__summary-value--discount">-${order.cost.discount.toFixed(2)}</span>
                </div>
                <div className="order-detail__summary-row">
                  <span className="order-detail__summary-label">Delivery Charges</span>
                  <span className="order-detail__summary-value">${order.cost.delivery.toFixed(2)}</span>
                </div>
                <div className="order-detail__summary-row">
                  <span className="order-detail__summary-label">Tax ({order.cost.taxRate}%)</span>
                  <span className="order-detail__summary-value">${order.cost.tax.toFixed(2)}</span>
                </div>
                <div className="order-detail__summary-divider" />
                <div className="order-detail__summary-row order-detail__summary-row--total">
                  <span className="order-detail__summary-label">Total</span>
                  <span className="order-detail__summary-value">${order.cost.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Customer Information */}
            <div className="order-detail__card">
              <div className="order-detail__card-header">
                <h2 className="order-detail__card-title">Customer Information</h2>
              </div>
              <div className="order-detail__customer">
                <div className="order-detail__customer-header">
                  <div className="order-detail__customer-avatar">
                    <span>{order.customer.initials}</span>
                  </div>
                  <div className="order-detail__customer-meta">
                    <span className="order-detail__customer-name">{order.customer.name}</span>
                    <span className="order-detail__customer-since">{order.customer.since}</span>
                  </div>
                  <button className="order-detail__view-profile">View Profile</button>
                </div>

                <div className="order-detail__customer-contacts">
                  <div className="order-detail__contact-row">
                    <MailOutlined className="order-detail__contact-icon" />
                    <span>{order.customer.email}</span>
                  </div>
                  <div className="order-detail__contact-row">
                    <PhoneOutlined className="order-detail__contact-icon" />
                    <span>{order.customer.phone}</span>
                  </div>
                  <div className="order-detail__contact-row">
                    <ShoppingOutlined className="order-detail__contact-icon" />
                    <span>{order.customer.previousOrders} previous orders</span>
                  </div>
                </div>

                <div className="order-detail__recent-orders">
                  <h3 className="order-detail__recent-title">Recent Orders</h3>
                  {order.customer.recentOrders.map((ro) => (
                    <div key={ro.id} className="order-detail__recent-row">
                      <span className="order-detail__recent-id">{ro.id}</span>
                      <span className="order-detail__recent-date">{ro.date}</span>
                      <span className="order-detail__recent-amount">{ro.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="order-detail__card">
              <div className="order-detail__card-header">
                <h2 className="order-detail__card-title">Addresses</h2>
              </div>
              <div className="order-detail__addresses">
                <div className="order-detail__address-block">
                  <div className="order-detail__address-head">
                    <span className="order-detail__address-type">Shipping Address</span>
                    <button className="order-detail__address-edit">Edit</button>
                  </div>
                  <div className="order-detail__address-lines">
                    <p>{order.shipping.name}</p>
                    <p>{order.shipping.street}</p>
                    <p>{order.shipping.city}</p>
                    <p>{order.shipping.country}</p>
                    <p>{order.shipping.phone}</p>
                  </div>
                </div>
                <div className="order-detail__address-divider" />
                <div className="order-detail__address-block">
                  <div className="order-detail__address-head">
                    <span className="order-detail__address-type">Billing Address</span>
                    <button className="order-detail__address-edit">Edit</button>
                  </div>
                  <div className="order-detail__address-lines">
                    <p>{order.billing.name}</p>
                    <p>{order.billing.street}</p>
                    <p>{order.billing.city}</p>
                    <p>{order.billing.country}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
