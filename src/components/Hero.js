import { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div ref={this.props.innerRef} className="hero-wrapper">
        <h1>About Us</h1>
      </div>
    );
  }
}

export default Hero;
