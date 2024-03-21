import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputBase,
  InputLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const Login = () => {
  // const handleSubmit = (e) => {
  //   const login = {
  //     email: e.target.email.value,
  //   };
  // };
  return (
    <Stack p={4} gap={6}>
      <Typography>Нэвтрэх</Typography>
      <Stack gap={1}>
        <Stack></Stack>
        <Link
          href="#"
          underline="none"
          color={"black"}
          sx={{ cursor: "pointer" }}
        >
          Нууц үг сэргээх
        </Link>
      </Stack>
      <Stack alignItems={"center"} gap={4}>
        <Button variant="contained" disabled>
          Нэвтрэх
        </Button>
        <Typography>Эсвэл</Typography>
        <Button variant="outlined">Бүртгүүлэх</Button>
      </Stack>
    </Stack>
    // <Stack>
    //   <Typography>Нэвтрэх</Typography>
    //   <form onSubmit={handleSubmit}>
    //     <FormControl>
    //       <InputLabel htmlFor="email">Email</InputLabel>
    //       <Input id="email" name="email" required />
    //     </FormControl>
    //     <FormControl>
    //       <InputLabel htmlFor="password">Password</InputLabel>
    //       <Input id="password" name="password" required type="password" />
    //     </FormControl>
    //     <Input type="submit" value={"Нэвтрэх"} />
    //   </form>
    // </Stack>
  );
};
