import FoodCard from "./FoodCard";
import "./styles.css";
import TestimonialCard from "./TestimonialCard";

const Main = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "240px",
      }}
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
      <div className="testimonials-container">
        <div className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonials-card-container">
            <TestimonialCard
              name="John"
              photo="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              rating={5}
              review="If you want to have a good meal, trust in little lemon restaurant. I had a fantastic meal at Little Lemon last night."
            />
            <TestimonialCard
              name="Sara"
              photo="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              rating={4.5}
              review="Little Lemon was an absolute delight! From the moment I walked in, the atmosphere was warm and inviting."
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
