import "./styles.css";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import Nav from "../Home/Nav";

const BookingConfirmation = () => {
  return (
    <>
      <Nav />
      <Header />
      <div className="booking-confirmation-container">
        <div>
          <h1>Confirmed reservation</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingConfirmation;
