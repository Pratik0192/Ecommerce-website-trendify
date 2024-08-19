import React from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RelatedProducts = (props) => {
  const { product, all_products } = props;

  const relatedProducts = all_products.filter(
    (item) => item.category === product.category && item.id !== product.id
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
          <div key={item.id} className="carousel-item">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RelatedProducts;
