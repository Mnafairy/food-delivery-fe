import { Box } from "@mui/material";
import { Footer, Header } from ".";
const Layout = ({ children }: { children: any }) => {
  return (
    <Box>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};
export default Layout;
