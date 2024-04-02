import { createContext, useContext } from "react";

const TestContext = createContext();
export const useTest = () => useContext(TestContext);

