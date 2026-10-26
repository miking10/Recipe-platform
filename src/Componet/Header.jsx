import { Router, Routes } from "react-router";

const Header = () => {
  return (
    <div>
        <Routes>
            <Router Path='/' element=''
        </Routes>
      <div className="right-header r-header">
        <img src="../Image/logo.png" className="logo" alt="EthioRecipe Logo" />
        <h2>EthioRecipes</h2>
      </div>
      <nav>
        <ul>
          <a href="index.html">
            <div className="icon-text">
              <img
                src="../Image/icon/home-icon.png"
                className="home-icon"
                alt=""
              />
              <li>Home</li>
            </div>
          </a>
          <a href="#">
            <div className="icon-text">
              <img
                src="../Image/icon/recipe-ion.png"
                className="recipe-ion"
                alt=""
              />
              <li>Recipe</li>
            </div>
          </a>
          <a href="add-recipe.html">
            <div className="icon-text">
              <img
                src="../Image/icon/add-icon.png"
                className="add-icon"
                alt=""
              />
              <li>Add Recipe</li>
            </div>
          </a>
        </ul>
      </nav>
      <div className="left-header">
        <input
          className="search-bar"
          placeholder="search recipe ..."
          type="text"
        />
      </div>
    </div>
  );
};

export default Header;
