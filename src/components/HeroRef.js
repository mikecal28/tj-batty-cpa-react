import { Component } from "react";
import Hero from "./Hero";

class HeroRef extends Component {
  render() {
    return (
      <div ref={this.props.innerRef} className="hero-wrapper">
        <Hero />
      </div>
    );
  }
}

export default HeroRef;
