import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Card imgSrc={"../assets/songImage.png"} follows="240" />
    </div>
  );
}

export default App;
