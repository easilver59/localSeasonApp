import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
import Spinner from "./Spinner";

class App extends React.Component {
  //DEFINE INITAL STATE
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),

      (err) => this.setState({ errorMessage: err.message })
    );
  }

  rednerContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.rednerContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));


