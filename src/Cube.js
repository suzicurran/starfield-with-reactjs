import React from 'react';

const Cube = (props) => {
    return (
      <mesh
        rotation={props.rotation}
        position={props.position}
      >
        <boxGeometry
          width={props.size}
          height={props.size}
          depth={props.size}
        />
        <meshBasicMaterial
          color={`rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`}
          transparent={true}
          opacity={props.opacity}
        />
      </mesh>
    );
};

export default Cube;
