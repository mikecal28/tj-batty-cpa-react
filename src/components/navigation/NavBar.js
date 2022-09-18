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

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar(props) {
  return (
    <div
      className={props.location.pathname === "/" ? "hidden-navbar" : "navbar"}
      style={{ padding: "0 2rem", margin: "0" }}
    >
      {/* {props.location.pathname === "/login" && (
        <Link exact to={"/"} style={{ textDecoration: "none" }}>
          <button className="nav-buttons">Home</button>
        </Link>
      )} */}

      {props.location.pathname.includes("/") &&
        props.location.pathname !== "/" && (
          <div id="move-navbar" className="navbar about-us-navbar">
            <FontAwesomeIcon id="navbar-star" icon={["fa-solid", "fa-star"]} />
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <button className="nav-buttons">ABOUT US</button>
            </Link>

            <Link
              to={"/clients"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">CLIENTS</button>
            </Link>

            <Link
              to={"/tax"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">TAX</button>
            </Link>

            <Link
              to={"/accounting"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">ACCOUNTING</button>
            </Link>

            <Link
              to={"/advisory"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">ADVISORY</button>
            </Link>

            <Link
              to={"/international"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">INTERNATIONAL</button>
            </Link>

            <Link
              to={"/legal"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">LEGAL</button>
            </Link>

            <Link
              to={"/blog"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">Blog</button>
            </Link>

            <Link
              to={"/contact-us"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="nav-buttons">Contact Us</button>
            </Link>
          </div>
        )}

      {/* {props.location.pathname === "/widgets-dashboard" && (
        <div className="widgets-dashboard-navbar">
          <Link
            to={"/about"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">About</button>
          </Link>
          <div className="page-title">Widgets Dashboard</div>

          <Link
            to={"/logout"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">Log Out</button>
          </Link>
        </div>
      )}

      {props.location.pathname.includes("/widgets-dashboard/") && (
        <div className="widgets-dashboard-navbar">
          <Link
            to={"/widgets-dashboard"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">Widgets</button>
          </Link>
          <div className="page-title">
            {props.location.pathname.includes("swapi-search")
              ? "Swapi Search"
              : props.location.pathname.includes("weather")
              ? "Weather"
              : props.location.pathname.includes("hangman")
              ? "Hangman"
              : props.location.pathname.includes("message-scroller")
              ? "Message Scroller"
              : props.location.pathname.includes("analogue-clock")
              ? "Analogue Clock"
              : ""}
          </div>

          <Link
            to={"/logout"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">Log Out</button>
          </Link>
        </div>
      )}

      {props.location.pathname === "/about" && (
        <div className="widgets-dashboard-navbar">
          <Link
            to={"/widgets-dashboard"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">Widgets</button>
          </Link>
          <div className="page-title">About</div>

          <Link
            to={"/logout"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <button className="nav-buttons">Log Out</button>
          </Link>
        </div>
      )} */}
    </div>
  );
}

export default NavBar;
