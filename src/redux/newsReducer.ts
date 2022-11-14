import { Reducer } from "redux";
import { GET_NEWS, GET_NEW, SET_IS_LOADING } from "../helpers/constants";
import { IItem } from "../helpers/interfaces";

export interface IAction {
  type: string;
  newNewsId: number[];
  newData: IItem[];
  isLoading: boolean;
}

export interface IState {
  newNewsId: number[];
  newData: IItem[];
  isLoading: boolean;
}
const initialState: IState = {
  newNewsId: [],
  newData: [],
  isLoading: false,
};

const newsReducer: Reducer<IState, IAction> = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, newNewsId: action.newNewsId };
    case GET_NEW:
      return {
        ...state,
        newData: action.newData,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export const getNewsAC = (newNewsId: number[]) => {
  return { type: GET_NEWS, newNewsId };
};

export const getNewAC = (newData: IItem) => {
  return { type: GET_NEWS, newData };
};

export const setIsLoading = (isLoading: boolean) => {
  return { type: SET_IS_LOADING, isLoading };
};

export default newsReducer;
