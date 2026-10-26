import { bestFoods } from "../assets/data.js";

const Catagory = () => {
  return (
    <div id="list-rcipe">
      {bestFoods.map((food) => {
        return (
          <div id="list-rcipe" key={food.name}>
            <div className="box">
              <img src={food.image} alt={food.name} />
              <h2>{food.name}</h2>
              <p>{food.description}</p>
              <div className="min-message">
                <button>{food.timeTake}</button>
                <button>{food.difficulty}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Catagory;
