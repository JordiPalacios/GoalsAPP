import { Children, createContext } from "react";

export const Context = createContext(null);

function Memory( {children} ) {
    return ( 
        <Context.Provider value={'shared'}>
            {children}
        </Context.Provider>
     );
}

export default Memory;