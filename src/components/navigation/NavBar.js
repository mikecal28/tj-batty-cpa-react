// function NavBar() {
//   return (
//     <div id="main-navbar" class="navbar">
//       <button id="about-us">About Us</button>
//       <button id="clients">CLIENTS</button>
//       <button id="tax">TAX</button>
//       <button id="accounting">ACCOUNTING</button>
//       <button id="advisory">ADVISORY</button>
//       <button id="international">INTERNATIONAL</button>
//       <button id="legal">LEGAL</button>
//       <button id="blog">Blog</button>
//       <button id="contact-us">Contact Us</button>
//     </div>
//   );
// }

// export default NavBar;

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar(props) {
  return (
    <div
      className={
        props.location.pathname.includes("/") && props.location.pathname !== "/"
          ? "main-navbar-container"
          : "hidden-navbar-container"
      }
    >
      {props.location.pathname.includes("/") &&
        props.location.pathname !== "/" && (
          <div
            className={
              props.location.pathname === "/" ? "hidden-navbar" : "main-navbar"
            }
          >
            <FontAwesomeIcon id="navbar-star" icon={["fa-solid", "fa-star"]} />
            <NavLink
              exact
              to={"/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">ABOUT US</button>
            </NavLink>

            <NavLink
              to={"/clients"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">CLIENTS</button>
            </NavLink>

            <NavLink
              to={"/tax"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">TAX</button>
            </NavLink>

            <NavLink
              to={"/accounting"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">ACCOUNTING</button>
            </NavLink>

            <NavLink
              to={"/advisory"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">ADVISORY</button>
            </NavLink>

            <NavLink
              to={"/international"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">INTERNATIONAL</button>
            </NavLink>

            <NavLink
              to={"/legal"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">LEGAL</button>
            </NavLink>

            <NavLink
              to={"/blog"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">BLOG</button>
            </NavLink>

            <NavLink
              to={"/contact-us"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">CONTACT US</button>
            </NavLink>
          </div>
        )}
    </div>
  );
}

export default NavBar;
