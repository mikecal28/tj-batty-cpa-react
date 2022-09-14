import { useState, useEffect, forwardRef } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

import StickyNavBar from "../navigation/StickyNavBar";
import HeroRef from "../HeroRef";

const HeroWithRef = forwardRef((props, ref) => {
  return <HeroRef innerRef={ref} {...props} />;
});

function AboutUs() {
  const [moveNavBar, setMoveNavBar] = useState(false);

  const leftColumnVariants = {
    offscreen: {
      x: -300,
    },
    onscreen: {
      x: 0,
      transition: {
        staggerChildren: 0.5,
        type: "ease-in-out",
        duration: 1.3,
      },
    },
  };

  const rightColumnVariants = {
    offscreen: {
      x: 300,
    },
    onscreen: {
      x: 0,
      transition: {
        staggerChildren: 0.5,
        type: "ease-in-out",
        duration: 1.3,
      },
    },
  };

  useEffect(() => {
    console.log(moveNavBar);
  }, [moveNavBar]);

  return (
    <div className="page-container about-us">
      <Waypoint
        onEnter={() => setMoveNavBar(false)}
        onLeave={() => setMoveNavBar(true)}
      >
        <HeroWithRef />
      </Waypoint>
      <StickyNavBar moveNavBar={moveNavBar} />
      <motion.div className="div-1" initial="offscreen" whileInView="onscreen">
        <div className="div-1-header">
          WHAT DO YOU NEED YOUR CPA FIRM TO BE?
        </div>

        <div className="ideals-div">
          <motion.div
            id="left-column"
            className="sophisticated"
            variants={leftColumnVariants}
          >
            <motion.div className="heading" variants={leftColumnVariants}>
              Sophisticated
              <motion.div className="subheading" variants={leftColumnVariants}>
                Qualified professionals with the experience to advise you
                strategically
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="small-business-friendly">Small Business Friendly</div>

          <motion.div
            id="right-column"
            className="full-service"
            variants={rightColumnVariants}
          >
            <motion.h3 variants={rightColumnVariants}>Full-Service</motion.h3>
          </motion.div>

          <motion.div
            id="left-column"
            className="responsive"
            variants={leftColumnVariants}
          >
            <motion.h3 variants={leftColumnVariants}>Responsive</motion.h3>
          </motion.div>

          <div className="strategic">Strategic</div>

          <motion.div
            id="right-column"
            className="relational"
            variants={rightColumnVariants}
          >
            <motion.h3 variants={rightColumnVariants}>Relational</motion.h3>
          </motion.div>
        </div>
      </motion.div>

      <div className="div-2"></div>
      <div className="div-3"></div>
      <div className="div-4"></div>
      <div className="div-5"></div>
      <div className="div-6"></div>
      <div className="footer"></div>
    </div>
  );
}

export default AboutUs;
