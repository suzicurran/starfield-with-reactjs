import React from 'react'
import reactCSS from 'reactcss'
import { BlockPicker } from 'react-color'

class ColorControl extends React.Component {
  state = {
    displayColorPicker: false
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.props.changeColor(this.props.index, color.rgb);
  };

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgb(${this.props.color.r}, ${this.props.color.g}, ${this.props.color.b})`,
        }
      },
    });

    return (
      <div>
        <div className="swatch" onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div className="popover" >
          <div className="cover"  onClick={ this.handleClose }/>
          <BlockPicker
            triangle='hide'
            width='110px'
            color={ this.props.color }
            colors={[
              '#AAFF00',
              '#FFAA00',
              '#FF00AA',
              '#AA00FF',
              '#00AAFF',
              '#FCD60C',
              '#EC1210',
              '#666666',
              '#EEEEEE'
            ]}
            onChange={ this.handleChange }
          />
        </div> : null }
      </div>
    )
  }
}

export default ColorControl;
