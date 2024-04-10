import { Stack, Typography } from "@mui/material";
import { CreateFoodModal } from "./CreateFoodModal";

export const AdminMenu = () => {
  //all food deeree food.filter((e)=>e.category==category).map((e)=><AdminCard data={e}/>)
  return (
    <Stack pl={4} py={3} width={"894px"} height={"100vh"} gap={4}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography fontSize={"22px"} fontWeight={700}>
          Breakfast
        </Typography>
        <CreateFoodModal />
      </Stack>
      <Stack gap={3} flexWrap={"wrap"}>
        {/* <AdminCard />  */}
      </Stack>
    </Stack>
  );
};
