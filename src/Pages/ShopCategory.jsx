import React, { useContext, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import ShopFilter from '../Components/ShopFilter/ShopFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productsSlice';


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); // Access all products from context
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      await dispatch(fetchProducts());
    }

    fetchUserData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

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
          {products.data && 
            products.data.filter(item => item.category === props.category)
            .map((item, i) => (
            <Item 
              key={item._id} 
              id={item._id}
              category={item.category}
              company={item.company}
              name={item.name}
              description={item.description}
              image={item.image} 
              current_price={item.current_price} 
              original_price={item.original_price}
              discount={item.discount_percentage}
              rating_stars={item.rating.stars}
              rating_count={item.rating.count}
              return_period={item.return_period}
              stock={item.stock}
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
