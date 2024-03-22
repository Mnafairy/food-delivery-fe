import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const Login = () => {
  // const handleSubmit = (e) => {
  //   const login = {
  //     email: e.target.email.value,
  //   };
  // };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack p={4} gap={6} alignItems={"center"}>
      <Typography fontSize={"28px"} fontWeight={700} color={"#0D1118"}>
        Нэвтрэх
      </Typography>
      <Stack gap={1} alignItems={"flex-end"}>
        <Stack gap={2}>
          <Stack gap={0.5}>
            <Typography fontSize={"14px"}>Имэйл </Typography>
            <Box
              width={"384px"}
              border={1}
              borderColor={"#ECEDF0"}
              borderRadius={1}
              bgcolor={"#F7F7F8"}
              px={2}
              py={1}
              component={Input}
              disableUnderline
              placeholder="Имэйл хаягаа оруулна уу"
            ></Box>
          </Stack>
          <Stack gap={0.5}>
            <Box fontSize={"14px"}>Нууц үг</Box>
            <Box
              border={1}
              width={"384px"}
              borderColor={"#ECEDF0"}
              borderRadius={1}
              bgcolor={"#F7F7F8"}
              px={2}
              py={1}
              component={Input}
              disableUnderline
              placeholder="Нууц үг"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            ></Box>
          </Stack>
        </Stack>
        <Link
          href="#"
          underline="none"
          color={"#3F4145"}
          sx={{ cursor: "pointer" }}
          fontSize={"14px"}
        >
          Нууц үг сэргээх
        </Link>
      </Stack>
      <Stack alignItems={"center"} gap={4}>
        <Button
          variant="contained"
          disabled
          sx={{ width: "384px", height: "48px" }}
        >
          Нэвтрэх
        </Button>
        <Typography color={"#272727"}>Эсвэл</Typography>
        <Stack
          height={"48px"}
          width={"384px"}
          px={2}
          py={1}
          border={1}
          borderRadius={1}
          alignItems={"center"}
          justifyContent={"center"}
          borderColor={"#18BA51"}
          color={"#272727"}
        >
          Бүртгүүлэх
        </Stack>
      </Stack>
    </Stack>
  );
};
