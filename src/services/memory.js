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

function reducer(state, action) {
    switch(action.type) {
        case 'colocate' : {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({...object, [goal.id] : goal}), {})
            };
            return newState;
        };
        case 'create' : {
            //Creamos una id random simulando que el back nos da una id en concreto
            const id = Math.random();
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                }
            };
            return newState;
        };
        case 'update' : {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            };
            const newState = {...state};
            return newState;
        };
        case 'deleteGoal' : {
            const id = action.id;
            const newOrder = state.order.filter(item => item != id);
            delete state.objects[id];
            const newState = {
                order: newOrder,
                objects: state.objects
            };
            return newState;
        };
    }

}

const goals = reducer(initState, {type: 'colocate', goals:listMock});

export const Context = createContext(null);

function Memory( {children} ) {
    const [state, dispatch] = useReducer(reducer, goals);
    return ( 
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
     );
}

export default Memory;