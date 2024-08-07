import { useEffect, useReducer } from "react";
import commentAPI from "../api/comments-api";

export function useCreateComment() {
    const commentCreateHandler = (companyId, comment) =>
        commentAPI.create(companyId, comment);

    return commentCreateHandler;
}

function commentsReducer(state, action) {
    
    switch (action.type) {
        case "GET_ALL":                         // if type actions is GET_ALL
            return action.payload.slice();      // set shallow copy of the array if the state (result) edited
        case 'ADD_COMMENT':                     // if type actions is ADD_COMMENT
            return [...state, action.payload];  // add new comment to the state array

        default:                            
            return state;                       // default return the current state
    }       
}

export function useGetAllComments(companyId) {
    const [comments, dispatch] = useReducer(commentsReducer, []); //  useReducer receive a reducer function and initial state

    useEffect(() => {
        (async () => {
            const result = await commentAPI.getAll(companyId);

            dispatch({ type: "GET_ALL", payload: result });         // set dispatch function
        })();
    }, [companyId]);

    return [comments, dispatch];
}