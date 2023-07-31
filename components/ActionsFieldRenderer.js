import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const ActionsFieldRenderer = ({ id, model, price }) => {
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

  const handleDelete = (productId) => {
    console.log(`Delete product with ID: ${productId}`);
    handleMenuClose();
  };

  const handleSubmit = () => {
    console.log("Updated Price:", updatedPrice);
    // implement PATCH method to update the product price
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
        <MenuItem onClick={() => handleEdit(id)}>
          <EditNoteIcon style={{ marginRight: "8px" }} color="primary" />
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleDelete(id)}>
          <DeleteIcon style={{ marginRight: "8px" }} color="error" />
          Delete
        </MenuItem>
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
