import { configureStore, Action, ThunkAction, AnyAction } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState as ReduxRootState } from './root-reducer';

const reducer: any = (state: ReduxRootState, action: AnyAction) => {
  // If the dispatched action is a HYDRATE action, merge the payload with the current state.
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }

    return nextState
  }

  // For all other actions, use the rootReducer to handle state updates.
  return rootReducer(state, action)
}

// Create a function to initialize the Redux store.
const makeStore = () => {
  // Define the thunk middleware for handling asynchronous actions in Redux.
  const thunk: ThunkMiddleware<ReduxRootState, Action> = thunkMiddleware;
  const middlewares = [thunk];

  // Configure the Redux store with the specified middleware, devTools, and reducer.
  const store = configureStore({
    middleware: middlewares,
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
  });
  return store;
};

// Define types for the Redux store, dispatch function, and app-level thunk actions.
type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<String>
>;

// Create a wrapper using next-redux-wrapper to handle server-side rendering (SSR).
export const wrapper = createWrapper(makeStore, { debug: true });