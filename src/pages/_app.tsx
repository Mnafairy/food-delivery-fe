import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FoodContextProvider } from "@/context/FoodContext";
import { CartContextProvider } from "@/context/CartContext";
import { CategoryContextProvider } from "@/context/CategoryContext";
const theme = createTheme({
  palette: {
    primary: {
      main: "#18BA51",
    },
  },
});
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CategoryContextProvider>
      <CartContextProvider>
        <FoodContextProvider>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </FoodContextProvider>
      </CartContextProvider>
    </CategoryContextProvider>
  );
};

export default App;
