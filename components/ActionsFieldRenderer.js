// import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const ActionsFieldRenderer = ({ _id, model, price, updateProduct }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setOpenDialog(true);
    handleMenuClose();
  };

  // const handleDelete = (productId) => {
  //   console.log(`Delete product with ID: ${productId}`);
  //   handleMenuClose();
  // };

  const handleSubmit = () => {
    updateProduct(_id, updatedPrice);
    setOpenDialog(false);
  };

  return (
    <>
      <IconButton size="small" onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleEdit()}>
          <EditNoteIcon style={{ marginRight: "8px" }} color="primary" />
          Edit
        </MenuItem>
        {/* <MenuItem onClick={() => handleDelete(_id)}>
          <DeleteIcon style={{ marginRight: "8px" }} color="error" />
          Delete
        </MenuItem> */}
      </Menu>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Update Product Price</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ marginTop: "12px", marginBottom: "12px" }}
            label="Model Name"
            variant="outlined"
            fullWidth
            value={model}
            disabled
          />
          <TextField
            sx={{ marginTop: "12px", marginBottom: "12px" }}
            label="Price"
            variant="outlined"
            fullWidth
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ActionsFieldRenderer;
