const HeroSection = () => {
  return (
    <div id="hero-sec">
      <div>
        <p class="welcame-text">Welcame to EthioRecipe</p>
        <h1>Descover. Cook. Share. Enjoy</h1>
        <p class="hero-text">
          Explore delicious recipes from around the world and make every meal
          special.
        </p>
        <div class="hero-btn">
          <button class="btn browse-btn">
            Browse Recipe <span class="arrow">→</span>
          </button>
          <a href="../HTML/add-recipe.html">
            <button class="btn add-btn">
              Add Your Recipe <span class="plue">+</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
