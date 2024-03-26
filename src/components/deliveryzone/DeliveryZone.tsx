import { DeliveryCard } from "@/components/cards";
import { StarIcon } from "@/components/icons/delivery";
import { Container, Stack, Typography } from "@mui/material";
import Map from "./Map";

export const DeliveryZone = () => {
  //   const zone = [
  //     "Нархан хотхон",
  //     "26-р байр",
  //     "26-р байр",
  //     "45-р байр",
  //     "3-р байр",
  //     "Хоймор хотхон ",
  //     "Хоймор хотхон ",
  //   ];
  return (
    <Container>
      <Stack>
        <Stack>
          <Map />
        </Stack>
        <Stack py={2} direction={"row"} alignItems={"center"}>
          <StarIcon />
          <Typography fontWeight={700} fontSize={"22px"}>
            Хүргэлтийн бүс дэх хаягууд
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          {/* {zone.map((zone, index) => ( */}
          <DeliveryCard title="А бүс" />
          {/* ))} */}

          <DeliveryCard title="Б бүс" />
        </Stack>
      </Stack>
    </Container>
  );
};
