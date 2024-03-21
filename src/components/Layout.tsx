import { Container } from "@mui/material";
import { Footer, Header } from ".";
const Layout = ({ children }: { children: any }) => {
  return (
    <Container sx={{}}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
export default Layout;
