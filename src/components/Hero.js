import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import HeroImage1 from "../assets/scott-graham-OQMZwNd3ThU-unsplash.jpg";
import HeroImage2 from "../assets/kelly-sikkema-SiOW0btU0zk-unsplash.jpg";
import HeroImage3 from "../assets/stellrweb-djb1whucfBY-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <div className="hero-carousel">
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={HeroImage1}
            alt="One"
            style={{ objectFit: "cover", height: "100vh", width: "auto" }}
          />
          <Carousel.Caption>
            <FontAwesomeIcon
              id="carousel-icon"
              icon={["fa-solid", "fa-calculator"]}
              size="6x"
            />
            <h1 id="carousel-title">Label for first slide</h1>
            <p id="carousel-heading">Sample Text for Image One</p>
            <button id="carousel-button">Button</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={HeroImage2}
            alt="Two"
            style={{ objectFit: "cover", height: "100vh", width: "auto" }}
          />
          <Carousel.Caption>
            <h1 id="carousel-title">Label for second slide</h1>
            <p id="carousel-heading">Sample Text for Image Two</p>
            <button id="carousel-button">Button</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={HeroImage3}
            alt="Three"
            style={{
              objectFit: "cover",
              height: "100vh",
              width: "auto",
              objectPosition: "top",
            }}
          />
          <Carousel.Caption>
            <h1 id="carousel-title">Label for third slide</h1>
            <p id="carousel-heading">Sample Text for Image three</p>
            <button id="carousel-button">Button</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
