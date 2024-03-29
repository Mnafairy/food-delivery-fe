import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";

export const DrawerCard = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Stack p={2} gap={2} direction={"row"} width={"538px"}>
        <Box width={"50%"}>
          <CardMedia
            component="img"
            width="245"
            height="150"
            image="./pizza.png"
            alt="green iguana"
          />
        </Box>

        <Stack width={"50%"}>
          <Typography>Main Pizza</Typography>
          <Typography>price</Typography>
          <Typography>ingredients</Typography>
          <Stack direction={"row"}>
            <Button>-</Button>
            <Typography>count</Typography>
            <Button>+</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
