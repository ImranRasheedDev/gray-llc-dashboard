import { useState } from 'react';
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  LinkOutlined,
  CloudUploadOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './AddProduct.css';

const { TextArea } = Input;

export default function AddProduct() {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');

  return (
    <DashboardLayout activeKey="products">
      <div className="add-product">
        {/* Product Information */}
        <div className="add-product__section">
          <h1 className="add-product__section-title">Product Information</h1>

          <div className="add-product__form-grid">
            {/* Product Title */}
            <div className="add-product__field">
              <label className="add-product__label">Product Title*</label>
              <Input
                className="add-product__input"
                placeholder="Enter product title"
                size="large"
              />
              <span className="add-product__hint">
                Keep it clear and descriptive (70-100 characters recommended)
              </span>
            </div>

            {/* Product Category */}
            <div className="add-product__field">
              <label className="add-product__label">Product Category*</label>
              <Input
                className="add-product__input"
                placeholder="Enter Product Category"
                size="large"
              />
            </div>

            {/* Product Quantity */}
            <div className="add-product__field">
              <label className="add-product__label">Product Quantity*</label>
              <Select
                className="add-product__select"
                placeholder="Select Product Quantity"
                size="large"
                options={[
                  { value: '1', label: '1' },
                  { value: '5', label: '5' },
                  { value: '10', label: '10' },
                  { value: '25', label: '25' },
                  { value: '50', label: '50' },
                  { value: '100', label: '100' },
                ]}
              />
            </div>

            {/* Product Description */}
            <div className="add-product__field">
              <label className="add-product__label">Product Description*</label>
              <div className="add-product__editor">
                <div className="add-product__editor-toolbar">
                  <button className="add-product__toolbar-btn" aria-label="Bold">
                    <BoldOutlined />
                  </button>
                  <button className="add-product__toolbar-btn" aria-label="Italic">
                    <ItalicOutlined />
                  </button>
                  <button className="add-product__toolbar-btn" aria-label="Underline">
                    <UnderlineOutlined />
                  </button>
                  <span className="add-product__toolbar-divider" />
                  <button className="add-product__toolbar-btn" aria-label="Unordered list">
                    <UnorderedListOutlined />
                  </button>
                  <button className="add-product__toolbar-btn" aria-label="Ordered list">
                    <OrderedListOutlined />
                  </button>
                  <span className="add-product__toolbar-divider" />
                  <button className="add-product__toolbar-btn" aria-label="Link">
                    <LinkOutlined />
                  </button>
                </div>
                <TextArea
                  className="add-product__textarea"
                  placeholder="Describe your product in detail..."
                  rows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <span className="add-product__hint">
                Include key features, specifications, materials, and any other relevant details.
              </span>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="add-product__section">
          <h2 className="add-product__section-title">Pricing</h2>

          <div className="add-product__pricing-grid">
            <div className="add-product__field">
              <label className="add-product__label">Regular Price*</label>
              <Input
                className="add-product__input"
                placeholder="0.00"
                prefix={<span className="add-product__currency">$</span>}
                size="large"
              />
            </div>
            <div className="add-product__field">
              <label className="add-product__label">Sale Price</label>
              <Input
                className="add-product__input"
                placeholder="0.00"
                prefix={<span className="add-product__currency">$</span>}
                size="large"
              />
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div className="add-product__section">
          <h2 className="add-product__section-title">Product Images</h2>

          <div className="add-product__field">
            <label className="add-product__label">Featured Image*</label>
            <div className="add-product__dropzone">
              <CloudUploadOutlined className="add-product__dropzone-icon" />
              <p className="add-product__dropzone-text">
                Drag and drop your image here, or <span className="add-product__dropzone-browse">browse</span>
              </p>
              <p className="add-product__dropzone-hint">
                Recommended size: 1000x1000px. Max file size: 5MB
              </p>
            </div>
          </div>

          <div className="add-product__field">
            <label className="add-product__label">Gallery Images (up to 5)</label>
            <div className="add-product__gallery-grid">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="add-product__gallery-slot">
                  <PlusOutlined className="add-product__gallery-icon" />
                </div>
              ))}
            </div>
            <span className="add-product__hint">
              Upload multiple images to show your product from different angles
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="add-product__actions">
          <Button
            size="large"
            className="add-product__cancel-btn"
            onClick={() => navigate('/products')}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            size="large"
            className="add-product__submit-btn"
          >
            Add new product
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
