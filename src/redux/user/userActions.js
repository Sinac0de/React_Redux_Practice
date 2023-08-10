import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const fetchUsersReq = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersReq());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const usersId = res.data.map((u) => u.id);
        dispatch(fetchUsersSuccess(usersId));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};
