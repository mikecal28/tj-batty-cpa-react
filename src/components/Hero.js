import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import HeroImage from "../assets/scott-graham-OQMZwNd3ThU-unsplash.jpg";

export default function Hero() {
  return (
    <div className="hero-carousel">
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={HeroImage}
            alt="One"
            style={{ objectFit: "cover", height: "100vh", width: "auto" }}
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Two"
            style={{ objectFit: "cover", height: "100vh", width: "auto" }}
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
