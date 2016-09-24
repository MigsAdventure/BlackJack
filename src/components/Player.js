import React, {Component} from 'react';

export default class Player extends Component {
  render() {
    return (
      <div>
        <h1>Player</h1>
        <table id="playerHandTable">
          <tbody>
            <tr className='row' id="playerCardContainer">
          <td id="player" className="text-center"><img src="http://byhandinvitations.com/wp-content/uploads/2012/02/POKER-CARD-BACK.jpg" alt=""/></td>
          <td id="player" className='text-center'><img src="http://byhandinvitations.com/wp-content/uploads/2012/02/POKER-CARD-BACK.jpg" alt=""/></td>
        </tr>
          </tbody>
        </table>
      </div>
    )
    
  } //end of render
} //end of class