# Sampler-Machine

Link: https://brunoumbelino.github.io/Sampler-Machine/

### Description

**Sampler Machine** is a responsive application that can play nine different sounds that are stored in the cloud. The project was developed as a solution to the **‘Drum Machine’** challenge proposed by the [FreeCodeCamp](https://www.freecodecamp.org/) community in Front End Development Libraries certification, in the upper left part of the screen it is possible to use the test suite proposed by challenge.

### Technologies

- React
- Bootstrap (Reactstrap)
- JavaScript ES6
- HTML 5
- CSS 3

### Tests proposed by the challenge
    1. I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements
    2. Within #drum-machine I can see an element with corresponding id="display".
    3. Within #drum-machine I can see 9 clickable "drum pad" elements, each with a class name of "drum-pad", a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
    4. Within each .drum-pad, there should be an HTML5 <audio> element which has a src attribute pointing to an audio clip, a class name of "clip", and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
    5. When I click on a .drum-pad element, the audio clip contained in its child <audio> element should be triggered.46ms
    6. When I press the trigger key associated with each .drum-pad, the audio clip contained in its child <audio> element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).
    7. When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
