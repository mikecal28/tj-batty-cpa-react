import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Link } from "react-router-dom";

class StickyNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { moveNavBar: false };
  }

  componentDidMount() {
    console.log("moveNavBar: ", this.state.moveNavBar);
  }

  componentDidUpdate() {
    if (this.props.moveNavBar !== this.state.moveNavBar) {
      this.setState(
        (state, props) => ({
          moveNavBar: props.moveNavBar,
        }),
        () => console.log("moveNavBar: ", this.state.moveNavBar)
      );
    }
  }

  render() {
    return (
      <div
        ref={this.props.innerRef}
        className={
          this.props.moveNavBar
            ? "about-us-navbar shrink-navbar"
            : "about-us-navbar"
        }
      >
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

        <Link to={"/tax"} style={{ textDecoration: "none", color: "white" }}>
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

        <Link to={"/legal"} style={{ textDecoration: "none", color: "white" }}>
          <button className="nav-buttons">LEGAL</button>
        </Link>

        <Link to={"/blog"} style={{ textDecoration: "none", color: "white" }}>
          <button className="nav-buttons">BLOG</button>
        </Link>

        <Link
          to={"/contact-us"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <button className="nav-buttons">CONTACT US</button>
        </Link>
      </div>
    );
  }
}

export default StickyNavBar;
