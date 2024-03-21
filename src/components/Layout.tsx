import { Footer, Header } from ".";
const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
