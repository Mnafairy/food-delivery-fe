import { Login } from "@/components/login";
import { Login2 } from "@/components/login/Login2";
import { Stack } from "@mui/material";

const Page = () => {
  return (
    <Stack height={"750px"} justifyContent={"center"} alignItems={"center"}>
      <Login />
      {/* <Login2 /> */}
    </Stack>
  );
};
export default Page;
