import { Box, Container, Stack, Typography, Link } from "@mui/material";
import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
  FooterBg,
} from "../icons";
export const Footer = () => (
  <Box width="100%" height={545} bgcolor={"#18BA51"} position={"relative"}>
    <Container>
      <Stack
        position={"absolute"}
        zIndex={1000}
        left={250}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <FooterBg />
      </Stack>
      <Stack
        top={114}
        position={"absolute"}
        zIndex={1500}
        width={1200}
        gap={5}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Stack gap={1} direction={"row"} alignItems="center">
          <Box width="41px" height="41px" px="4.87px" py="7.18px">
            <Logo color="white" />
          </Box>
          <Typography fontSize={"20px"} fontWeight={700} color={"white"}>
            Food Delivery
          </Typography>
        </Stack>
        <Stack
          width={1200}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          fontWeight={600}
        >
          <Link href="#" underline="always" color={"#FFF"}>
            Нүүр
          </Link>
          <Link href="#" underline="always" color={"#FFF"}>
            Холбоо барих
          </Link>
          <Link href="#" underline="always" color={"#FFF"}>
            Хоолны цэс
          </Link>
          <Link href="#" underline="always" color={"#FFF"}>
            Үйлчилгээний нөхцөл
          </Link>
          <Link href="#" underline="always" color={"#FFF"}>
            Хүргэлтийн бүс
          </Link>
          <Link href="#" underline="always" color={"#FFF"}>
            Нууцлалын бодлого
          </Link>
        </Stack>
        <Stack direction={"row"} p={"5px"} gap={"18px"} alignItems={"center"}>
          <Link href="#">
            <FacebookIcon />
          </Link>
          <Link href="#">
            <InstagramIcon />
          </Link>
          <Link href="#">
            <TwitterIcon />
          </Link>
        </Stack>
        <Box height="1px" width={1200} bgcolor={"white"}>
          <Stack gap={1} alignItems={"center"} color="white" mt={5}>
            <Typography>© 2024 Pinecone Foods LLC </Typography>
            <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
          </Stack>
        </Box>
      </Stack>
    </Container>
  </Box>
);
