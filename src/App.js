import React from "react";
import NavBar from "./component/NavBar";
import Landing from "./component/Landing";
import ChallengeSection from "./component/ChallenegeSection/ChallengeSection";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Landing />
      <ChallengeSection />
      <Footer />
    </div>
  );
}

export default App;
