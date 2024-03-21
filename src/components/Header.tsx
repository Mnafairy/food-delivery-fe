import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, Button, InputBase, Stack, Typography } from "@mui/material";
import Logo from "./icons/Logo";
import SearchIcon from "./icons/SearchIcon";
import BasketIcon from "./icons/BasketIcon";
import ProfileIcon from "./icons/ProfileIcon";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 8,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Header = () => {
  // const [active, setActive] = useState(menu);
  const menu = [
    {
      id: 1,
      title: "НҮҮР",
    },
    {
      id: 2,
      title: "ХООЛНЫ ЦЭС",
    },
    {
      id: 3,
      title: "ХҮРГЭЛТИЙН БҮС",
    },
  ];
  // const handleSubmit = () => {
  //   setActive();
  // };
  return (
    <Stack
      width="1258px"
      height="72px"
      direction="row"
      px={3}
      py={1}
      sx={{ flexGrow: 1 }}
      justifyContent="space-between"
    >
      <Stack direction={"row"} alignContent="center" gap={6}>
        <Box width="41px" height="41px" px="4.87px" py="7.18px">
          <Logo />
        </Box>
        <Stack
          direction="row"
          gap={2}
          fontSize="14px"
          fontWeight={700}
          alignItems={"center"}
          justifyItems={"center"}
        >
          {menu.map((e, key) => (
            <Typography fontSize="14px" fontWeight={700} key={key}>
              {e.title}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack direction="row" gap={2}>
        <Box width={260} height={40}>
          <Search sx={{ border: 1, borderColor: "black" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Хайх"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        <Stack
          direction="row"
          gap={1}
          px={2}
          py={1}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <BasketIcon />
          <Typography fontSize="14px" fontWeight={700}>
            Сагс
          </Typography>
        </Stack>
        <Stack
          direction="row"
          gap={1}
          px={2}
          py={1}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <ProfileIcon />
          <Typography fontSize="14px" fontWeight={700}>
            Нэвтрэх
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
