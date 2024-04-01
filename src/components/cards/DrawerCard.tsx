import { useCartItems } from "@/context/CartContext";
import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";

export const DrawerCard = () => {
  const { cartFoods } = useCartItems();
  console.log("drawCard:", cartFoods);
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      {cartFoods.map((data, index) => (
        <Stack p={2} key={index} gap={2} direction={"row"} width={"538px"}>
          <Box width={"50%"}>
            <CardMedia
              component="img"
              width="245"
              height="150"
              image={data.imagePath}
              alt="green iguana"
            />
          </Box>
          <Stack width={"50%"}>
            <Typography>{data.foodName}</Typography>
            <Typography>{data.price}</Typography>
            <Typography>{data.ingredients}</Typography>
            <Stack direction={"row"}>
              <Button>-</Button>
              <Typography>{data.count}</Typography>
              <Button>+</Button>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
