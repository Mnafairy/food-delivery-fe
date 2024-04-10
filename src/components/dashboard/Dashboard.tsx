import { Container, Stack, Typography } from "@mui/material";
import { AdminCategory } from "./AdminCategory";
import { AdminMenu } from "./AdminMenu";
import React from "react";
import { useCategory } from "@/context/CategoryContext";
import { CreateCategory } from "./CreateCategory";
const Dashboard = () => {
  const { category  } = useCategory();
  // const [category, setCategory] = useState();

  // const router = useRouter();
  // const userToken = localStorage.getItem("userToken");

  // if (userToken === null) router.push("/login");
  // const logOutHandler = () => {
  //   localStorage.removeItem("userToken");
  //   router.push("/login");
  // };
  return (
    <Container>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>
          <Typography fontSize={"22px"} fontWeight={700} pt={3} pb={5}>
            Food menu
          </Typography>
          <Stack width={"258px"} height={"100vh"} gap={"26px"}>
            {category.map((data, index) => (
              <AdminCategory key={index} data={data} />
            ))}

            <CreateCategory />
          </Stack>
        </Stack>
        <AdminMenu />
        {/* <AdminMenu category={category} /> */}
      </Stack>
    </Container>
  );
};
export default Dashboard;
