import { createContext, useReducer } from "react";

// const memory = localStorage.getItem('goals');

const initState = {
    order: [],
    objects: {}
};


// const initState = memory
//     ?JSON.parse(memory)
//     : {
//         order: [],
//         objects: {}
//     };

function reducer(state, action) {
    switch(action.type) {
        case 'colocate' : {
            const goals = action.goals;
            if (!Array.isArray(goals)) {
                return state; // or handle the error appropriately
              }
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({...object, [goal.id] : goal}), {})
            };
            // localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        };
        case 'create' : {
            //Creamos una id random simulando que el back nos da una id en concreto
            const id = action.goal.id; //String(Math.random());
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                }
            };
            // localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        };
        case 'update' : {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            };
            const newState = {...state};
            // localStorage.setItem('goals', JSON.stringify(newState))
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
            // localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        };
        default:
            throw new Error();
    }

}

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