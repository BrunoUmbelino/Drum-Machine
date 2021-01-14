import React from "react";
import { Col, Container, Button } from "reactstrap";
import firstSet from "./audioSets";

export const DrumPadPainel = (props) => {
  let audios = firstSet.map((audio, i) => {
    return (
      <Col key={i}>
        <Button
          id={audio.keyCode}
          className="drum-pad"
          name={audio.id}
          onClick={(id) => props.handleClick(id)}
        >
          <audio id={audio.key} className="clip" src={audio.url}>
            <source type="audio/mp3" />
          </audio>
          {audio.key}
        </Button>
      </Col>
    );
  });

  return <Container className="grid">{audios}</Container>;
};

export default DrumPadPainel;
