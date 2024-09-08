import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { useSelector } from 'react-redux';

const Product = () =>{
  const products = useSelector((store)=> store.products);
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.data.find((item)=> item._id === (productId));

  useEffect(() => {
    //console.log(products);
    console.log(product);
  }, [product]);

  return (
    <div>
      <Breadcrum product = {product} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
      <RelatedProducts product={product} all_products={all_product} /> 
    </div>
  )
}

export default Product;