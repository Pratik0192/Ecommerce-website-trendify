import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../store/productsSlice';
import { fetchProducts, fetchProductById } from '../../store/productsSlice';
import { debounce } from 'lodash';


const Product = () =>{
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store)=> store.products.data);
  const product = useSelector((store) => store.products.product);
  const loadingProduct = useSelector((store) => store.products.loadingProduct);

  const relatedProductsRef = useRef(null);
  let [productsFetchedFlag, setProductsFetchedFlag] = useState(false);


  const fetchRelatedProducts = async () => {
    if(products.length === 0){
      let paramObj = {
        category: encodeURIComponent(product.category),
        keyword: "", brand: "", sort: "", price: "",
        page: 1,
        limit: 12,
      }
      await dispatch(fetchProducts(paramObj));
    }
  }


  useEffect(() => {
    const fetchProductAsync = async () => {
      await dispatch(fetchProductById(productId));
    }

    dispatch(productActions.setRenderProductsFlag(false));
    fetchProductAsync();
  }, [dispatch, productId]);


  useEffect(() => {
    const handleScroll = debounce(() => {
      if(!productsFetchedFlag && relatedProductsRef.current) {
        const top = relatedProductsRef.current.getBoundingClientRect().top;
        if(top < window.innerHeight){
          setProductsFetchedFlag(true);
          console.log("Fetching RelatedProducts");
          fetchRelatedProducts();
        }
      }
    }, 200);

    product && window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [productsFetchedFlag, product]);


  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loadingProduct}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {product &&
        <div>
          <Breadcrum product={product} />
          <ProductDisplay product={product} />
          <DescriptionBox product={product} />
          <div>
            {products && 
              <RelatedProducts 
                product={product} 
                all_products={products}
                relatedProductsRef={relatedProductsRef}
              />
            }
          </div>
        </div>
      }
    </>
  )
}

export default Product;