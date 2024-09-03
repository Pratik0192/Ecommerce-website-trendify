import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import ShopFilter from '../Components/ShopFilter/ShopFilter';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); // Access all products from context

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.filter(item => item.category === props.category).length} products
        </p>
      </div>
      <div className="shopcategory-content">
        <div className="shopcategory-filter">
          <ShopFilter />
        </div>
        <div className="shopcategory-products">
          {all_product
          .filter(item => item.category === props.category)
          .map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
          ))}
        </div>
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
