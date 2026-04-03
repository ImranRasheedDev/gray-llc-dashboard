import { useState } from 'react';
import {
  SearchOutlined,
  EyeOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  PlusOutlined,
  InboxOutlined,
} from '@ant-design/icons';
import { Input, Select, Checkbox, Button } from 'antd';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './Products.css';

const products = [
  { key: 1, name: 'Snow white touch screen AC', price: '149.00', status: 'Approved' },
  { key: 2, name: 'Snow white touch screen AC', price: '299.00', status: 'Pending' },
  { key: 3, name: 'Snow white touch screen AC', price: '89.00', status: 'Approved' },
  { key: 4, name: 'Snow white touch screen AC', price: '349.00', status: 'Approved' },
  { key: 5, name: 'Snow white touch screen AC', price: '129.00', status: 'Pending' },
  { key: 6, name: 'Snow white touch screen AC', price: '279.00', status: 'Approved' },
];

const statusConfig = {
  Approved: { className: 'products-table__badge--approved' },
  Pending: { className: 'products-table__badge--pending' },
};

const pageNumbers = [1, 2, 3, 4, 5];

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleRow = (key) => {
    setSelectedRows((prev) => {
      const next = prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key];
      setSelectAll(next.length === products.length);
      return next;
    });
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    setSelectedRows(checked ? products.map((p) => p.key) : []);
  };

  return (
    <DashboardLayout activeKey="products">
      <div className="products-page">
        {/* Filters */}
        <div className="products-filters">
          <Input
            className="products-filters__search"
            placeholder="Search users by name, email"
            prefix={<SearchOutlined style={{ color: '#9ca3af' }} />}
            size="large"
          />
          <div className="products-filters__dropdowns">
            <Select
              defaultValue="all-users"
              className="products-filters__select"
              size="large"
              options={[
                { value: 'all-users', label: 'All Users' },
              ]}
            />
            <Select
              defaultValue="all-categories"
              className="products-filters__select"
              size="large"
              options={[
                { value: 'all-categories', label: 'All Categories' },
              ]}
            />
            <Select
              defaultValue="all-status"
              className="products-filters__select products-filters__select--sm"
              size="large"
              options={[
                { value: 'all-status', label: 'All Status' },
                { value: 'approved', label: 'Approved' },
                { value: 'pending', label: 'Pending' },
              ]}
            />
            <Select
              defaultValue="all-stock"
              className="products-filters__select products-filters__select--sm"
              size="large"
              options={[
                { value: 'all-stock', label: 'All Stock' },
                { value: 'in-stock', label: 'In Stock' },
                { value: 'out-of-stock', label: 'Out of Stock' },
              ]}
            />
          </div>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            className="products-filters__add-btn"
          >
            Add Product
          </Button>
        </div>

        {/* Table card */}
        <div className="products-table-card">
          {/* Toolbar */}
          <div className="products-toolbar">
            <div className="products-toolbar__left">
              <Checkbox checked={selectAll} onChange={handleSelectAll}>
                Select All
              </Checkbox>
              <span className="products-toolbar__count">{selectedRows.length} selected</span>
            </div>
            <div className="products-toolbar__right">
              <button
                className="products-toolbar__delete-btn"
                disabled={selectedRows.length === 0}
              >
                <DeleteOutlined />
                Delete
              </button>
            </div>
          </div>

          {/* Table */}
          <table className="products-table">
            <thead>
              <tr>
                <th className="products-table__th products-table__th--check" />
                <th className="products-table__th">Image</th>
                <th className="products-table__th">Product Name</th>
                <th className="products-table__th">Price ($)</th>
                <th className="products-table__th">Status</th>
                <th className="products-table__th">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.key} className="products-table__row">
                  <td className="products-table__td products-table__td--check">
                    <Checkbox
                      checked={selectedRows.includes(product.key)}
                      onChange={() => toggleRow(product.key)}
                    />
                  </td>
                  <td className="products-table__td">
                    <div className="products-table__thumb">
                      <InboxOutlined className="products-table__thumb-icon" />
                    </div>
                  </td>
                  <td className="products-table__td">
                    <span className="products-table__name">{product.name}</span>
                  </td>
                  <td className="products-table__td">
                    <span className="products-table__price">{product.price}</span>
                  </td>
                  <td className="products-table__td">
                    <span className={`products-table__badge ${statusConfig[product.status].className}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="products-table__td">
                    <div className="products-table__actions">
                      <button className="products-table__action-btn" aria-label="View">
                        <EyeOutlined />
                      </button>
                      <button className="products-table__action-btn products-table__action-btn--danger" aria-label="Delete">
                        <DeleteOutlined />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="products-pagination">
            <span className="products-pagination__info">
              Showing 1-6 of 247 products
            </span>
            <nav className="products-pagination__nav">
              <button
                className="products-pagination__btn products-pagination__btn--arrow"
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <LeftOutlined />
              </button>
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  className={`products-pagination__btn ${page === currentPage ? 'products-pagination__btn--active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="products-pagination__btn products-pagination__btn--arrow"
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
