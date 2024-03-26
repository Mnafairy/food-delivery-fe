import {
  Box,
  Stack,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Image from "next/image";
export const FoodCard = () => {
  return (
    // <Stack gap={"14px"}>
    //   <Box width={282} height={186} border={0} borderRadius={2}>
    //     <Image
    //       src="/pizza.png"
    //       width={282}
    //       height={186}
    //       alt="Picture of pizza"
    //     ></Image>
    //   </Box>
    //   <Stack gap={"2px"}>
    //     <Typography fontWeight={600} fontSize={18}>
    //       Main Pizza
    //     </Typography>
    //     <Typography color={"#18BA51"}>34,800₮</Typography>
    //   </Stack>
    // </Stack>
    <Card sx={{ maxWidth: 282, height: 256 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="186"
          image="/pizza.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography fontWeight={600} fontSize={18}>
            Main Pizza
          </Typography>
          <Typography color={"#18BA51"}>34,800₮</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
