import { AnyAction } from "redux";
import { createSlice } from "@reduxjs/toolkit";

interface SubscribeInterface {
    email?: string;
    step?: number;
}

export const initialState: SubscribeInterface = {
    email: '',
    step: 1
}

const Subscribe = createSlice({
    name: 'Subscribe',
    initialState,
    reducers: {
        mutSetSubscription: (state: SubscribeInterface, action: AnyAction) => {
            return {
                ...state,
                step: action?.payload?.step,
                email: action?.payload?.email
            }
        },
        mutClearSubscription: () => {
            return initialState
        }
    }
})

const {
    mutSetSubscription,
    mutClearSubscription
} = Subscribe.actions

export const setSubscription = (data?: any) => {
    return (dispatch: Function) => {
        dispatch(mutSetSubscription(data))
    };
};

export const setClearSubscription = () => Subscribe.actions.mutClearSubscription();

export const actions = Subscribe.actions;

export default Subscribe.reducer;