import * as actions from "../actions";

export function balanceReducer(state = 0, action) {
  switch (action.type) {
    case actions.FETCH_BALANCE:
      return action.payload;
    case actions.ADD_BALANCE:
      return action.payload;
    default:
      return state;
  }
}

//Fix double cash add
