import { useEffect } from "react";

function Clients() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="clients">
      <div className="hero-wrapper"></div>
    </div>
  );
}

export default Clients;
