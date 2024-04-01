import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Logo, ProfileIcon } from "../../icons";
import { SearchInput } from "./SearchInput";
import { NavbarLeft } from "./NavbarLeft";
import { BasketDrawer } from "@/components/drawer/BasketDrawer";
import Link from "next/link";
export const Header = () => {
  return (
    <Container>
      <Stack alignItems={"center"} justifyItems={"center"}>
        <Stack
          width="1200px"
          height="57px"
          direction="row"
          px={3}
          py={1}
          justifyContent="space-between"
        >
          <Stack direction={"row"} alignItems="center" gap={3}>
            <Box width="41px" height="41px" px="4.87px" py="7.18px">
              <Logo color="black" />
            </Box>
            <NavbarLeft />
          </Stack>
          <Stack direction="row" gap={2}>
            <SearchInput />
            <Stack
              direction="row"
              px={2}
              py={1}
              alignItems={"center"}
              sx={{
                cursor: "pointer",
              }}
            >
              <BasketDrawer />
              <Typography fontSize="14px" fontWeight={700}>
                Сагс
              </Typography>
            </Stack>
            <Link href={"/login"}>
              <Stack
                direction="row"
                gap={1}
                px={2}
                py={1}
                alignItems={"center"}
                sx={{
                  cursor: "pointer",
                }}
              >
                <ProfileIcon />
                <Typography fontSize="14px" fontWeight={700}>
                  Нэвтрэх
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
