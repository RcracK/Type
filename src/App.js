import React from "react";
import NavBar from "./component/NavBar";
import Landing from "./component/Landing";
import ChallengeSection from "./component/ChallenegeSection/ChallengeSection";
import Footer from "./component/Footer";
import "./App.css";

const TotalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component {
  state = {
    selectedParagraph: "My name is Rupert",
    timeStarted: false,
    timeRemaining: TotalTime,
    word: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
  };

  componentDidMount() {
    /* fetch(serviceUrl)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        this.setState({ selectedParagraph: data });
      });*/
    const selectedParagraphArray = this.state.selectedParagraph.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });
    this.setState({ testInfo });
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timeStarted={this.state.timeStarted}
          testInfo={this.state.testInfo}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
