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
import { useRouter } from "next/router";
import { useState } from "react";

export const Login = () => {
  const [buttonColor, setButtonColor] = useState("gray");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const data = {
  //   email,
  //   password,
  // };
  // fetch("http://localhost:4000/api/login", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const login = {
      email: email,
      password: password,
    };

    const res = await fetch("http://localhost:4000/api/login", {
      body: JSON.stringify(login),
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("userToken", data.token);
      router.push("/dashboard");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  console.log(email, password);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setButtonColor(event.target.value ? "#18BA51" : "gray");
  };
  return (
    <Stack
      height={"570px"}
      width={"450px"}
      p={4}
      gap={6}
      border={1}
      borderRadius={4}
      borderColor={"white"}
      alignItems={"center"}
    >
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
              name="email"
              disableUnderline
              placeholder="Имэйл хаягаа оруулна уу"
              value={email}
              onChange={handleEmailChange}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          sx={{
            bgcolor: buttonColor,
            color: buttonColor == "gray" ? "rgba(28, 32, 36, 0.24)" : "white",
            width: "384px",
            height: "48px",
          }}
          disabled={!email}
          variant="contained"
          disableRipple
          onClick={handleSubmit}
        >
          Нэвтрэх
        </Button>
        <Typography color={"#272727"}>Эсвэл</Typography>
        <Link href="/signup" style={{ textDecoration: "none" }}>
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
            sx={{ cursor: "pointer" }}
          >
            Бүртгүүлэх
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};
