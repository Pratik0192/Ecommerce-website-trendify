import React, { useEffect } from 'react';
import './ShopCategory.css';
import ProductCard from '../../Components/ProductCard/ProductCard';
import ShopFilter from '../../Components/ShopFilter/ShopFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import RecommendationDropdown from '../../Components/RecommendationDropdown/RecommendationDropdown';
import { 
  Grid, 
  Skeleton,
  Backdrop,
  CircularProgress
} from '@mui/material'; // Import Material UI Skeleton
import { productActions } from '../../store/productsSlice';


const ShopCategory = (props) => {
  const products = useSelector((store) => store.products.data);
  const loadingProducts = useSelector((store) => store.products.loading);  
  const fetchProductsDone = useSelector((store) => store.products.fetchProductsDone);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Shop Rendered");
    dispatch(productActions.resetProduct());

    const fetchProductsAsync = async () => {
      let paramObj = {
        category: encodeURIComponent(props.category),
        brand: encodeURIComponent(""),
        sort: encodeURIComponent(""),
        price: encodeURIComponent(""),
      }
      await dispatch(fetchProducts(paramObj));
    }

    fetchProductsAsync();
  }, [dispatch]);


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
          <RecommendationDropdown
            category={props.category}
          />
        </div>
      </div>
      <div className="shopcategory-content">
        <div className="shopcategory-filter">
          <ShopFilter
            category={props.category}
          />
        </div>
        <div className="shopcategory-products">
          {/* Render Skeletons if products are null */}
          <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={loadingProducts}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          {products.length === 0 ? 
            loadingProducts ? renderSkeletons() : <></> :
            products
              //.filter(item => item.category === props.category)
              .map((item) => (
                <ProductCard 
                  key={item._id}
                  product={item}
                  category={props.category}
                />
              )
            )
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
