import { useState } from 'react';
import {
  ArrowLeftOutlined,
  LeftOutlined,
  RightOutlined,
  InboxOutlined,
} from '@ant-design/icons';
import { Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './ProductDetail.css';

const product = {
  name: 'Snow white touch screen AC',
  category: 'Electronics',
  rating: 4.5,
  reviews: 288,
  price: 40.99,
  description:
    'Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium fDonec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium f volutpat. Morbi in orci risus. Donec pretium f',
  stock: 50,
  images: [1, 2, 3, 4],
};

export default function ProductDetail() {
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <DashboardLayout activeKey="products">
      <div className="product-detail">
        {/* Breadcrumb / Back bar */}
        <div className="product-detail__breadcrumb">
          <button
            className="product-detail__back-btn"
            onClick={() => navigate('/products')}
          >
            <ArrowLeftOutlined />
            <span>
              {product.category} - <strong>{product.name}</strong>
            </span>
          </button>
        </div>

        {/* Main content */}
        <div className="product-detail__content">
          {/* Left — Image gallery with Swiper */}
          <div className="product-detail__gallery">
            <Swiper
              modules={[Navigation, Thumbs]}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              className="product-detail__hero-swiper"
            >
              {product.images.map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="product-detail__hero">
                    <InboxOutlined className="product-detail__hero-icon" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="product-detail__thumbs-wrapper">
              <button
                className="product-detail__thumb-arrow product-detail__thumb-prev"
                aria-label="Previous image"
              >
                <LeftOutlined />
              </button>
              <Swiper
                modules={[Navigation]}
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={12}
                navigation={{
                  prevEl: '.product-detail__thumb-prev',
                  nextEl: '.product-detail__thumb-next',
                }}
                className="product-detail__thumbs-swiper"
              >
                {product.images.map((_, i) => (
                  <SwiperSlide key={i}>
                    <div className="product-detail__thumb">
                      <InboxOutlined className="product-detail__thumb-icon" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                className="product-detail__thumb-arrow product-detail__thumb-next"
                aria-label="Next image"
              >
                <RightOutlined />
              </button>
            </div>
          </div>

          {/* Right — Details */}
          <div className="product-detail__info">
            <div className="product-detail__header">
              <h1 className="product-detail__title">{product.name}</h1>
              <p className="product-detail__subtitle">
                {product.category} - {product.name}
              </p>
            </div>

            <div className="product-detail__rating">
              <Rate
                disabled
                allowHalf
                value={product.rating}
                className="product-detail__stars"
              />
              <span className="product-detail__reviews">
                {product.reviews} reviews
              </span>
            </div>

            <p className="product-detail__price">
              ${product.price.toFixed(2)}
            </p>

            <hr className="product-detail__divider" />

            <p className="product-detail__description">{product.description}</p>

            <hr className="product-detail__divider" />

            <div className="product-detail__stock">
              <span className="product-detail__stock-label">In Stock</span>
              <div className="product-detail__stock-badge">{product.stock}</div>
            </div>

            <hr className="product-detail__divider" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
