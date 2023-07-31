import { combineReducers } from "redux";

import SubscribeReducer from "slices/subscribe";

const rootReducer = combineReducers({
    SubscribeReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer