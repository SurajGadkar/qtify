import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Section from "./components/Section/Section";
import { fetchTopSongs, fetchNewAlbums } from "./components/api/api.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Section title={"Top Albums"} dataSource={fetchTopSongs} />
      <Section title={"New Albums"} dataSource={fetchNewAlbums} />
    </div>
  );
}

export default App;
