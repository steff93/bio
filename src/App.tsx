import "./App.scss";
import Bio from "./components/Bio";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Card />
        <Bio />
      </div>

      <Footer />
    </>
  );
}

export default App;
