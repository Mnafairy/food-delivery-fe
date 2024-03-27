import { Container, Link, Stack, Typography } from "@mui/material";
import { StarIcon } from "../icons/delivery";
import { FoodCard } from "../cards";
import { ArrowIcon } from "../icons/home/ArrowIcon";
import foodData from "../../utils/DummyFood.json";
//orj irsen datag category goor ni filterden
export const HomeCategoryTab = ({ category }: { category: string }) => {
  console.log("FoodData:", foodData);
  const filteredFoods = foodData.filter((item) => item.category == category);
  console.log("filtered foods:", filteredFoods);
  return (
    <Container>
      <Stack justifyContent={"space-between"} gap={3}>
        <Stack
          py={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <StarIcon />
            <Typography fontWeight={700} fontSize={"22px"}>
              {category}
            </Typography>
          </Stack>
          <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
            <Stack gap="5px" direction={"row"} alignItems={"center"}>
              <Typography>Бүгдийг харах</Typography>
              <ArrowIcon />
            </Stack>
          </Link>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          {/* filterdsen datag map guilgeed foodcard ruu yavuulna  */}
          {foodData
            .filter((item) => item.category == category)
            .slice(0, 4)
            .map((data, index) => {
              // console.log("data:",data)
              return <FoodCard key={index} data={data} />;
            })}
        </Stack>
      </Stack>
    </Container>
  );
};
