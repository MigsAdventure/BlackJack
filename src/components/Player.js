import React, {Component} from 'react';
import CardsStore from '../stores/CardsStore';
import uuid from 'uuid';

export default class Player extends Component {
  constructor() {
    super();
    this.state = {
      playerCards: CardsStore.getGame('player'),
      points: CardsStore.getGame('points')
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    CardsStore.startListening(this._onChange);
  }
    
  componentWillUnmount() {
    CardsStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState ({
      playerCards: CardsStore.getGame('player'),
      points: CardsStore.getGame('points')
    });
  }

  render() {
    let {playerCards, points} = this.state;
    return (
      <div>
        <h1>Player: {points} </h1>
        <table id="playerHandTable">
          <tbody>
            <tr className='row' id="playerCardContainer">

              {
                 playerCards.map((card,i) => {
                  for (var key in card){
    
                    var img = card[key]
                  }
                  return <td id={`card${i}`} key={i} >
                          <img  className="playerCards" src={`http://drive.google.com/uc?export=view&id=${img}`} alt=""/>
                         </td>
              }
                
              
              //end of first map
                 //end of secondmap
                )//end of return
              }
        </tr>
          </tbody>
        </table>
      </div>
    )
  } //end of render

}//end of class


