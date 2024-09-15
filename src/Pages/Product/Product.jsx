import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchProductById } from '../../store/productsSlice';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Product = () =>{
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store)=> store.products.data);
  const product = useSelector((store) => store.products.product);
  const loadingProduct = useSelector((store) => store.products.loadingProduct);


  useEffect(() => {
    const fetchProductAsync = async () => {
      if(products === null){
        console.log("Calling Now");
        dispatch(fetchProducts());
      }
      await dispatch(fetchProductById(productId));
    }

    fetchProductAsync();
  }, [dispatch, productId]);

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
          {products && 
            <RelatedProducts 
              product={product} 
              all_products={products}
            />
          }
        </div>
      }
    </>
  )
}

export default Product;