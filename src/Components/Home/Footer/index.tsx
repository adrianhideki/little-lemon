import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <span className="footer-title">Doormat Navigation</span>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/book">Reservations</a>
          <a href="/order-online">Order online</a>
          <a href="/login">Login</a>
        </div>
        <div className="footer-column">
          <span className="footer-title">Contact</span>
          <a href="http://maps.google.com/maps?q=little%20lemon" target="_blank">Adress</a>
          <a href="tel:+5514999999999">Phone number</a>
          <a href="mailto:contact@little-lemon.com">e-mail</a>
        </div>
        <div className="footer-column">
          <span className="footer-title">Social Media Links</span>
          <a href="https://instagram.com/little_lemon_restaurant" target="_blank">Instagram</a>
          <a href="https://www.facebook.com/little_lemon_restaurant" target="_blank">Facebook</a>
          <a href="http://x.com/little_lemon_restaurant" target="_blank">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
