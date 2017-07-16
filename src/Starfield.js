import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import deepEqual from 'deep-equal';
import Cube from './Cube';

class Starfield extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.initializeCubes = (props) => {
      const cubes = [];
      for(let i = 0; i < props.autoRenderControls.starCount; i++){
        const newCube = {
          x: this.randomCubeX(props.autoRenderControls.spreadX),
          y: this.randomCubeY(props.autoRenderControls.spreadY),
          z: this.randomCubeZ(),
          color: this.randomCubeColor(props.starColors),
          opacity: this.randomCubeOpacity(),
          size: props.autoRenderControls.starSize
        };
        cubes.push(newCube);
      }
      return cubes;
    };

    this.randomCubeX = (spread = 50) => {
      const x = (Math.random() * (spread - (spread * -1) + 1)) - spread;
      return x;
    };

    this.randomCubeY = (spread = 25) => {
      const x = (Math.random() * (spread - (spread * -1) + 1)) - spread;
      return x;
    };

    this.randomCubeZ = (min = -80, max = -40) => {
      const y = (Math.random() * (max - min + 1)) + min;
      return y;
    };

    this.randomCubeColor = (colors) => {
      // return colors[Math.floor(Math.random() * colors.length)];
      return Math.floor(Math.random() * colors.length)
    };

    this.randomCubeOpacity = () => {
      return (Math.random() / 1.5);
    };

    this.state = {
      cubeRotation: new THREE.Euler(),
      cubes: this.initializeCubes(this.props)
    };

    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      let getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
      }

      let newCubes = this.state.cubes.map( (cube) => {
        let offsetX = 0;
        let offsetY = 0;
        if (this.props.starBehavior === 2){
          offsetX = getRandomArbitrary(-0.25, 0.25);
          offsetY = getRandomArbitrary(-0.25, 0.25);
        }
        return {
          x: cube.x + offsetX,
          y: cube.y + offsetY,
          z: cube.z,
          color: cube.color,
          opacity: cube.opacity,
          size: cube.size
        }
      })
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        ),
        cubes: newCubes
      });
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!deepEqual(this.props.autoRenderControls, nextProps.autoRenderControls)) {
      this.setState({
        cubes: this.initializeCubes(nextProps)
      });
    }
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    const cubeFragments = () => {
      const cubes = this.state.cubes.map((vals, index) => {
        return (
          <Cube
            rotation={this.state.cubeRotation}
            position={new THREE.Vector3(vals.x, vals.y, vals.z)}
            color={this.props.starColors[vals.color]}
            opacity={vals.opacity}
            size={vals.size}
            key={index}
          />
        );
      });
      return cubes;
    };

    return (
      <div id="starfield">
        <React3
          mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
          width={width}
          height={height}
          clearColor={0x000000}
          clearAlpha={0}
          alpha={true}
          onAnimate={this._onAnimate}
        >
          <scene>
            <perspectiveCamera
              name="camera"
              fov={50}
              aspect={width / height}
              near={0.1}
              far={2000}
              position={this.cameraPosition}
            />
            {cubeFragments()}
          </scene>
        </React3>
      </div>
    );
  }
}

export default Starfield;
