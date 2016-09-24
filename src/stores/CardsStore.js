import AppDispatcher from '../AppDispatcher';
import {EventEmitter} from 'events';
import Deck from '../components/Deck';

let _player = [];
let _dealer = [];
let _deck = Deck;

class CardsStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {

    }) //end of appDispatcher register
  } //end of constructor
} //end of class

