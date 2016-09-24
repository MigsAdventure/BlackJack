import React, {Component} from 'react';

export default class Dealer extends Component {
  render() {
    return (
      <div>
        <h1>Dealer</h1>
        <table id="dealerHandTable">
          <tbody>
            <tr className='row' id="dealerCardContainer">
          <td id="dealerHide"><img src="http://byhandinvitations.com/wp-content/uploads/2012/02/POKER-CARD-BACK.jpg" alt=""/></td>
          <td id="dealerShow"><img src="http://byhandinvitations.com/wp-content/uploads/2012/02/POKER-CARD-BACK.jpg" alt=""/></td>
        </tr>
          </tbody>
        </table>
        
      </div>
    )
  }
}