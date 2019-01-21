import React, { Component } from 'react';
import './Styles/App.css';
import Board from './Components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board
          length={10}
          width={10}/>
        <div
          className='main-text-wrapper'>
          <div
           className='title'>PR<div class='o-fill'></div>CESSING</div>
          <div className='subtitle'>
            <a href='https://dribbble.com/shots/5827096-Processing-Posters/attachments'>Inspired by Oleg Frolov</a>
          </div>
        </div>
        <div
          className='footer'>
          <a href='https://github.com/withcheesepls/Processing-Poster'>Check out the Source Code</a>
        </div>
      </div>
    );
  }
}

export default App;
