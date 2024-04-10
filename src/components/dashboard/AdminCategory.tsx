import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
export const AdminCategory = ({ data }) => {
  const options = ["None", "Atria"];
  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </Stack>
  );
};
