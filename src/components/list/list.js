import { useContext } from 'react';
import Goal from './goal.js'
import { Context } from '../../services/memory.js';

function List() {
    const [state, dispatch] = useContext(Context);
    return (  
       state.order.map(id => <Goal key={id} {...state.objects[id]}></Goal>)
    );
}

export default List;