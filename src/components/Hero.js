import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

import HeroImage1 from "../assets/scott-graham-OQMZwNd3ThU-unsplash.jpg";
import HeroImage2 from "../assets/kelly-sikkema-SiOW0btU0zk-unsplash.jpg";
import HeroImage3 from "../assets/stellrweb-djb1whucfBY-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <div className="hero-carousel">
      <Carousel slide={false}>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={HeroImage1}
            alt="One"
            style={{ objectFit: "cover", height: "100vh", width: "auto" }}
          />
          <Carousel.Caption>
            <div id="carousel-caption">
              <FontAwesomeIcon
                id="carousel-icon"
                icon={["fa-solid", "fa-calculator"]}
                size="6x"
              />

              <h1 id="carousel-title">TAX + ACCOUNTING + ADVISORY</h1>

              <p id="carousel-heading">
                sophisticated solutions in the heart of Vernal
              </p>
              <button id="carousel-button">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={HeroImage2}
            alt="Two"
            style={{ objectFit: "cover", height: "100vh", width: "auto" }}
          />
          <Carousel.Caption>
            <div id="carousel-caption">
              <FontAwesomeIcon
                id="carousel-icon"
                icon={["fa-solid", "fa-comments-dollar"]}
                size="6x"
              />
              <h1 id="carousel-title">FROM OUR SMALL BUSINESS TO YOURS</h1>
              <p id="carousel-heading">
                the big firm advice you need with the small firm relationships
                you desire
              </p>
              <button id="carousel-button">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
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
            <div id="carousel-caption">
              <FontAwesomeIcon
                id="carousel-icon"
                icon={["fa-solid", "fa-book"]}
                size="6x"
              />
              <h1 id="carousel-title">A LOCAL FIRM WITH A GLOBAL REACH</h1>
              <p id="carousel-heading">
                Specialist in international tax for small businesses and
                individuals
              </p>
              <button id="carousel-button">Learn More</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
