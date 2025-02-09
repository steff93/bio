import { Route, Routes } from "react-router";
import Bio from "./Bio";
import Card from "./Card";
import UsefulLinks from "./UsefulLinks";

const MainContent = () => {
  return (
    <div className="main">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Card />
              <Bio />
            </>
          }
        />
        <Route path="/useful-links" element={<UsefulLinks />} />
      </Routes>
    </div>
  );
};

export default MainContent;
