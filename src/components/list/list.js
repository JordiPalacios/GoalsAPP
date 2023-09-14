import { useContext } from 'react';
import Goal from './goal.js'
import { Context } from '../../services/memory.js';

function List() {
    const goals = useContext(Context);
    return (  
       goals.map(goal => <Goal key={goal.id} {...goal}></Goal>)
    );
}

export default List;