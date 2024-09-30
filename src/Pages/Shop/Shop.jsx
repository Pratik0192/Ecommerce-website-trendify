import React, { useEffect } from "react"
import Hero from "../../Components/Hero/Hero"
import Popular from "../../Components/Popular/Popular"
import Offers from "../../Components/Offers/Offers"
import NewCollections from "../../Components/NewCollections/NewCollections"
import NewsLetter from "../../Components/NewsLetter/NewsLetter"

import { fetchUserDetails } from "../../store/userSlice"
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material"
import Services from "../../Components/Services/Services"
import Logosection from "../../Components/Logosection/Logosection"

const Shop = (props) =>{
  const { showNavbar } = props;

  useEffect(() => {
    showNavbar();
  }, [showNavbar]);

  return (
    <Grid xs={12} md={12}>
      <Hero/>
      <Services />
      <Logosection />
    </Grid>
    //   
    //   <Popular/>
    //   <Offers/>
    //   <NewCollections/>
    //   <NewsLetter/>
  )
}

export default Shop