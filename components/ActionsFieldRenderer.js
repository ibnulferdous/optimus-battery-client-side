import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ActionsFieldRenderer = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (productId) => {
    console.log(`Edit product with ID: ${productId}`);
    handleMenuClose();
  };

  const handleDelete = (productId) => {
    console.log(`Delete product with ID: ${productId}`);
    handleMenuClose();
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
    </>
  );
};

export default ActionsFieldRenderer;
