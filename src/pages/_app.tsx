import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#FFF",
//     },
//   },
// });
const App = ({ Component, pageProps }: AppProps) => {
  return (
    // <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </ThemeProvider>
  );
};

export default App;
