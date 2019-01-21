import React from 'react';
import '../Styles/Circle.css';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default class Circle extends React.Component{
  render(){
    const styles = {
      animationDelay: `${getRandomArbitrary(0, 10)}s`,
    }

    return(
      <div className='circle-wrapper'>
        <div
          style={styles}
          className='circle'></div>
      </div>
    )
  }
}
