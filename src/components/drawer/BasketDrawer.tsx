import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { CartBadge } from "../layout/Header/CartBadge";
import { LeftArrowIcon } from "../icons/drawer/LeftArrowIcon";
import { DrawerCard } from "../cards/DrawerCard";

export const BasketDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Stack
      sx={{ width: 586 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        direction={"row"}
        width={"538px"}
        gap={"171px"}
        alignItems={"center"}
        mb={"30px"}
      >
        <Stack
          px={"6px"}
          py={"2px"}
          width={"48px"}
          height={"48px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <LeftArrowIcon />
        </Stack>
        <Typography>Таны сагс</Typography>
      </Stack>
      <Divider />
      <Stack>
        <DrawerCard />
      </Stack>
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <Typography>total price </Typography>
    </Stack>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <CartBadge />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
