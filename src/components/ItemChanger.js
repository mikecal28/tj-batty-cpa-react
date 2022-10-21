import { useState, useEffect } from "react";

import Briefcase from "../assets/svg/briefcase.svg";
import People from "../assets/svg/people.svg";
import Person from "../assets/svg/person.svg";
import Star2 from "../assets/svg/star2.svg";

function ItemChanger() {
  const [activeSnippet, setActiveSnippet] = useState(1);

  const renderSnippet = () => {
    if (activeSnippet === 1) {
      return (
        <div className="snippet-wrapper">
          <h1 className="snippet-header">I AM A...</h1>
          <h2 className="snippet-title">SMALL BUSINESS OWNER</h2>
          <p className="snippet-paragraph">
            We know that small business owners want and need guidance. You don’t
            have a tax director or CFO in-house, so you rely on your
            professional advisors to cover your back. We are readily available
            to provide ongoing support through the year, whether through
            periodic accounting reviews, ongoing bookkeeping services, or
            advisory and planning services.
          </p>
          <button className="read-more-button">READ MORE</button>
        </div>
      );
    } else if (activeSnippet === 2) {
      return (
        <div className="snippet-wrapper">
          <h1 className="snippet-header">I AM A...</h1>
          <h2 className="snippet-title">CFO / TAX DIRECTOR</h2>
          <p className="snippet-paragraph">
            Our advanced technical skill makes us uniquely equipped to help
            mid-sized businesses, either as a full service provider or as a
            complement to to your larger audit or tax firm. We can help reduce
            your costs and alleviate pressure on internal finance resources for
            greater operational efficiency.
          </p>
          <button className="read-more-button">READ MORE</button>
        </div>
      );
    } else if (activeSnippet === 3) {
      return (
        <div className="snippet-wrapper">
          <h1 className="snippet-header">I AM A...</h1>
          <h2 className="snippet-title">INDIVIDUAL TAXPAYER</h2>
          <p className="snippet-paragraph">
            Let’s be honest: No one likes worrying about taxes. Therefore, when
            it comes to individual tax services, our primary goal is to make the
            process as painless as possible while empowering you with the
            knowledge to plan appropriately. We leverage the very best in
            technology with our signature personal touch to give our clients
            peace of mind and fewer headaches.
          </p>
          <button className="read-more-button">READ MORE</button>
        </div>
      );
    } else if (activeSnippet === 4) {
      return (
        <div className="snippet-wrapper">
          <h1 className="snippet-header">I AM A...</h1>
          <h2 className="snippet-title">CPA / CPA FIRM</h2>
          <p className="snippet-paragraph">
            We are extremely proud of the unique relationships we have developed
            with small and large firms alike. Our unique specialty areas (such
            as international tax and IRS controversy) give us the ability to
            consult and accept referrals in areas that many practitioners want
            to avoid. We respect our referral partners and strive for
            relationships that are beneficial for everyone.
          </p>
          <button className="read-more-button">READ MORE</button>
        </div>
      );
    }
  };
  return (
    <div className="item-changer">
      <div className="box">
        <div className="snippet-buttons-wrapper">
          <button
            className={
              activeSnippet === 1 ? "snippet-button active" : "snippet-button"
            }
            onClick={() => setActiveSnippet(1)}
          >
            1
          </button>
          <button
            className={
              activeSnippet === 2 ? "snippet-button active" : "snippet-button"
            }
            onClick={() => setActiveSnippet(2)}
          >
            2
          </button>
          <button
            className={
              activeSnippet === 3 ? "snippet-button active" : "snippet-button"
            }
            onClick={() => setActiveSnippet(3)}
          >
            3
          </button>
          <button
            className={
              activeSnippet === 4 ? "snippet-button active" : "snippet-button"
            }
            onClick={() => setActiveSnippet(4)}
          >
            4
          </button>
        </div>
        {renderSnippet()}
      </div>
    </div>
  );
}

export default ItemChanger;
