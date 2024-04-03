import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputBase,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export const Login2 = () => {
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const login = {
      email: e.target.email.value,
      password: e.target.password.value,
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
  return (
    <Stack>
      <Typography>Нэвтрэх</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" name="email" required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" name="password" required type="password" />
        </FormControl>
        <Input type="submit" value={"Нэвтрэх"} />
      </form>
    </Stack>
  );
};
