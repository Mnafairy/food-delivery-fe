import { Container, Link, Stack, Typography } from "@mui/material";
import { StarIcon } from "../icons/delivery";
import { FoodCard } from "../cards";
import { ArrowIcon } from "../icons/home/ArrowIcon";

export const HomeCategoryTab = () => {
  return (
    <Container>
      <Stack justifyContent={"space-between"}>
        <Stack
          py={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <StarIcon />
            <Typography fontWeight={700} fontSize={"22px"}>
              Үндсэн хоол
            </Typography>
          </Stack>
          <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
            <Stack gap="5px" direction={"row"} alignItems={"center"}>
              <Typography>Бүгдийг харах</Typography>
              <ArrowIcon />
            </Stack>
          </Link>
        </Stack>
        <Stack direction={"row"} gap={3}>
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </Stack>
      </Stack>
    </Container>
  );
};
