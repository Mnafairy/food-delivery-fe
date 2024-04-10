import {
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import { useCategory } from "@/context/CategoryContext";
interface dataType {
  _id: string;
  name: string;
}
export const AdminCategory = ({ data }: { data: dataType }) => {
  const { category, setCategory } = useCategory();
  const [catName, setCatName] = useState<string>(data.name);
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const deleteData = {
      id: data._id,
    };
    await fetch("http://localhost:4000/api/category", {
      body: JSON.stringify(deleteData),
      method: "Delete",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const newData = category?.filter((b) => b._id !== data._id);
    setCategory(newData);
    handleClose();
  };

  const handleUpdate = async (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const updateData = {
      id: data._id,
      updateInfo: catName,
    };
    await fetch("http://localhost:4000/api/category", {
      body: JSON.stringify(updateData),
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    handleClose();
  };
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      width={"258px"}
      height={"40px"}
      border={1}
      borderColor={"#D6D8DB"}
      borderRadius={2}
      bgcolor={"#18BA51"}
      px={2}
      py={1}
      alignItems={"center"}
      sx={{ cursor: "pointer" }}
    >
      <Typography color={"white"}>{data.name}</Typography>
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{ px: 0, py: 0 }}
        >
          <MoreVertIcon sx={{ color: "white" }} />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <MenuItem onClick={handleDelete}>Delete category</MenuItem>
          <MenuItem>
            <InputBase
              placeholder={"Write new category name"}
              value={catName}
              onChange={(e) => setCatName(e.target.value)}
            ></InputBase>
          </MenuItem>
          <MenuItem onClick={handleUpdate}>Edit name</MenuItem>
        </Menu>
      </div>
    </Stack>
  );
};
