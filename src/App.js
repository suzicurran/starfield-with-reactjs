import React from 'react';
import Controls from './Controls';
import Starfield from './Starfield';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.changeStarCount = (event) => {
      this.setState({starCount: event.target.value});
    };

    this.changeStarSize = (event) => {
      this.setState({starSize: event.target.value});
    };

    this.changeStarSpreadX = (event) => {
      this.setState({spreadX: event.target.value});
    };

    this.changeStarSpreadY = (event) => {
      this.setState({spreadY: event.target.value});
    };

    this.changeStarColor = (index, color) => {
      const colorsArray = this.state.starColors;
      colorsArray[index] = color;
      this.setState({starColors: colorsArray});
    };

    this.state = {
      starCount: 30,
      starSize: 0.1,
      starColors: [{r:247, g:253, b:191}, {r:183, g:226, b:231}, {r:251, g:184, b:250}, {r:235, g:235, b:235}],
      spreadX: 50,
      spreadY: 25
    };
  }

  render() {
    return (<div>
      <Controls
        changeCount={this.changeStarCount}
        changeSize={this.changeStarSize}
        changeSpreadX={this.changeStarSpreadX}
        changeSpreadY={this.changeStarSpreadY}
        currentColors={this.state.starColors}
        changeColor={this.changeStarColor}
      />
      <Starfield
        starCount={this.state.starCount}
        starSize={this.state.starSize}
        starColors={this.state.starColors.slice()}
        spreadX={this.state.spreadX}
        spreadY={this.state.spreadY}
      />
    </div>);
  }
}

export default App;
