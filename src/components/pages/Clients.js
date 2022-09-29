import { motion } from "framer-motion";

import Briefcase from "../../assets/svg/briefcase.svg";
import People from "../../assets/svg/people.svg";
import Person from "../../assets/svg/person.svg";
import Star2 from "../../assets/svg/star2.svg";

import Gavel from "../../assets/svg/gavel.svg";
import Medical from "../../assets/svg/medical.svg";
import Graph from "../../assets/svg/graph.svg";
import Computer from "../../assets/svg/computer.svg";
import Lightbulb from "../../assets/svg/lightbulb.svg";
import Dollar from "../../assets/svg/dollar.svg";
import House2 from "../../assets/svg/house2.svg";
import Stack from "../../assets/svg/stack.svg";

function Clients() {
  const iconVariants = {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        // staggerChildren: 0.5,
        type: "ease-in-out",
        duration: 1,
      },
    },
  };

  return (
    <div className="clients">
      <div className="hero-wrapper">
        <h1 className="page-header">CLIENTS</h1>
      </div>
      <div className="div-1">
        <h1>WHO DO WE WORK WITH?</h1>
      </div>

      <motion.div
        // id="left-column"
        className="div-2"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ margin: "0% 0% -25% 0%" }}
        variants={iconVariants}
      >
        <div className="div-2-icon">
          <img
            src={Briefcase}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="Briefcase"
          />
          <h2>SMALL BUSINESSES</h2>
        </div>
        <div className="div-2-icon">
          <img
            src={People}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="People"
          />
          <h2>MID-SIZED BUSINESSES</h2>
        </div>
        <div className="div-2-icon">
          <img
            src={Person}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="Person"
          />
          <h2>INDIVIDUALS</h2>
        </div>
        <div className="div-2-icon">
          <img
            src={Star2}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="Star2"
          />
          <h2>CPA FIRMS</h2>
        </div>
      </motion.div>
      <div className="div-3">
        <h1>INDUSTRIES WE SERVE</h1>
        <h6>Just to name a few...</h6>
      </div>
      <motion.div
        className="div-4"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ margin: "0% 0% -25% 0%" }}
        variants={iconVariants}
      >
        <div className="div-4-icon">
          <img
            src={House2}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="House2"
          />
          <h2>CONSTRUCTION</h2>
        </div>
        <div className="div-4-icon">
          <img
            src={Stack}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="Stack"
          />
          <h2>
            REAL ESTATE
            <br />
            DEVELOPMENT
          </h2>
        </div>
        <div className="div-4-icon">
          <img
            src={Dollar}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="Dollar"
          />
          <h2>
            VENTURE
            <br />
            CAPITAL
          </h2>
        </div>
        <div className="div-4-icon">
          <img
            src={Lightbulb}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="Lightbulb"
          />
          <h2>STARTUPS</h2>
        </div>
        <div className="div-4-icon">
          <img
            src={Computer}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="Computer"
          />
          <h2>WEB-MARKETING</h2>
        </div>
        <div className="div-4-icon">
          <img
            src={Graph}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="Graph"
          />
          <h2>
            PROFESSIONAL
            <br />
            SERVICES
          </h2>
        </div>
        <div className="div-4-icon">
          <img
            src={Medical}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="Medical"
          />
          <h2>
            HEALTH
            <br />
            SERVICES
          </h2>
        </div>
        <div className="div-4-icon">
          <img
            src={Gavel}
            style={{ width: "5.5rem", height: "5.5rem" }}
            alt="Gavel"
          />
          <h2>LAW FIRMS</h2>
        </div>
      </motion.div>
      <div className="div-5">
        <div className="logo">
          LOGO
          <br />
          PLACEHOLDER
        </div>
        <div className="contact-info">
          Contact Info
          <br />
          Placeholder
        </div>
      </div>
    </div>
  );
}

export default Clients;
