import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../abstracts/Nav.scss";
import close from "../logos/x.png";

const Nav: React.FC = () => {
 

  const CloseMenu = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const Clickbutton = () => {
    setOpen(!open);
  };
  const NavTop = open ? "1rem" : "-5rem";

  return (
    <div className={`menu ${open ? "open" : ""}`}>
      <div
        className="NavTop"
        style={{ top: NavTop }}
        onClick={Clickbutton}
      >
        {open ? (
          <img className="close_Nav" src={close} alt="" />
        ) : (
          <>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </>
        )}
      </div>
      {open && (
        <div className="link_container">
          <Link
            to="/menu"
            className="links"
            onClick={
              location.pathname === "/menu" ? CloseMenu : undefined
            }
          >
            <h1>Menu</h1>
          </Link>
          <p id="underline">_________</p>
          <Link
            to="/about"
            className="links"
            onClick={
              location.pathname === "/about" ? CloseMenu : undefined
            }
          >
            <h1>Vårt kaffe</h1>
          </Link>
          <p id="underline">_________</p>
          <Link
            to="/menu"
            className="links"
            onClick={
              location.pathname === "/menu" ? CloseMenu : undefined
            }
          >
            <h1>Min profil</h1>
          </Link>
          <p id="underline">_________</p>
          <Link
            to="/status"
            className="links"
            onClick={
              location.pathname === "/status" ? CloseMenu : undefined
            }
          >
            <h1>Orderstatus</h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;