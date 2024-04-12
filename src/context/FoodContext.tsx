import React, { useContext, createContext, useState, useEffect } from "react";

interface FoodData {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
}

// FoodContext iin type iin zaaj ugnu
interface FoodContextType {
  foodData: FoodData[];
  setFoodData: React.Dispatch<React.SetStateAction<FoodData[]>>;
}
const FoodContext = createContext<FoodContextType>({} as FoodContextType);

// Custom hook uusgej bn useContext ashiglaj
export const useFoodData = () => useContext(FoodContext);

export const FoodContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [foodData, setFoodData] = useState<FoodData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/food", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log("data:",data)
        setFoodData(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData()
  }, []);
  
  return (
    <FoodContext.Provider value={{ foodData, setFoodData }}>
      {children}
    </FoodContext.Provider>
  );
};
