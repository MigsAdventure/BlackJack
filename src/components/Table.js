import React ,{Component} from 'react';
import Dealer from './Dealer'
import Player from './Player'
import CardsStore from '../stores/CardsStore'
import CardActions from '../actions/CardActions'

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      player: CardsStore.getGame('player'),
      playerPoints: CardsStore.getGame('points'),
      dealerPoints: '',
      cardsInDeck: ''
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount () {
    CardsStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    CardsStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      player: CardsStore.getGame('player')
    })
  }

  start() {
    CardActions.start();
  }


  hitMe() {
    CardActions.hit();
  }

  stand() {
    CardActions.stand();
  }

  reset () {
    CardActions.reset();
  }



  render() {
    console.log(this.state.playerPoints);
    return (
      <div>
        <h1 id="title">BlackJack</h1>
        <table className="table" id="tableContainer">
          <tbody >
            <tr className="row" id="playerContainer">
              <td className='col-xs-4' id='player'><Player/></td>
               <td className="col-xs-2" id="startBtnContainer">
                <button className="btn btn-primary btn-lg" onClick={this.start}>Start</button>
              </td>
              <td className="col-xs-2" id="resetBtnContainer">
                <button className="btn btn-danger btn-lg" onClick={this.reset}>Reset</button>
              </td>
              <td className="col-xs-4" id='dealer'><Dealer/></td>
            </tr>
            <tr className="row" id="buttonContainer">
              <td className="col-xs-4"></td>
              <td  className='text-center col-xs-2'>
                <button className="btn btn-primary btn-lg" onClick={this.hitMe}>Hit</button>
              </td>
              <td className='text-center col-xs-2'>
                <button className="btn btn-success btn-lg" onClick={this.stand}>Stand</button>
              </td>
            </tr>
          </tbody>
        </table>
        
        
      </div>
      )
  } //end of render
} //end of class

