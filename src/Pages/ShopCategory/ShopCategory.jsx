import React, { useEffect, useRef, useState } from 'react';
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
  CircularProgress,
  Button,
  Typography
} from '@mui/material'; // Import Material UI Skeleton
import { productActions } from '../../store/productsSlice';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const paginationButtonStyle = {
  fontWeight:'700',
  color:"#282c3f",
  width:'150px',
  height:'50px',
  border:'1px solid #d4d5d9',
  fontSize:'16px',
  '&:hover':{
    backgroundColor:'#ffffff',
    border:'1px solid #d4d5d9',
  }
}

const paginationArrowStyle = {
  fontSize:"18px"
}


const ShopCategory = (props) => {
  const products = useSelector((store) => store.products.data);
  const loadingProducts = useSelector((store) => store.products.loading);
  const triggerKeywordChange = useSelector((store) => store.products.triggerKeywordChange);
  const renderProductsFlag = useSelector((store) => store.products.renderProductsFlag);
  const fetchParams = useSelector((store) => store.products.fetchParams);
  const pageParams = useSelector((store) => store.products.page);
  const { totalProductsCount, pageLength, totalPages } = pageParams;
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const isFirstRender = useRef(true);


  const fetchProductsAsync = async (keyword, brand, sort, price, page) => {
    dispatch(productActions.resetProduct());
    dispatch(productActions.setCurrentPage(page));
    setCurrentPage(page);
    let paramObj = {
      category: encodeURIComponent(props.category),
      keyword: encodeURIComponent(keyword),
      brand: encodeURIComponent(brand),
      sort: encodeURIComponent(sort),
      price: encodeURIComponent(price),
      page: page,
      limit: itemsPerPage,
    }
    await dispatch(fetchProducts(paramObj));
  }

  useEffect(() => {
    console.log("Shop Rendered");
    if(renderProductsFlag){
      dispatch(productActions.resetFetchParams());
      fetchProductsAsync("", "", "", "", currentPage);
    }
    else {
      dispatch(productActions.setRenderProductsFlag(true));
    }
  }, []);

  useEffect(() => {
    if(isFirstRender.current){
      isFirstRender.current = false;
      return;
    }
    console.log("Keyword Changed");
    if(triggerKeywordChange){
      dispatch(productActions.resetFetchParams());
      fetchProductsAsync(fetchParams.keyword, "", "", "", currentPage);
    }
  }, [fetchParams.keyword]);


  useEffect(() => {
    console.log("CurrentPage: ", currentPage);
  }, [currentPage]);



  const handlePageDecrement = () => {
    if (currentPage > 1){
      fetchProductsAsync(
        fetchParams.keyword, 
        fetchParams.brand, 
        fetchParams.sort, 
        fetchParams.price, 
        currentPage - 1
      );
      window.scrollTo(0, 0);
    }
  }

  const handlePageIncrement = () => {
    if(currentPage < totalPages){
      fetchProductsAsync(
        fetchParams.keyword, 
        fetchParams.brand, 
        fetchParams.sort, 
        fetchParams.price, 
        currentPage + 1
      );
      window.scrollTo(0, 0);
    }
  }

  
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
      <img className='shopcategory-banner' src={props.banner} alt="Category Banner"/>
      <div className="shopcategory-indexSort">
        <div>
          <span>
            Showing {itemsPerPage*(currentPage-1)+1}-{itemsPerPage*(currentPage-1)+pageLength}
          </span> out of {totalProductsCount} products
        </div>
        <div>
          <RecommendationDropdown
            category={props.category}
            fetchProductsAsync={fetchProductsAsync}
          />
        </div>
      </div>
      <div className="shopcategory-content">
        <div className="shopcategory-filter">
          <ShopFilter
            category={props.category}
            fetchProductsAsync={fetchProductsAsync}
          />
        </div>
        <div className="shopcategory-products">
          <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={loadingProducts}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          {products.length === 0 ? 
            loadingProducts ? renderSkeletons() : <>No items to show</> :
            products.map((item) => (
              <ProductCard
                key={item._id}
                product={item}
                category={props.category}
              />
            ))
          }
        </div>
      </div>
      <div className="shopcategory-pagination">
        <Button
          variant='outlined'
          onClick={handlePageDecrement}
          disabled={currentPage === 1}
          sx={{...paginationButtonStyle, marginRight:'64px'}}
        >
          <ArrowBackIosIcon sx={paginationArrowStyle}/> 
          Previous
        </Button>
        <Typography sx={{color:'#535766', fontSize:'16px'}}>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          variant='outlined'
          onClick={handlePageIncrement}
          disabled={currentPage === totalPages}
          sx={{...paginationButtonStyle, marginLeft:'64px'}}
        >
          Next
          <ArrowForwardIosIcon sx={paginationArrowStyle}/>
        </Button>
      </div>
    </div>
  );
};

export default ShopCategory;
