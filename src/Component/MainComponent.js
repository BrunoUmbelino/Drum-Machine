import React from "react";
import { Col, Container, Row, Label } from "reactstrap";
import DrumPadPainel from "./DrumPadPainelComponent";
import firstSet from "../audioSets";
import "../App.css";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "Display" };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  play(audio, description) {
    audio.currentTime = 0;
    if (audio.id === "Z" || audio.id === "X" || audio.id === "C") {
      audio.volume = 0.6;
    }
    audio.play();
    this.setState({ display: description });
  }

  handleClick(ev) {
    let audio = ev.target.children[0];
    let description = ev.target.name;
    this.play(audio, description);
  }

  handleKeyPress(ev) {
    var key = ev.keyCode.toString();
    var keyCodes = firstSet.map((audio) => {
      return audio.keyCode;
    });

    if (keyCodes.find((el) => el === key)) {
      let audio = document.getElementById(key).children[0];
      let description = document.getElementById(key).name;
      this.play(audio, description);

      document.getElementById(key).classList.add("focus");
      setTimeout(() => {
        document.getElementById(key).classList.remove("focus");
      }, 300);
    }
  }

  render() {
    return (
      <div className="main">
        <div className="content-wrapper">
          <Container>
            <div id="drum-machine">
              <Row className="title">
                <Col>
                  <h1>Sampler Machine</h1>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="drum-pad-painel">
                  <DrumPadPainel
                    handleClick={this.handleClick}
                    handleKeyPress={this.handleKeyPress}
                  />
                </Col>
                <Col md={6} className="drum-pad-dysplay">
                  <div id="display">
                    <Label>{this.state.display}</Label>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="by">By Bruno Umbelino</div>
          </Container>
        </div>
      </div>
    );
  }
}
