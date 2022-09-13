import { useState, useEffect, forwardRef } from "react";
import { Waypoint } from "react-waypoint";
import StickyNavBar from "../navigation/StickyNavBar";
import Hero from "../Hero";

const HeroWithRef = forwardRef((props, ref) => {
  return <Hero innerRef={ref} {...props} />;
});

function AboutUs() {
  const [moveNavBar, setMoveNavBar] = useState(false);

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
      <div className="div-1">
        <div className="div-1-header">
          WHAT DO YOU NEED YOUR CPA FIRM TO BE?
        </div>
        <div className="ideals-div">
          <div id="left-column" className="sophisticated">
            Sophisticated
          </div>
          <div className="small-business-friendly">Small Business Friendly</div>
          <div id="right-column" className="full-service">
            Full-Service
          </div>
          <div id="left-column" className="responsive">
            Responsive
          </div>
          <div className="strategic">Strategic</div>
          <div id="right-column" className="relational">
            Relational
          </div>
        </div>
      </div>
      <div className="div-2">
        <h2 id="this-thing">Something</h2>
      </div>
      <div className="div-3"></div>
      <div className="div-4"></div>
      <div className="div-5"></div>
      <div className="div-6"></div>
      <div className="footer"></div>
    </div>
  );
}

export default AboutUs;
