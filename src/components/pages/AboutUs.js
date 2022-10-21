import { useState, useEffect, forwardRef } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

import StickyNavBar from "../navigation/StickyNavBar";
import HeroRef from "../HeroRef";

import HowCanWeHelpYouPic from "../../assets/firmbee-com-jrh5lAq-mIs-unsplash.jpg";

import star from "../../assets/svg/star.svg";
import house from "../../assets/svg/house.svg";
import mountain from "../../assets/svg/mountain.svg";
import messages from "../../assets/svg/messages.svg";
import thumb from "../../assets/svg/thumb.svg";
import heart from "../../assets/svg/heart.svg";

import ItemChanger from "../ItemChanger";
import ParallaxBackground from "../ParallaxBackground";

const HeroWithRef = forwardRef((props, ref) => {
  return <HeroRef innerRef={ref} {...props} />;
});

function AboutUs() {
  const [moveNavBar, setMoveNavBar] = useState(false);

  const leftColumnVariants = {
    offscreen: {
      x: -300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        type: "ease-in-out",
        duration: 1,
      },
    },
  };

  const rightColumnVariants = {
    offscreen: {
      x: 300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        type: "ease-in-out",
        duration: 1,
      },
    },
  };

  const backgroundImageVariants = {
    offscreen: {
      backgroundPosition: "top",
    },
    onscreen: {
      backgroundPosition: "bottom",
      transition: {
        staggerChildren: 0.5,
        type: "ease-in-out",
        duration: 1,
      },
    },
  };

  useEffect(() => {
    console.log(moveNavBar);
  }, [moveNavBar]);

  return (
    <div className="page-container">
      <div className="about-us">
        <Waypoint
          onEnter={() => setMoveNavBar(false)}
          onLeave={() => setMoveNavBar(true)}
        >
          <HeroWithRef />
        </Waypoint>
        <StickyNavBar moveNavBar={moveNavBar} />
        <motion.div
          className="div-1"
          initial="offscreen"
          whileInView="onscreen"
          transition={{
            staggerChildren: 0.1,
            type: "ease-in-out",
            duration: 0.5,
          }}
          viewport={{ amount: 0.8, margin: "55% 0% 0% 0%" }}
        >
          <div className="div-1-header">
            WHAT DO YOU NEED YOUR CPA FIRM TO BE?
          </div>

          <div className="ideals-div">
            <motion.div
              id="left-column"
              className="sophisticated"
              variants={leftColumnVariants}
            >
              <img src={star} alt="star" />
              <motion.div className="heading" variants={leftColumnVariants}>
                Sophisticated
                <motion.div
                  className="subheading"
                  variants={leftColumnVariants}
                >
                  Qualified professionals with the experience to advise you
                  strategically
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="small-business-friendly">
              <img src={house} alt="house" />
              <div className="heading">
                Small Business Friendly
                <div className="subheading">
                  Bringing needed expertise to smaller clients with complex
                  concerns
                </div>
              </div>
            </div>

            <motion.div
              id="right-column"
              className="full-service"
              variants={rightColumnVariants}
            >
              <img src={mountain} alt="mountain" />
              <motion.div className="heading" variants={rightColumnVariants}>
                Full-Service
                <motion.div
                  className="subheading"
                  variants={rightColumnVariants}
                >
                  Combining accounting, tax, & advisory services for a holistic
                  approach
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              id="left-column"
              className="responsive"
              variants={leftColumnVariants}
            >
              <img src={messages} alt="messages" />
              <motion.div className="heading" variants={leftColumnVariants}>
                Responsive
                <motion.div
                  className="subheading"
                  variants={leftColumnVariants}
                >
                  Combining accounting, tax, & advisory services for a holistic
                  approach
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="strategic">
              <img src={thumb} alt="thumb" />
              <div className="heading">
                Strategic
                <div className="subheading">
                  Nuanced and proactive planning to help you achieve maximum tax
                  efficiency
                </div>
              </div>
            </div>

            <motion.div
              id="right-column"
              className="relational"
              variants={rightColumnVariants}
            >
              <img src={heart} alt="heart" />
              <motion.div className="heading" variants={rightColumnVariants}>
                Relational
                <motion.div
                  className="subheading"
                  variants={rightColumnVariants}
                >
                  Building strong relationships with our clients to better
                  understand their needs
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <ParallaxBackground whichDiv={"div-2"} />

        <div className="div-3">
          <h1 className="div-3-header">HOW CAN WE HELP YOU?</h1>
          <div className="content-wrapper">
            <div className="content-item-container-left">
              <img src={HowCanWeHelpYouPic} />
            </div>
            <div className="content-item-container-right">
              <ItemChanger />
            </div>
          </div>
        </div>

        <ParallaxBackground whichDiv={"div-4"} />

        <div className="div-5"></div>
        <div className="div-6"></div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default AboutUs;
