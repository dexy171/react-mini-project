import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { ProductList } from "./components/ProductList/ProductList";
import { Container } from "@mui/material";
import { SelectCategory } from "./components/SelectCategory/SelectCategory";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("furniture");

  return (
    <main>
      <Navigation />
      <Container fixed>
        <SelectCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ProductList selectedCategory={selectedCategory} />
      </Container>
    </main>
  );
}

export default App;
