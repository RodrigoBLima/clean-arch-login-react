import type User from "../domain/userEntity";
import { getUser } from "./userService";
import * as actionTypes from "./userActionTypes";

const setUserAction = (user: User) => (dispatch: any) =>
  dispatch({ type: actionTypes.SET_USER, user });

const getUserAction = () => (dispatch: any) => {
  dispatch({ type: actionTypes.GET_USER });

  return getUser().then((user: User) => {
    dispatch({ type: actionTypes.GET_USER_SUCCESS, user });

    return user;
  });
};

export { setUserAction, getUserAction };
