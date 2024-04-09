import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { CreateFoodModal } from "../cards/CreateFoodModal";
import { AdminCard } from "../cards/AdminCard";

const Dashboard = () => {
  // const router = useRouter();
  // const userToken = localStorage.getItem("userToken");

  // if (userToken === null) router.push("/login");
  // const logOutHandler = () => {
  //   localStorage.removeItem("userToken");
  //   router.push("/login");
  // };

  //category nuudaa fetchleed category uusgedeg component doo ugch category nuudaa hevlene
  // category component onClick deeree useState ee oorchildog
  // oorchilson useState iin utgaar ni buh food deer filter guij baruun tald haruuldag baih

  // create New category modal hiih
  // category edit, delete function hiih

  // Search hiih zuilee bicheed haihad orj irsen utgiin daguu filterleed shine pagend haragdah 
  // 

  
  return (
    <Container>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack width={"258px"} height={"100vh"}>
          <Typography pt={3} pb={5}>
            Food menu
          </Typography>
          <Button>Breakfast</Button>
          <Button>Soup</Button>
          <Button>Main course</Button>
          <Button>Desserts</Button>
          <Button>+ Create new category</Button>
        </Stack>
        <Stack pl={4} py={3} width={"894px"} height={"100vh"} gap={4}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography>Breakfast</Typography>
            <CreateFoodModal />
          </Stack>
          <Stack gap={3} flexWrap={"wrap"}>
            <AdminCard />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Dashboard;
