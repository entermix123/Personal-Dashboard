import { useState } from "react";

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedAuth = localStorage.getItem(key);            // create  var for local storage data

        if (!persistedAuth || persistedAuth === '') {
            // check if data exists in local storage
            return typeof initialState === "function"               // check if initial state is a function
                ? initialState()                                    // call the initial state function
                : initialState;                                     // else return initial state as received
        }
        
        const authData = JSON.parse(persistedAuth); // parse data from local storage

        return authData; // return parsed data from local storage
    });

    // create custom hook to handle state persistence
    const updateState = (value) => {
        const newState =
            typeof value === "function"             // check if value is a function
                ? value(state)                      // if function call it with current state
                : value;                            // if not a function, use the value directly

        if (newState === null || newState === undefined) {          // if steate is null or undefined
            localStorage.removeItem(key);                           // remove from local storage
        } else {
            localStorage.setItem(key, JSON.stringify(newState));    // update local storage
        }

        setState(newState);                                         // update state
    };

    return [state, updateState];
}