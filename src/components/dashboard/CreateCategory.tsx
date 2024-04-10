import { Box, Button, Input, Modal, Stack, Typography } from "@mui/material";
import { PLusIcon } from "../icons/dashboard/PlusIcon";
import React, { useState } from "react";
import { useCategory } from "@/context/CategoryContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 587,
  height: 284,
  bgcolor: "background.paper",
  Border: 0,
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};
interface dataType {
  _id: string;
  name: string;
}
export const CreateCategory = () => {
  const { category, setCategory } = useCategory();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [newCategory, setNewCategory] = useState("");
  // console.log("category", newCategory);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name: newCategory,
    };
    await fetch("http://localhost:4000/api/category", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    setCategory([...category, data]);
  };

  return (
    <Stack
      width={"258px"}
      height={"40px"}
      border={1}
      borderColor={"#D6D8DB"}
      borderRadius={2}
      color={"#5E6166"}
      px={2}
      py={1}
    >
      <Stack
        gap={1}
        direction={"row"}
        alignItems={"center"}
        onClick={handleOpen}
        sx={{ cursor: "pointer" }}
      >
        <PLusIcon />
        <Typography>Create new category</Typography>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            fontWeight={700}
            fontSize={"24px"}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create new category
          </Typography>
          <Stack gap={1} py={3}>
            <Typography fontWeight={500} fontSize={"14px"}>
              Category name
            </Typography>
            {/* <TextField placeholder="Category name"></TextField> */}
            <Box
              width={"535px"}
              height={"56px"}
              border={1}
              borderColor={"#ECEDF0"}
              borderRadius={1}
              bgcolor={"#F7F7F8"}
              px={2}
              py={1}
              placeholder="Category name"
              component={Input}
              disableUnderline
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            ></Box>
          </Stack>
          <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
            <Button
              sx={{ color: "white" }}
              variant="contained"
              onClick={() => setNewCategory("")}
            >
              Clear
            </Button>
            <Button
              sx={{ color: "white" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};
