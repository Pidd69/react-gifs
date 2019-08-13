import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {

  handleChange = (event) => {
    console.log(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search"
      onChange={this.handleChange}/>
    )
  }
}



export default SearchBar;
