import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Divider } from '@mui/material'
import React, { useEffect } from 'react'
import AddressForm from '../AddressForm/AddressForm';

const buttonStyle = {
    width:'100%',
    color:'#fff',
    backgroundColor: "#ff3f6c",
    borderRadius: "4px",
    padding: "10px",
    fontSize: "14px",
    textTransform: "uppercase",
    marginBottom: "2px",
    "&:hover": {
      backgroundColor: "#ff3f6c",
    },
}

const AddressDialog = (props) => {
  const { 
    openDialog, 
    setOpenDialog, 
    handleSubmitAddress,
    handleUpdateAddress,
    address
  } = props;

  const handleSubmit = () => {
    if(address._id === undefined){
      handleSubmitAddress();
    } else {
      handleUpdateAddress(address._id);
    }
  }

  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      aria-labelledby="review-dialog-title"
      sx={{
        width: "60vw%",
        margin: "auto",
        marginTop: "-80px",
        '& .MuiDialog-paper': {
          width: "520px",
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
          borderBottom:'1px solid #eaeaec'
        }}
      >
        Add New Address
      </DialogTitle>
      <DialogContent sx={{ padding: "0 15px"}} >
        <AddressForm
          address={address}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} sx={buttonStyle}>
          Add Address
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddressDialog