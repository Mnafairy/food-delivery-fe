import { createContext, Dispatch, SetStateAction, useState } from "react";

interface shopCard {
  title: string;
  image: string;
  ingeredient: string;
  category: string;
  price: number;
  count: number;
}
const shopFood: shopCard[] = [];
interface CustomePropsContext {
  foodId: shopCard[];
  setFoodId: Dispatch<SetStateAction<shopCard[]>>;
  allFood: shopCard[];
  setAllFood: Dispatch<SetStateAction<shopCard[]>>;
}
interface customContextProvideProps {
  children: React.ReactNode;
}
const CustomContext = createContext<CustomePropsContext>({
  foodId: shopFood,
  setFoodId: () => {},
  allFood: shopFood,
  setAllFood: () => {},
});

const CustomContextProvider = ({ children }: customContextProvideProps) => {
  const [foodId, setFoodId] = useState(shopFood);
  const [allFood, setAllFood] = useState(shopFood);
  console.log(foodId);
  return (
    <CustomContext.Provider value={{ foodId, setFoodId, allFood, setAllFood }}>
      {children}
    </CustomContext.Provider>
  );
};
export { CustomContext, CustomContextProvider };
