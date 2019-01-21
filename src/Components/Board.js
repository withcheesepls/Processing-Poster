import React from 'react';
import Circle from './Circle';
import '../Styles/Board.css';

export default class Board extends React.Component {
  makeBoard(l, w){
    let rows = [];
    for(let i = 0; i < l; i++){
      let column = [];
      for(let j = 0; j < w; j++){
        column.push(
          <Circle/>
        );
      }
      rows.push(
        <div className='row'>
          {column}
        </div>
      );
    }
    return rows;
  }
  render(){
    return(
      <div className='Board'>
        {this.makeBoard(this.props.width, this.props.length)}
      </div>
    )
  }
}
