import { createContext, useReducer } from "react";

const listMock = [
    {
        "id":"1",
        "details":"Practice 30' Frontend Coding",
        "period":"day",
        "events":1,
        "icon":"👨‍💻",
        "goal":161,
        "deadline":"2024-01-01",
        "completed":1
    },
    {
        "id":"2",
        "details":"Listen 10' Entrepreneur Podcasts",
        "period":"day",
        "events":1,
        "icon":"🎧",
        "goal":161,
        "deadline":"2024-01-01",
        "completed":1
    },
    {
        "id":"3",
        "details":"Upload Drone Reels",
        "period":"month",
        "events":10,
        "icon":"🚀",
        "goal":40,
        "deadline":"2024-01-01",
        "completed":0
    }

];

const initState = {
    order: [],
    objects: {}
};

export const Context = createContext(null);

function Memory( {children} ) {
    const [state, dispatch] = useReducer(reducer, initState);
    return ( 
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
     );
}

export default Memory;