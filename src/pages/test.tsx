import { TestCard } from "@/components/cards/testcard";
import { Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
interface foodDataType {
  id: number;
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
}
const Page = () => {
  const [foodData, setFoodData] = useState<foodDataType[]>([]);
  useEffect(() => {
    fetch("./DummyFood.json")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);
  // console.log("foodData", foodData);
  const menuTitles = [
    { name: "Main Dish", id: "1" },
    { name: "Salads and Appetizers", id: "2" },
    { name: "Breakfast", id: "3" },
    { name: "Dessert", id: "4" },
  ];
  const [menu, setMenu] = useState<string>("Breakfast");
  // console.log("menu:", menu);
  const filteredFoods = foodData.filter((data) => data.category == menu);
  // console.log("filteredFoods:", filteredFoods);
  return (
    <Container>
      <Stack direction={"row"}>
        {menuTitles.map((category, index) => (
          <Button onClick={() => setMenu(category.id)} key={index}>
            {category.name}
          </Button>
        ))}
      </Stack>
      <Stack direction={"row"} flexWrap={"wrap"} gap={1}>
        {/* {foodData.map((data, index) => (
          <TestCard key={index} data={data} />
        ))} */}
        {/* {foodData
          .filter((data) => {
            data.category == menu;
          })
          .map((data, index) => {
            return <TestCard key={index} data={data} />;
          })} */}
        {filteredFoods.map((data, index) => (
          <TestCard key={index} data={data} />
        ))}
      </Stack>
    </Container>
  );
};
export default Page;
