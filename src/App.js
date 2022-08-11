import "./App.css";
import Card from "./components/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <div className="App">
        <Card />
      </div>
      <div className="designBy">
      <p className="day">Day 3</p>
        <h1>By</h1>
        <p> Mustafa Karaçuha</p>
      </div>
    </>
  );
}

export default App;
