import React from "react";
import Card from "./components/Card";
import Welcome from "./components/welcome";
import theone from "../src/components/imgs/theone.png"
import Hello from "./components/Start";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Hello
    Hello = {"Welcome"}
    />
    <div className="container">
      <div className="row" style={{marginBottom: "125px"}}>
        <div className="col-md-6">
          <Welcome
          welcometitle = {"JAPANES UI"}
          bio = {"its a Japanes them website made to test the style and more"}
          btn = {"GET STARTED"}
          />
        </div>
      
        <div className="col-md-6">
          <Card
          title={"プログラム"}
          text = {"program"}
          />
          <Card
          title={"プログラム"}
          text = {"program"}
          />
          <Card
          title={"プログラム"}
          text = {"program"}
          />
        </div>
      </div>
      <Footer/>
    </div>
</>
  )
}
export default App;