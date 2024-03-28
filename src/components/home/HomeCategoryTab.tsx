import { Container, Link, Stack, Typography } from "@mui/material";
import { StarIcon } from "../icons/delivery";
import { ArrowIcon } from "../icons/home/ArrowIcon";
import { CardModal } from "../cards/CardModal";
import { useFoodData } from "@/context/FoodContext";
export const HomeCategoryTab = ({ category }: { category: string }) => {
  //orj irsen datag category goor ni filterden
  // console.log("FoodData:", foodData);
  // const filteredFoods = foodData.filter((item) => item.category == category);
  // console.log("filtered foods:", filteredFoods);
  const { foodData } = useFoodData();
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
        {category == "Sale" ? (
          <Stack direction={"row"} justifyContent={"space-between"}>
            {/* filterdsen datag map guilgeed foodcard ruu yavuulna  */}
            {foodData
              .filter((item) => item.sale > 0)
              .slice(0, 4)
              .map((data, index) => {
                return <CardModal key={index} data={data} />;
              })}
          </Stack>
        ) : (
          <Stack direction={"row"} justifyContent={"space-between"}>
            {foodData
              .filter((item) => item.sale == 0)
              .filter((item) => item.category == category)
              .slice(0, 4)
              .map((data, index) => {
                // console.log("data:", data);
                return <CardModal key={index} data={data} />;
              })}
          </Stack>
        )}
      </Stack>
    </Container>
  );
};
