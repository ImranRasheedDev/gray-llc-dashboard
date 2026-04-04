import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Orders from './pages/Orders/Orders';
import OrderDetail from './pages/OrderDetail/OrderDetail';
import Finance from './pages/Finance/Finance';
import AddProduct from './pages/AddProduct/AddProduct';
import ContentManagement from './pages/ContentManagement/ContentManagement';
import './App.css';

const antTheme = {
  token: {
    colorPrimary: '#f17547',
    fontFamily: "'Jost', sans-serif",
    borderRadius: 8,
    colorBgContainer: '#ffffff',
  },
};

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={antTheme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<AddProduct />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/content" element={<ContentManagement />} />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
