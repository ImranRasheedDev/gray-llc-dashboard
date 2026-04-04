import { useState } from 'react';
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './ContentManagement.css';

const { TextArea } = Input;

const sections = [
  { key: 'terms', title: 'Terms & Conditions', placeholder: 'Write your Terms and Conditions' },
  { key: 'privacy', title: 'Privacy Policy', placeholder: 'Write your Privacy Policy' },
  { key: 'faq', title: "F.A.Q's", placeholder: 'Write your Frequently Asked Questions' },
];

function RichEditor({ placeholder, value, onChange }) {
  return (
    <div className="content-mgmt__editor">
      <div className="content-mgmt__editor-toolbar">
        <button className="content-mgmt__toolbar-btn" aria-label="Bold">
          <BoldOutlined />
        </button>
        <button className="content-mgmt__toolbar-btn" aria-label="Italic">
          <ItalicOutlined />
        </button>
        <button className="content-mgmt__toolbar-btn" aria-label="Underline">
          <UnderlineOutlined />
        </button>
        <span className="content-mgmt__toolbar-divider" />
        <button className="content-mgmt__toolbar-btn" aria-label="Unordered list">
          <UnorderedListOutlined />
        </button>
        <button className="content-mgmt__toolbar-btn" aria-label="Ordered list">
          <OrderedListOutlined />
        </button>
        <span className="content-mgmt__toolbar-divider" />
        <button className="content-mgmt__toolbar-btn" aria-label="Link">
          <LinkOutlined />
        </button>
      </div>
      <TextArea
        className="content-mgmt__textarea"
        placeholder={placeholder}
        rows={7}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default function ContentManagement() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ terms: '', privacy: '', faq: '' });

  const updateValue = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <DashboardLayout activeKey="">
      <div className="content-mgmt">
        <div className="content-mgmt__card">
          <h1 className="content-mgmt__title">Content Management</h1>

          <div className="content-mgmt__sections">
            {sections.map((section) => (
              <div key={section.key} className="content-mgmt__section">
                <h2 className="content-mgmt__section-title">{section.title}</h2>
                <RichEditor
                  placeholder={section.placeholder}
                  value={values[section.key]}
                  onChange={(val) => updateValue(section.key, val)}
                />
              </div>
            ))}
          </div>

          <div className="content-mgmt__actions">
            <Button
              size="large"
              className="content-mgmt__cancel-btn"
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              size="large"
              className="content-mgmt__update-btn"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
