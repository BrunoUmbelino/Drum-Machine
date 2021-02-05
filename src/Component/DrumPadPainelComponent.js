import React from "react";
import { Col, Container } from "reactstrap";
import firstSet from "../audioSets";

export const DrumPadPainel = (props) => {
  let audios = firstSet.map((audio, i) => {
    return (
      <Col key={i}>
        <button
          id={audio.keyCode}
          className="btn drum-pad"
          name={audio.id}
          onClick={(id) => props.handleClick(id)}
        >
          <audio id={audio.key} className="clip" src={audio.url}>
            <source type="audio/mp3" />
          </audio>
          {audio.key}
        </button>
      </Col>
    );
  });

  return <Container className="grid">{audios}</Container>;
};

export default DrumPadPainel;
