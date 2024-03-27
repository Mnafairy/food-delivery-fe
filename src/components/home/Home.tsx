import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { BookIcon, ClockIcon, VeggieIcon } from "../icons/home";
import { HomeCategoryTab } from "./HomeCategoryTab";
export const Home = () => {
  const info = [
    {
      icon: <BookIcon />,
      title: "Хүргэлтийн төлөв хянах",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <ClockIcon />,
      title: "Шуурхай хүргэлт",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <VeggieIcon />,
      title: "Эрүүл, баталгаат орц",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <BookIcon />,
      title: "Хоолны өргөн сонголт",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];

  return (
    <Stack width={"full"} mb={"80px"}>
      <Box bgcolor={"#18BA51"} sx={{ backgroundImage: "url(/footerBg.svg)" }}>
        <Container>
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            alignItems={"center"}
            width={"100%"}
            height={"788px"}
          >
            <Stack width={"384px"} color={"white"} gap={"23px"}>
              <Typography fontSize={"55px"} fontWeight={600} lineHeight={"90%"}>
                Pinecone <br /> Food delivery
              </Typography>
              <Box border={1} borderColor={"white"}></Box>
              <Typography
                fontSize={"22px"}
                fontWeight={700}
                lineHeight={"120%"}
                letterSpacing={"0.22px"}
              >
                Horem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Stack>
            <Box position="relative" right={140}>
              <Image
                src="/foodIcon1.png"
                width={443}
                height={438}
                alt="Picture of the food"
                // layout="fixed"
              />
              <Image
                src="/foodIcon2.png"
                width={313}
                height={313}
                alt="Picture of the food"
                // layout="fixed"
                style={{ position: "absolute", top: 100, left: 270 }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"} my={"122px"}>
          {info.map((e, index) => (
            <Stack
              width={"265px"}
              key={index}
              border={1}
              borderColor={"#D6D8DB"}
              borderRadius={2}
              p={2}
              gap={"15px"}
              color={"#272727"}
              justifyContent={"space-between"}
              sx={{ boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.10)" }}
            >
              <Box p={"15px"}>{e.icon}</Box>
              <Stack gap={1}>
                <Box fontWeight={700} fontSize={"18px"}>
                  {e.title}
                </Box>
                <Box sx={{ opacity: 0.75 }} fontSize={"14px"}>
                  {e.desc}
                </Box>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
      <Stack gap={"80px"}>
        <HomeCategoryTab category={"Main Dish"} link />
        <HomeCategoryTab category={"Breakfast"} />
        <HomeCategoryTab category={"Dessert"} />
      </Stack>
    </Stack>
  );
};
