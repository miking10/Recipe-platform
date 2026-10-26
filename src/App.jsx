import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Componet/Header";
import Home from "./Page/Home";
import Recipe from "./Page/Recipe";
import AddRecipe from "./Page/AddRecipe";
import Footer from "./Componet/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
