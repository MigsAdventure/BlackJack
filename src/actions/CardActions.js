import AppDispatcher from '../AppDispatcher';

const CardActions = {
  hit(card) {
    AppDispatcher.dispatch({
      type: 'HIT'
    })
    
  },

  stand(skip) {
    AppDispatcher.dispatch({
      type: 'STAND'
    })
  
  },

  reset(reset) {
    AppDispatcher.dispatch({
      type: 'RESET'
    })
  },

  start(start) {
    AppDispatcher.dispatch({
      type: 'START'
    })
  },

  dealer(dealer) {
    AppDispatcher.dispatch({
      type: 'DEALER'
    })
  }
}

export default CardActions;