import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Input, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const CLOUD_NAME = "drpt056a0";
const UPLOAD_PRESET = "dwbpiep4";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  height: 780,
  bgcolor: "background.paper",
  border: "0",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export const CreateFoodModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files) {
      setFile(event.target.files[0]);
    }
  };

  const uploadHandler = async () => {
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const resJson = await res.json();
      if (resJson.url) {
        setImageUrl(resJson.url);
      }
      console.log(imageUrl);
    }
  };

  const handleSubmit = async (e: any) => {
    const newFood = {
      name: e.target.name.value,
      category: e.target.category.value,
      ingredients: e.target.ingredients.value,
      price: e.target.price.value,
      sale: e.target.sale.value,
      imageUrl: imageUrl,
    };
  };

  return (
    <div>
      <Button sx={{ color: "white" }} variant="contained" onClick={handleOpen}>
        Add new food
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography fontSize={"24px"} fontWeight={700}>
            Create food
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack>
              <Typography>Хоолны нэр</Typography>
              <TextField placeholder="Хоолны нэр" id="name" name="name" />
              <Typography>Хоолны ангилал</Typography>
              <TextField
                placeholder="Хоолны нэр"
                id="category"
                name="category"
              />
              <Typography>Хоолны орц</Typography>
              <TextField
                placeholder="Хоолны орц"
                id="ingredients"
                name="ingredients"
              />
              <Typography>Хоолны үнэ</Typography>
              <TextField placeholder="Хоолны үнэ" id="price" name="price" />
              <Typography>Хямдралтай эсэх</Typography>
              <TextField placeholder="Хямдралтай эсэх" id="sale" name="sale" />
              <Typography>Хоолны зураг</Typography>
              <Input onChange={fileChangeHandler} required type="file" />
              <Button onClick={uploadHandler}>Add image</Button>
              <Input
                sx={{ width: "100px" }}
                disableUnderline
                type="submit"
                value={"Continue"}
              />
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
