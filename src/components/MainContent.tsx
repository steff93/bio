import { useState } from "react";
import Bio from "./Bio";
import Card from "./Card";
import UsefulLinks from "./UsefulLinks";

const MainContent = () => {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      <button
        style={{ maxWidth: 65, alignSelf: "center", cursor: "pointer" }}
        onClick={() => setShowHome(!showHome)}
      >
        Toggle View
      </button>

      <div className="main">
        {showHome && (
          <>
            <Card />
            <Bio />
          </>
        )}

        {!showHome && <UsefulLinks />}
      </div>
    </>
  );
};

export default MainContent;
