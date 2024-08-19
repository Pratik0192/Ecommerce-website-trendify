import React from 'react';
import './RelatedProducts.css';  // Ensure this file contains your styles
import Item from '../Item/Item';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const RelatedProducts = ({ product, all_products }) => {
  const relatedProducts = all_products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 8);

  const itemsPerSlide = 4;
  const slides = [];

  for (let i = 0; i < relatedProducts.length; i += itemsPerSlide) {
    slides.push(
      <div key={i} className="carousel-slide">
        {relatedProducts.slice(i, i + itemsPerSlide).map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    );
  }

  return (
    <div className='relatedproducts'>
      <h2>Related Products</h2>
      <hr />
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        useKeyboardArrows={true}
        autoPlay={false}  // Set to false if you don't want auto-play
        interval={3000}
        className="carousel-container"
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
