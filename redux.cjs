//initialize redux
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//middleWare
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger(); //to log all the dispatches
const applyMiddleWare = redux.applyMiddleware;

//actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecreams: 14,
};

//reducers
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIcecreams: state.numOfIcecreams - 1 };
    default:
      return state;
  }
};

const reducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(reducer, applyMiddleWare(logger));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
