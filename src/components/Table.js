import React ,{Component} from 'react';
import Dealer from './Dealer'
import Player from './Player'

export default class Table extends Component {
  render() {
    return (
      <div>
        <h1 id="title">BlackJack</h1>
        <table className="table" id="tableContainer">
          <tbody >
            <tr className="row" id="playerContainer">
              <td className="col-xs-6" id='dealer'><Dealer/></td>
              <td className='col-xs-6' id='player'><Player/></td>
            </tr>
            <tr className="row" id="buttonContainer">
              <td className='text-right'>
                <button className="btn btn-primary btn-lg">Hit</button>
              </td>
              <td className='text-left'>
                <button className="btn btn-success btn-lg">Stand</button>
              </td>
            </tr>
          </tbody>
        </table>
        
        
      </div>
      )
  } //end of render
} //end of class

