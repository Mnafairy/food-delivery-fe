import { DeliveryCard } from "@/components/cards";
import { StarIcon } from "@/components/icons/delivery";
import { Container, Stack, Typography } from "@mui/material";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/deliveryzone/Map"), {
  ssr: false,
});

const Page = () => {
  return (
    <Container>
      <Stack mb={"40px"}>
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
export default Page;
