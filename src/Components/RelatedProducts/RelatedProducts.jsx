import React from 'react';
import './RelatedProducts.css';
import Item from '../ProductCard/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RelatedProducts = (props) => {
  const { product, all_products } = props;

  const relatedProducts = all_products.filter(
    (item) => item.category === product.category && item._id !== product._id
  );

  const limitedRelatedProducts = relatedProducts.slice(0, 20); // Adjust if needed

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className='relatedproducts'>
      <h2>Related Products</h2>
      <hr />
      <Slider {...settings}>
        {limitedRelatedProducts.map((item) => (
          <div key={item._id} className="carousel-item">
            <Item
              key={item._id}
              product={item}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RelatedProducts;
