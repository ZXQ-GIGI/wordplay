import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <input type="file" accept="text/*.json" alt=""/>
      </div>
    );
  }
}

export default App;
