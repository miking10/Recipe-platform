import { Link } from "react-router";
import logo from "/logo.png";

const Header = () => {
  return (
    <header>
      <div className="right-header r-header">
        <img src={logo} className="logo" alt="EthioRecipe Logo" />
        <h2>EthioRecipes</h2>
      </div>
      <nav>
        <ul>
          <Link to="/">
            <div className="icon-text">
              <img
                src="../Image/icon/home-icon.png"
                className="home-icon"
                alt=""
              />
              <li>Home</li>
            </div>
          </Link>
          <Link to="recipe">
            <div className="icon-text">
              <img
                src="../Image/icon/recipe-ion.png"
                className="recipe-ion"
                alt=""
              />
              <li>Recipe</li>
            </div>
          </Link>
          <Link to="/add-recipe">
            <div className="icon-text">
              <img
                src="../Image/icon/add-icon.png"
                className="add-icon"
                alt=""
              />
              <li>Add Recipe</li>
            </div>
          </Link>
        </ul>
      </nav>
      <div className="left-header">
        <input
          className="search-bar"
          placeholder="search recipe ..."
          type="text"
        />
      </div>
    </header>
  );
};

export default Header;
