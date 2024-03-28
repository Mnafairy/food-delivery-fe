import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
interface foodDataType {
  id: number;
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
}

export const TestCard = ({ data }: { data: foodDataType }) => {
  console.log("data:", data);
  return (
    <Card sx={{ width: "280px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.imagePath}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.foodName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
