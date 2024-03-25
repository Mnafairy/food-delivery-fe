import { Opacity } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const Home = () => {
  return (
    <Stack>
      <Stack
        width={"100%"}
        height={"788px"}
        bgcolor={"#18BA51"}
        sx={{ backgroundImage: "url(/footerBg.svg)" }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack width={"384px"} color={"white"} gap={"23px"}>
          <Typography fontSize={"55px"} fontWeight={600} lineHeight={"90%"}>
            Pinecone Food delivery
          </Typography>
          <Box border={1} borderColor={"white"}></Box>
          <Typography fontSize={"22px"} fontWeight={700} lineHeight={"120%"}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <Image
            src="/foodIcon1.png"
            width={443}
            height={438}
            objectFit="contain"
            alt="Picture of the food"
          />
          <Image
            src="/foodIcon2.png"
            width={313}
            height={313}
            alt="Picture of the food"
          />
        </Stack>
      </Stack>
      <Stack></Stack>
    </Stack>
  );
};
