import React from 'react';
import ColorControl from './ColorControl';

const Controls = (props) => {
    const colorControls = (currentColors, onChange) => {
      return currentColors.map((color, index) => {
        return (
          <td className="controlGroup">
            <ColorControl
              key={index}
              changeColor={onChange}
              color={color}
              index={index}
            />
          </td>
        );
      });
    };

    return (
      <table id="controls">
        <tbody>
          <tr>
            <td>
              &nbsp;
            </td>
            <td className="labelCell">
              <label htmlFor="starCount">Star&nbsp;Count:</label>
            </td>
            <td className="controlGroup">
              <select name="starCount" defaultValue={300} onChange={props.changeCount}>
                <option value={600}>Many</option>
                <option value={300}>Normal</option>
                <option value={150}>Few</option>
                <option value={0}>None</option>
              </select>
            </td>
            <td className="labelCell">
              <label htmlFor="starSize">Star&nbsp;Size:</label>
            </td>
            <td className="controlGroup">
              <select name="starSize" defaultValue={0.1} onChange={props.changeSize}>
                <option value={1.0}>Bigger</option>
                <option value={0.5}>Big</option>
                <option value={0.2}>Small</option>
                <option value={0.1}>Tiny</option>
              </select>
            </td>
            <td className="labelCell">
              <label htmlFor="starSpreadX">Horizontal&nbsp;Spread:</label>
            </td>
            <td className="controlGroup">
              <select name="starSpreadX" defaultValue={50} onChange={props.changeSpreadX}>
                <option value={80}>Extended</option>
                <option value={50}>Full</option>
                <option value={30}>Slim</option>
                <option value={10}>Band</option>
              </select>
            </td>
            <td className="labelCell">
              <label htmlFor="starSpreadY">Vertical&nbsp;Spread:</label>
            </td>
            <td className="controlGroup">
              <select name="starSpreadY" defaultValue={25} onChange={props.changeSpreadY}>
                <option value={40}>Tall</option>
                <option value={25}>Full</option>
                <option value={15}>Compressed</option>
                <option value={5}>Line</option>
              </select>
            </td>
            <td className="labelCell">
              <label>Star&nbsp;Colors:</label>
            </td>
            {colorControls(props.currentColors, props.changeColor)}
            <td>
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    );
};

export default Controls;
