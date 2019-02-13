import * as React from 'react';
import Wordplay from '../wordplay';

import wordplay from '../example/wordplay.json';

import './App.css';

class App extends React.Component {
  public render() {
    const w = new Wordplay(wordplay);
    console.log(w);
    return (
      <div className="App">
        <input type="file" accept="text/*.json" alt=""/>
        {/* <button id="kf">在线客服</button> */}
      </div>
    );
  }
}

export default App;
