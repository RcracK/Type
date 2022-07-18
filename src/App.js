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
    selectedParagraph: "My name is Rupert!!",
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

  startTimer = () => {
    this.setState({ timeStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        //Change the WPM
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.word / timeSpent) * TotalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  handleUserInput = (inputvalue) => {
    if (!this.state.timeStarted) this.startTimer();
  };

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
          onInputChange={this.handleUserInput}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
