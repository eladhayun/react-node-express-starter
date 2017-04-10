import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state : {
    version: string
  };

  constructor(props : any) {
    super(props);
      this.state = {
      version: ''
    };
  }

  getVersion = () => {
    return fetch('/api/version').then(response => response.json()).then(json => {
      return json.version;
    });
  }

  componentDidMount() {
    this.getVersion().then((version) => {
      this.setState({version: version});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h5>Version: {this.state.version}</h5>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
