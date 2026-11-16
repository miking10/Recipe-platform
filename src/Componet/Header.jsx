import { Link } from "react-router";
import logo from "/logo.png";
import home from "/icons/home-icon.png";
import recipe from "/icons/recipe-ion.png";
import add from "/icons/add-icon.png";

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
              <img src={home} className="home-icon" />
              <li>Home</li>
            </div>
          </Link>
          <Link to="recipe">
            <div className="icon-text">
              <img src={recipe} className="recipe-ion" alt="" />
              <li>Recipe</li>
            </div>
          </Link>
          <Link to="/add-recipe">
            <div className="icon-text">
              <img src={add} className="add-icon" alt="" />
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
