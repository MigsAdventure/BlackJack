import React, {Component} from 'react';
import CardsStore from '../stores/CardsStore';
import uuid from 'uuid';

export default class Dealer extends Component {
  constructor() {
    super();
    this.state = {
      dealCards: CardsStore.getGame('dealer'),
      stand: CardsStore.getGame('stand')
    }
    this._onChange = this._onChange.bind(this);
  }
 
  componentDidMount() {
    CardsStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    CardsStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      dealCards: CardsStore.getGame('dealer'),
      stand: CardsStore.getGame('stand')
    });
  }

  render() {
    const {dealCards, stand} = this.state;
    let backFace = "http://images.penguinmagic.com/images/products/original/8006b.jpg";
      return (
        <div>
          <h1>Dealer: {stand}</h1>
          <table id="dealerHandTable">
            <tbody>
              <tr className='row' id="dealerCardContainer">
            { dealCards.map((card, i) => {
              for (var key in card) {
                var img = card[key];
              }
              if (i !== 0) {
                return <td id={`deal${i}`} key={i}><img  className="dealerCards" src={`http://drive.google.com/uc?export=view&id=${img}`} alt=""/></td> 
              } else {
                return <td id={`deal${i}`} key={i}><img id="backFace" className="dealerCards" src={backFace} alt={`http://drive.google.com/uc?export=view&id=${img}`}/></td> 
              }
            }
              
            )}
          </tr>
            </tbody>
          </table>
          
        </div>
      )
    }
  } //end of render
