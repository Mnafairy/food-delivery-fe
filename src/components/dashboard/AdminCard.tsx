import React from "react";
import {
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Box,
  Stack,
} from "@mui/material";
interface data {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
}

export const AdminCard = ({ data }: { data: data }) => {
  return (
    <Card sx={{ width: 270, height: 256, boxShadow: 0 }}>
      <CardActionArea disableRipple>
        <CardMedia
          component="img"
          width="282"
          height="186"
          image={data.imagePath}
          alt="green iguana"
        />
        {data.sale > 0 ? (
          <Box
            p="4px 16px"
            borderRadius={"16px"}
            bgcolor={"#18BA51"}
            position={"absolute"}
            top={"15px"}
            right={"15px"}
            border={1}
            borderColor={"white"}
          >
            <Typography fontSize={"18px"} fontWeight={600} color={"white"}>
              {data.sale + "%"}
            </Typography>
          </Box>
        ) : (
          <Stack></Stack>
        )}

        <CardContent sx={{ pt: "14px", px: 0, pb: 0 }}>
          <Typography fontWeight={600} fontSize={18}>
            {data.foodName}
          </Typography>
          {data.sale > 0 ? (
            <Stack direction={"row"} gap={2}>
              <Typography fontSize={"18px"} color={"#18BA51"} fontWeight={600}>
                {data.price - (data.price * data.sale) / 100}₮
              </Typography>
              <Typography
                fontSize={"18px"}
                sx={{ textDecoration: "line-through" }}
              >
                {data.price}₮
              </Typography>
            </Stack>
          ) : (
            <Typography fontSize={"18px"} color={"#18BA51"} fontWeight={600}>
              {data.price}₮
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
