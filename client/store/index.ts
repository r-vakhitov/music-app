import {createStore} from "redux";
import {Context, createWrapper} from "next-redux-wrapper";
import {rootReducer, RootState} from "./reducers";

const makeStore = (context: Context) => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});