import { Parallax } from "react-parallax";

import ComputerBackground from "../../assets/andrew-neel-K63xn7P5UOY-unsplash.png";
import arrow from "../../assets/svg/arrow.svg";

import dollar from "../../assets/svg/dollar.svg";
import graph from "../../assets/svg/graph.svg";
import computer from "../../assets/svg/computer.svg";
import gavel from "../../assets/svg/gavel.svg";

const ParallaxBackground = (props) => {
  if (props.whichDiv === "div-2") {
    return (
      <Parallax
        blur={0}
        bgImage={ComputerBackground}
        bgImageAlt="computer background"
        strength={300}
      >
        <div className="div-2">
          <h1 className="div-2-header">WHAT DO WE DO?</h1>

          <div className="content-wrapper">
            <div className="content-item-container-left">
              <img src={dollar} alt="dollar icon" />
              <div className="content-item-wrapper-left">
                <div className="item-header">TAX</div>
                <div className="item-body">
                  A full range of tax preparation and consulting services for
                  individuals and businesses
                </div>
              </div>
            </div>

            <div className="content-item-container-right">
              <img src={graph} alt="graph icon" />
              <div className="content-item-wrapper-right">
                <div className="item-header">ADVISORY</div>
                <div className="item-body">
                  Strategic advisory and planning services to grow your business
                  and optimize your tax outcome
                </div>
              </div>
            </div>

            <div className="content-item-container-left">
              <img src={computer} alt="computer icon" />
              <div className="content-item-wrapper-left">
                <div className="item-header">ACCOUNTING</div>
                <div className="item-body">
                  From full-service bookkeeping to financial statement
                  preparation
                </div>
              </div>
            </div>

            <div className="content-item-container-right">
              <img src={gavel} alt="gavel icon" />
              <div className="content-item-wrapper-right">
                <div className="item-header">LEGAL</div>
                <div className="item-body">
                  Legal and accounting under one roof through Dennis M.
                  Lanphier, P.C.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    );
  } else {
    return (
      <Parallax
        blur={0}
        bgImage={ComputerBackground}
        bgImageAlt="computer background"
        strength={300}
      >
        <div className="div-4">
          <div className="content-wrapper">
            <div className="content-item-container-left">
              <div className="count-item-wrapper-left">
                <div className="item-header">467</div>
                <div className="item-body">HAPPY CLIENTS</div>
              </div>

              <div className="content-item-wrapper-left">
                <div className="item-header">WHO WE ARE</div>
                <div className="item-body">
                  Learn about our roots and what makes us special.
                </div>
              </div>

              <img src={arrow} alt="arrow icon" />
            </div>

            <div className="content-item-container-right">
              <div className="count-item-wrapper-right">
                <div className="item-header">7</div>
                <div className="item-body">TALENTED PROFESSIONALS</div>
              </div>

              <div className="content-item-wrapper-right">
                <div className="item-header">TALK TO US</div>
                <div className="item-body">Contact our firm to learn more.</div>
              </div>

              <img src={arrow} alt="arrow icon" />
            </div>

            <div className="content-item-container-left">
              <img className="order-change" src={arrow} alt="arrow icon" />

              <div className="content-item-wrapper-left">
                <div className="item-header">WHAT WE DO</div>
                <div className="item-body">
                  Diverse services for a complex world.
                </div>
              </div>

              <div className="count-item-wrapper-left">
                <div className="item-header">3,572</div>
                <div className="item-body">TAX RETURNS FILED</div>
              </div>
            </div>

            <div className="content-item-container-right">
              <img src={arrow} alt="arrow icon" />

              <div className="content-item-wrapper-right">
                <div className="item-header">HOW WE DO IT</div>
                <div className="item-body">
                  A unique approach founded on relationships.
                </div>
              </div>

              <div className="count-item-wrapper-right">
                <div className="item-header">1</div>
                <div className="item-body">DEDICATED TEAM</div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    );
  }
};

export default ParallaxBackground;
