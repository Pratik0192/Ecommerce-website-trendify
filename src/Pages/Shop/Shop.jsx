import React, { useEffect } from "react"
import Hero from "../../Components/Hero/Hero"
import Popular from "../../Components/Popular/Popular"
import Offers from "../../Components/Offers/Offers"
import NewCollections from "../../Components/NewCollections/NewCollections"
import NewsLetter from "../../Components/NewsLetter/NewsLetter"

import { fetchUserDetails } from "../../store/userSlice"
import { useDispatch, useSelector } from "react-redux";

const Shop = (props) =>{
  const { showNavbar } = props;

  useEffect(() => {
    showNavbar();
  }, [showNavbar]);

  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop