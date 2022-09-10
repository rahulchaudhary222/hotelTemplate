import "./App.css";
import Navbar from "./Component/navbar/navbar";
import Carosuel from "./Component/carosuel/carosuel";
import Contain from "./Component/containent/contain";
import Footer from "./Component/footter/footter";
import { useState } from "react";
import Discription from "./Component/desciption/discription";

function App() {
  const [showPages, setShowPages] = useState("home");
  return (
    <div className="App">
      <Navbar />
      <Carosuel />
      <hr></hr>
      <Discription showPages={showPages} setShowPages={setShowPages} />
      <Contain showPages={showPages} setShowPages={setShowPages} />
      <Footer />
    </div>
  );
}

export default App;
