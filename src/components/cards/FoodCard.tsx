import {
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export const FoodCard = () => {
  return (
    <Card sx={{ width: 282, height: 256 }}>
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          width="282"
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
