import { Button, Container, Stack, Typography } from "@mui/material";
import foodData from "../../utils/DummyFood.json";
import { CardModal } from "../cards/CardModal";
import { useState } from "react";
export const Menu = () => {
  const [menu, setMenu] = useState("Breakfast");
  const menuHandler = (e: string) => {
    setMenu(e);
  };
  const buttonStyle = (category: string) => ({
    "&.MuiButtonBase-root:hover": {
      backgroundColor: menu === category ? "primary.main" : "white",
      boxShadow: "none",
    },
    boxShadow: "none",
    border: 1,
    borderColor: "#D6D8DB",
    borderRadius: "8px",
    padding: "8px 16px",
    width: 270,
    color: menu === category ? "white" : "black",
    backgroundColor: menu === category ? "primary.main" : "white",
  });
  // const buttonStyle = {
  //   padding: "8px 16px",
  //   width: 270,
  //   color: menu == "Breakfast" ? "white" : "black",
  //   backgroundColor: menu == "Breakfast" ? "primary" : "white",
  // };
  const menuTitles = [
    "Breakfast",
    "Salads and Appetizers",
    "Main Dish",
    "Dessert",
  ];
  return (
    <Container>
      <Stack
        my={"32px"}
        direction={"row"}
        justifyContent={"center"}
        gap={"26px"}
      >
        {menuTitles.map((category) => (
          <Button
            key={category}
            disableRipple
            variant="contained"
            sx={buttonStyle(category)}
            onClick={() => menuHandler(category)}
          >
            <Typography
              fontSize={"16px"}
              fontWeight={500}
              sx={{ textTransform: "none" }}
            >
              {category}
            </Typography>
          </Button>
        ))}
      </Stack>
      <Stack mt={"54px"} mb={"80px"} gap={"60px"}>
        <Stack gap={3} direction={"row"} flexWrap={"wrap"}>
          {foodData
            .filter((item) => item.category == menu)
            .map((data, index) => (
              <CardModal key={index} data={data} />
            ))}
        </Stack>
      </Stack>
    </Container>
  );
};
