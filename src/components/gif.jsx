import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Gif extends Component {
  render() {
    const scr = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={scr} alt="" className="gif"/>
    )
  }
}



export default Gif;
