import React, { Component } from 'react';
import './Styles/App.css';
import Board from './Components/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: true,
    }
    this.toggleDark = this.toggleDark.bind(this);
  }

  toggleDark(){
    console.log('clicked')
    this.setState({ isDark: !this.state.isDark });
  }

  render() {
    return (
      <div className={`App ${this.state.isDark ? 'dark' : 'light'}`}>
        <Board
          length={10}
          width={10}/>
        <div
          className='main-text-wrapper'>
          <div
            onClick={this.toggleDark}
            className='title'>
            PR<div className='o-fill'></div>CESSING
          </div>
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
