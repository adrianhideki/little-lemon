import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo.svg";
import menu from "../../assets/menu.svg";
import "./styles.css";

const menuItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Menu",
    href: "#menu",
  },
  {
    title: "Reservations",
    href: "#reservations",
  },
  {
    title: "Order Online",
    href: "#order-online",
  },
  {
    title: "Login",
    href: "#login",
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!buttonRef.current || !sidebarRef.current) return;

    if (
      !sidebarRef.current.contains(event.target as Node) &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="nav-container">
        <img src={Logo} height={50} />
        <div ref={buttonRef} onClick={handleMenuClick}>
          <img className="menu-button" src={menu} height={30} />
        </div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div ref={sidebarRef} className={isOpen ? "sidebar" : "sidebar-off"}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
