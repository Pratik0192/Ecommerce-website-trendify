import React, { useEffect } from 'react';
import './ShopCategory.css';
import Item from '../../Components/Item/Item';
import ShopFilter from '../../Components/ShopFilter/ShopFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import RecommendationDropdown from '../../Components/RecommendationDropdown/RecommendationDropdown';
import { Grid, Skeleton } from '@mui/material'; // Import Material UI Skeleton


const ShopCategory = (props) => {
  const products = useSelector((store) => store.products.data);
  const fetchProductsDone = useSelector((store) => store.products.fetchProductsDone);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      await dispatch(fetchProducts());
    }

    if (!fetchProductsDone) {
      fetchUserData();
    }
  }, [dispatch, fetchProductsDone]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  // Skeleton Placeholder for Loading Items
  const renderSkeletons = () => {
    return (
      <Grid container spacing={2}>
        {Array.from(new Array(16)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Skeleton variant="rectangular" width="250px" height={250} sx={{marginRight:'800px'}} />
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <div>
          <span>Showing 1-12</span> out of {products && products.length} products
        </div>
        <div>
          <RecommendationDropdown />
        </div>
      </div>
      <div className="shopcategory-content">
        <div className="shopcategory-filter">
          <ShopFilter />
        </div>
        <div className="shopcategory-products">
          {/* Render Skeletons if products are null */}
          {products == null
            ? renderSkeletons()
            : products
              .filter(item => item.category === props.category)
              .map((item) => (
                <Item 
                  key={item._id}
                  product={item}
                />
              ))
          }
        </div>
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
