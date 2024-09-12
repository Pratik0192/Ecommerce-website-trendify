import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Divider } from '@mui/material'
import React from 'react'
import ShippingAddress from '../ShippingAddress/ShippingAddress'

const buttonStyle = {
    width:'90%',
    color:'#fff',
    backgroundColor: "#ff3f6c",
    borderRadius: "4px",
    padding: "14px",
    fontSize: "14px",
    textTransform: "uppercase",
    marginBottom: "20px",
    marginRight:'5%',
    "&:hover": {
      backgroundColor: "#ff3f6c",
    },
}

const AddressDialog = ({openDialog, handleCloseDialog}) => {
  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="review-dialog-title"
      maxWidth="sm"
      fullWidth={true}
      sx={{
        '& .MuiDialog-paper': {
          width: '80%',
          maxHeight: '80vh',
          padding:'0'
        },
      }}
    >
      <DialogTitle 
        sx={{
            textTransform:'uppercase', 
            fontSize:'16px', 
            fontWeight:'700', 
            color:"#282c3f", 
            paddingLeft:'47px',
            paddingBottom:'30px',
            paddingTop:'30px',
            borderBottom:'1px solid #eaeaec'
        }}
    >
        Add New Address
      </DialogTitle>
        <DialogContent>
          {/* <Divider/> */}
          <ShippingAddress />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={buttonStyle}>
            Add Address
          </Button>
        </DialogActions>
    </Dialog>
  )
}

export default AddressDialog