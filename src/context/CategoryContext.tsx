import React, { useContext, createContext, useState, useEffect } from "react";

interface Category {
  name: string;
  _id: string;
}

interface CategoryContextType {
  category: Category[];
  setCategory: React.Dispatch<React.SetStateAction<Category[]>>;
}
const CategoryContext = createContext<CategoryContextType>(
  {} as CategoryContextType
);
export const useCategory = () => useContext(CategoryContext);

export const CategoryContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/category", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCategory(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
