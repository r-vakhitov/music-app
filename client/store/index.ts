import {AnyAction, applyMiddleware, createStore} from "redux";
import {Context, createWrapper} from "next-redux-wrapper";
import {reducer, RootState} from "./reducers";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;