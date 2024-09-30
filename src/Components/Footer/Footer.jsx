import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import google_play_icon from '../Assets/google-play.png';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import return_icon from '../Assets/14days_return_icon.png';
import original_icon from '../Assets/footer_original_icon.png';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Footer = () =>{
  const headingStyles = {
    textTransform:'uppercase',
    color:'#282c3f',
    fontSize:'12px',
    fontWeight:'700',
    padding:'12px 0px'
  }

  const subHeadingStyle = {
    color:'#696b79',
    fontSize:'15px',
    paddingBottom:'5px',
    cursor:'pointer',
  }

  const buttonStyle = {
    marginRight:'10px',
    textTransform:'none',
    paddingLeft:'5px',
    paddingTop:'3px',
    paddingBottom:'3px',
    backgroundColor:'#000',
    '&:hover':{
      backgroundColor:'#000',
    }
  }

  const linkIconStyle = {
    fontSize:'30px',
    marginRight:'15px',
    color:'#696b79',
    cursor:'pointer',
    transition: 'all 0.3s ease',
  }

  const footerTypoStyle = {
    fontSize:'16px',
    color:'#94969f'
  }


  return (
    <Box sx={{backgroundColor:'#fafbfc', padding:'30px 0px 40px 0px', marginTop:'200px'}}>

      {/* first section */}
      <Box sx={{maxWidth:'1080px', minWidth:'980px', margin:'auto',display:'flex'}}>
        <Box sx={{width:'15%', paddingRight:'20px'}}>
          <Typography sx={headingStyles}>
            online shopping
          </Typography>
          <Typography sx={subHeadingStyle}>
            Men
          </Typography>
          <Typography sx={subHeadingStyle}>
            Women
          </Typography>
          <Typography sx={subHeadingStyle}>
            Kids
          </Typography>
          <Typography sx={subHeadingStyle}>
            Home & Living
          </Typography>
          <Typography sx={subHeadingStyle}>
            Mobiles
          </Typography>
          <Typography sx={subHeadingStyle}>
            Laptops
          </Typography>
          <Typography sx={headingStyles}>
            useful links
          </Typography>
          <Typography sx={subHeadingStyle}>
            Blog
          </Typography>
          <Typography sx={subHeadingStyle}>
            Careers
          </Typography>
          <Typography sx={subHeadingStyle}>
            Site Map
          </Typography>
          <Typography sx={subHeadingStyle}>
            Corporate information
          </Typography>
          <Typography sx={subHeadingStyle}>
            Wishlist
          </Typography>
          <Typography sx={subHeadingStyle}>
            Cleartrip
          </Typography>
        </Box>


        <Box sx={{width:'15%', paddingRight:'20px'}}>
          <Typography sx={headingStyles}>
            customer policies
          </Typography>
          <Typography sx={subHeadingStyle}>
            Contact Us
          </Typography>
          <Typography sx={subHeadingStyle}>
            FAQ
          </Typography>
          <Typography sx={subHeadingStyle}>
            T&C
          </Typography>
          <Typography sx={subHeadingStyle}>
            Terms of Use
          </Typography>
          <Typography sx={subHeadingStyle}>
            Track Orders
          </Typography>
          <Typography sx={subHeadingStyle}>
            Shipping
          </Typography>
          <Typography sx={subHeadingStyle}>
            Cancellation
          </Typography>
          <Typography sx={subHeadingStyle}>
            Returns
          </Typography>
          <Typography sx={subHeadingStyle}>
            Privacy policy
          </Typography>
          <Typography sx={subHeadingStyle}>
            Grievance Officer
          </Typography>
        </Box>


        <Box sx={{paddingRight:'20px', width:'360px'}}>
          <Typography sx={headingStyles}>
            experience trendify app on mobile
          </Typography>
          <Box sx={{display:'flex', marginBottom:'15px'}}>
            <Button variant='contained' sx={buttonStyle}>
              <img src={google_play_icon} alt="" style={{width:'33px'}} />
              <Box sx={{marginLeft:'8px',}}>
                <Typography sx={{fontSize:'8px', marginRight:'53px', textTransform:'uppercase'}}>
                  Get it on 
                </Typography>
                <Typography sx={{fontSize:'17px', fontWeight:'500', marginTop:'-5px'}}>
                  Google Play
                </Typography>
              </Box>
            </Button>
            <Button variant='contained' sx={buttonStyle}>
              <AppleIcon sx={{fontSize:'30px'}}/>
              <Box sx={{marginLeft:'6px',}}>
                <Typography sx={{fontSize:'8px', marginRight:'53px', textTransform:'uppercase'}}>
                  Get it on 
                </Typography>
                <Typography sx={{fontSize:'17px', fontWeight:'500', marginTop:'-5px', marginRight:'20px'}}>
                  App Store
                </Typography>
              </Box>
            </Button>
          </Box>
          <Typography sx={headingStyles}>
            Keep in touch
          </Typography>
          <Box sx={{display:'flex'}}>
            <FacebookIcon sx={{...linkIconStyle, '&:hover':{color:'#0866ff'}}} />
            <TwitterIcon sx={{...linkIconStyle, '&:hover':{color:'#0866ff'}}}/>
            <YouTubeIcon sx={{...linkIconStyle, '&:hover':{color:'#ff0000'}}}/>
            <InstagramIcon sx={{...linkIconStyle, '&:hover':{color:'#d62976'}}}/>
          </Box>
        </Box>


        <Box sx={{paddingRight:'20px'}}>
          <Box sx={{display:'flex', marginTop:'15px'}}>
            <img src={original_icon} alt="" style={{height:'52px', width:'52px'}} />
            <Box>
              <Typography sx={{fontSize:'16px', color:'#696b79'}}>
                <span style={{fontSize:'16px', color:'#282c3f', fontWeight:'700'}}>100% ORIGINAL </span>
                guarantee for
              </Typography>
              <Typography sx={{fontSize:'16px', color:'#696b79'}}>
                all products at trendify019.com
              </Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex', marginTop:'15px'}}>
          <img src={return_icon} alt="" style={{height:'52px', width:'52px'}} />
            <Box>
              <Typography sx={{fontSize:'16px', color:'#696b79'}}>
                <span style={{fontSize:'16px', color:'#282c3f', fontWeight:'700'}}>Return within 14days </span>
                of
              </Typography>
              <Typography sx={{fontSize:'16px', color:'#696b79'}}>
                receiving your order
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* second section  */}
      <Box sx={{maxWidth:'1080px', minWidth:'980px', margin:'auto', marginTop:'15px'}}>
        <Divider sx={{marginBottom:'12px', border:'1px solid #d4d5d9'}}/>
        <Typography sx={headingStyles}>
          popular searches
        </Typography>
        <Typography sx={{...subHeadingStyle, lineHeight:'1.6'}}>
          Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | 
          Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | 
          Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse |
          Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini |
          Trendify Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles |
          Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
        </Typography>
      </Box>

      {/* third section */}
      <Box sx={{maxWidth:'1080px', minWidth:'980px', margin:'auto',marginTop:'20px'}}>
        <Divider sx={{marginBottom:'20px', border:'1px solid #d4d5d9'}}/>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
          <Typography sx={footerTypoStyle}>
            In case of any concern,<span>Contact Us</span>
          </Typography>
          <Typography sx={footerTypoStyle}>
            <CopyrightIcon sx={{fontSize:'18px', marginBottom:'-3px'}}/> 2024 www.trendify019.com. All rights reserved 
          </Typography>
          <Typography sx={footerTypoStyle}>
            A Trendify Company
          </Typography>
        </Box>
        
      </Box>
    </Box>
  )
}

export default Footer;
