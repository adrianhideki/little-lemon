import "./styles.css";

type FoodCardProps = {
  name: string;
  image: string;
  price: string;
  description: string;
  action?: () => void;
}

const FoodCard = ({ name, price, description, image, action }: FoodCardProps) => {
  return (
    <div className="card-container">
      <img
        className="card-image"
        src={image}
        width="100%"
        height={200}
      />
      <div className="card-body">
        <div className="food-title">
          <div className="food-name">{name}</div>
          <div className="food-price">$ {price}</div>
        </div>
        <div className="food-descrition">
          {description}
        </div>
        <div className="card-action" onClick={action}>
          Order a delivery +1
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
