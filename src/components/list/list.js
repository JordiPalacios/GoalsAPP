import { useContext } from 'react';
import Goal from './goal.js'
import { Context } from '../../services/memory.js';
import { Outlet } from 'react-router-dom';

function List() {
    const [state] = useContext(Context);
    return (  
        <>
            {state.order.map(id => <Goal key={id} {...state.objects[id]}></Goal>)}
            <Outlet />
        </>
    );
}

export default List;