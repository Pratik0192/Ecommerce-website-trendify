import { Box, Grid } from '@mui/material'
import React from 'react'
import logo_1 from '../Assets/logo/allensolly.png'
import logo_2 from '../Assets/logo/levis.png'
import logo_3 from '../Assets/logo/louisphili.png'
import logo_4 from '../Assets/logo/adidas.png'
import logo_5 from '../Assets/logo/logo (6).png'
import logo_6 from '../Assets/logo/tokyotalkies.png'
import logo_7 from '../Assets/logo/vanheusen.png'

const Logosection = () => {

  const outerBox = {
    width:'14.2%',
    display:'flex',
    justifyContent:'center'
  }

  const imageStyle = {
    width:'110px'
  }

  return (
    <Grid xs={12} md={12} sx={{padding:'0px 90px', marginTop:'60px'}}>
      <Grid xs={12} md={8} sx={{background:'#f2f2f3', display:'flex'}}>
        <Box sx={outerBox}>
          <img src={logo_1} alt="" style={imageStyle}/>
        </Box>
        <Box sx={outerBox}>
          <img src={logo_2} alt="" style={imageStyle}/>
        </Box>
        <Box sx={outerBox}>
          <img src={logo_3} alt="" style={{...imageStyle, height:'120px'}}/>
        </Box>
        <Box sx={outerBox}>
          <img src={logo_4} alt="" style={imageStyle}/>
        </Box>
        <Box sx={outerBox}>
          <img src={logo_5} alt="" style={imageStyle}/>
        </Box>
        <Box sx={outerBox}>
          <img src={logo_6} alt="" style={imageStyle}/>
        </Box>
        <Box sx={outerBox}>
          <img src={logo_7} alt="" style={imageStyle}/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Logosection