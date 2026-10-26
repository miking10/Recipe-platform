import tibs from "../assets/food/Tibs.png";

const Catagory = () => {
  return (
    <div id="list-rcipe">
      <div class="box">
        <img src={tibs} alt="Tibs" />
        <h2>Tibs</h2>
        <p>facere sunt distinctio possimus molestias quam!</p>
        <div class="min-message">
          <button>20 min</button>
          <button>Easy</button>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
