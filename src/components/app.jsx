import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "nKeDknKPneRTW"
    }

    this.search('homer thinking');
  }

  // https://api.giphy.com/v1/gifs/search?q=homer%20thinking&rating=G&limit=10&lang=en&api_key=ICkW2p5R8Orj6vUEGIHISH9jNH75heed
  // https://api.giphy.com/v1/gifs/search?api_key=ICkW2p5R8Orj6vUEGIHISH9jNH75heed&q=homer&limit=25&offset=0&rating=G&lang=en

  search = (query) => {
    giphy('ICkW2p5R8Orj6vUEGIHISH9jNH75heed').search({
      q: query,
      rating: 'G',
      limit: 10,
      lang: 'en'
    }, function (err, res) {
      console.log(res);
    });
  }
  render() {
    const gifs = [
      {id: "nKeDknKPneRTW"},
      {id: "Y4OxQ9b9YxyuQi8Hgg"}

    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
