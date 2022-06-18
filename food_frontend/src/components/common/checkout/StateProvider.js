import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children})=>{
    <StateContext.Provider value={useContext(reducer, initialState)}>
        {children}
    </StateContext.Provider>
};

export const useStateVale = () => useContext(StateContext);
