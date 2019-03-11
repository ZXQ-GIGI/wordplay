import * as React from 'react';
import Wordplay from '../wordplay';

import config from '../example/wordplay.json';
import './App.css';

class App extends React.Component {
  public componentDidMount() {
    const w = new Wordplay('wordplay', config);
    console.log(w);
  }
  public render() {
    
    return (
      <div className="App">
        {/* <input type="file" accept="text/*.json" alt=""/> */}
        <div id='wordplay' style={{width: 800, height: 600, color: '#fff'}}/>
        {/* <button id="kf">在线客服</button> */}
      </div>
    );
  }
}

export default App;
