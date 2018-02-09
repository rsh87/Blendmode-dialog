import React, { Component } from 'react';
import Dialog from './dialog/components/dialog.component';
import './App.css';

//https://next.json-generator.com/api/json/get/E1qqRES84

class App extends Component {
  constructor() {
    super();
    this.state = {
      dialogContent: '',

    }
  }

  componentDidMount() {
    this.getDialogContent();
  }

  getDialogContent() {
    fetch('https://next.json-generator.com/api/json/get/E1qqRES84')
      .then(resp => resp.json())
      .then(data => {
          this.setState({ dialogContent: data[0] })
      });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blend dialog</h1>
        </header>
        <Dialog data={this.state.dialogContent}/>
      </div>
    );
  }
}

export default App;
