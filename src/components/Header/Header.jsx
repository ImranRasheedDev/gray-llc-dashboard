import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import { Badge, Input } from 'antd';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo">Gray</span>
        <span className="header__logo-dot">LLC</span>
      </div>

      <div className="header__actions">
        <Input
          className="header__search"
          placeholder="Search..."
          prefix={<SearchOutlined style={{ color: 'rgba(255,255,255,0.6)' }} />}
          variant="borderless"
        />
        <Badge count={3} size="small">
          <button className="header__bell" aria-label="Notifications">
            <BellOutlined />
          </button>
        </Badge>
      </div>
    </header>
  );
}
