import FoodCard from "./FoodCard";
import "./styles.css";

const Main = () => {
  return (
    <main
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div className="food">
        <div className="food-header">
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className="food-card-container">
          <FoodCard
            name="Greek Salad"
            image="/src/assets/greek_salad.jpg"
            price="12.99"
            description="A traditional Greek salad consists of sliced cucumbers, tomatoes,
          green bell pepper, red onion, olives, and feta cheese."
          />
          <FoodCard
            name="Bruschetta"
            image="/src/assets/bruschetta.svg"
            price="5.99"
            description="Bruschetta is an Italian appetizer (antipasto) consisting of grilled bread topped with garlic, olive oil, and salt."
          />
          <FoodCard
            name="Lemon Desert"
            image="/src/assets/lemon_dessert.jpg"
            price="12.9"
            description="From classic lemon cake to frozen lemonade and even pink lemonade sheet cake."
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
