const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;
const reduxThunk = require("redux-thunk").default;
const axios = require("axios");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";

//action creators
const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

const initialState = () => {
  return {
    loading: false,
    data: [],
    error: "",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_FAILURE:
      return { data: [], loading: false, error: action.payload };
    case FETCH_USER_SUCCESS:
      return { error: "", loading: false, data: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleWare(reduxThunk, logger));

//async action creator
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const userId = res.data.map((u) => u.id);
        dispatch(fetchUserSuccess(userId));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
};

store.dispatch(fetchUsers());
