import React from "react";
import {
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Button,
  Modal,
  Box,
  Stack,
} from "@mui/material";
interface dataType {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 981,
  height: 564,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const FoodCard = ({ data }: { data: dataType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box onClick={handleOpen}>
        <Card sx={{ width: 270, height: 256 }}>
          <CardActionArea disableRipple>
            <CardMedia
              component="img"
              width="282"
              height="186"
              image={data.imagePath}
              alt="green iguana"
            />
            <CardContent>
              <Typography fontWeight={600} fontSize={18}>
                {data.foodName}
              </Typography>
              <Typography color={"#18BA51"}>{data.price}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} direction={"row"} gap={"33px"}>
          <CardMedia
            component="img"
            width="500"
            height="500"
            image="/pizza.png"
            alt="green iguana"
          />
          <Stack gap={4} width={"50%"}>
            <Stack>
              <Typography>food title</Typography>
              <Typography>food price </Typography>
            </Stack>
            <Stack gap={"12px"}>
              <Typography>Ingredients</Typography>
              <Typography p={1}>food Ingredients</Typography>
            </Stack>
            <Typography>Тоо</Typography>
            <Stack gap={"20px"} direction={"row"}>
              <Button>-</Button>
              <Typography py={1} px={"30px"}></Typography>
              <Button>+</Button>
            </Stack>
            <Button>Сагслах</Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};
