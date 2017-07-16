import React from 'react';
import Controls from './Controls';
import Starfield from './Starfield';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.changeStarCount = (event) => {
      this.setState({starCount: parseInt(event.target.value, 10)});
    };

    this.changeStarSize = (event) => {
      this.setState({starSize: parseInt(event.target.value, 10)});
    };

    this.changeStarSpreadX = (event) => {
      this.setState({spreadX: parseInt(event.target.value, 10)});
    };

    this.changeStarSpreadY = (event) => {
      this.setState({spreadY: parseInt(event.target.value, 10)});
    };

    this.changeStarColor = (index, color) => {
      const colorsArray = this.state.starColors;
      colorsArray[index] = color;
      this.setState({starColors: colorsArray});
    };
    this.changeStarBehavior = (event) => {
      this.setState({starBehavior: parseInt(event.target.value, 10)});
    };

    this.state = {
      starCount: 30,
      starSize: 0.1,
      starColors: [{r:247, g:253, b:191}, {r:183, g:226, b:231}, {r:251, g:184, b:250}, {r:235, g:235, b:235}],
      spreadX: 50,
      spreadY: 25,
      starBehavior: 1
    };
  }

  render() {
    let autoRenderControls = {
      starCount: this.state.starCount,
      starSize: this.state.starSize,
      spreadX: this.state.spreadX,
      spreadY: this.state.spreadY,
    }
    return (<div>
      <Controls
        changeCount={this.changeStarCount}
        changeSize={this.changeStarSize}
        changeSpreadX={this.changeStarSpreadX}
        changeSpreadY={this.changeStarSpreadY}
        currentColors={this.state.starColors}
        changeColor={this.changeStarColor}
        changeBehavior={this.changeStarBehavior}
      />
      <Starfield
        autoRenderControls={autoRenderControls}
        starColors={this.state.starColors.slice()}
        starBehavior={this.state.starBehavior}
      />
    </div>);
  }
}

export default App;
