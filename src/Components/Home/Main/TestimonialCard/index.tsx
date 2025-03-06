import "./styles.css";

type TestimonialCardProps = {
  name: string;
  photo: string;
  rating: number;
  review: string;
};

const TestimonialCard = ({
  name,
  photo,
  rating,
  review,
}: TestimonialCardProps) => {
  return (
    <div className="testimonial-card-container">
      <div style={{ display: "flex", gap: "8px", alignItems: 'center' }}>
        <img className="testimonial-user" src={photo} width={80} height={80} />
        <span className="testimonial-card-name">{name}</span>
      </div>
      <span className="testimonial-review">{review}</span>
      <span className="testimonial-rating">⭐ {rating} / 5</span>
    </div>
  );
};

export default TestimonialCard;
