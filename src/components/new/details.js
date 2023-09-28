import { useEffect, useState, useContext } from "react";
import styles from "../new/details.module.css";
import { Context } from "../../services/memory";
import { useNavigate, useParams } from "react-router-dom";
import { createGoals, updateGoals } from "../../services/requests";


function Details() {
    const { id } = useParams();

    const [form, setForm] = useState({
        details: '',
        events: 1,
        period: 'week',
        icon: '🏋️‍♂️',
        goal: 33,
        deadline: '20240101'
    });

    const [state, dispatch] = useContext(Context);
    
    const {details, events, period, icon, goal, deadline, completed} = form;

    const onChagne = (event, prop) => {
        setForm(state => ({...state, [prop]:event.target.value}));
    }

    const navegate = useNavigate();

    const goalMemory = state.objects[id];

    useEffect(() => {
        
        if (!id) return;
        if (!goalMemory) {
            return navegate('/404');
        }
        setForm(goalMemory);
    }, [id, goalMemory, navegate]);

    const create = async () => {
        const newGoal = await createGoals()
        dispatch({type: 'create', goal: newGoal});
        navegate('/list');
    }

    const update = async () => {
        const updateGoal = await updateGoals();
        dispatch({type: 'update', goal: updateGoal});
        navegate('/list');
    }

    const deleteGoal = async () => {
        const idDeleted = await deleteGoal();
        dispatch({type: 'deleteGoal', id: idDeleted});
        navegate('/list');
    }

    const cancel = () => {
        navegate('/list');
    }

    const frequency = ["day", "week", "month", "year"];
    const emojis = ["👨‍💻", "🏋️‍♂️", "💻", "📌", "🚁", "🎥", "🎶", "🏃‍♂️", "📚", "🍏", "🤑", "🚀", "🎧" ];

    return ( 
        <div className="card">
            <form className="p-4">
                <label className="label">
                    DESCRIBE YOUR GOAL
                    <input 
                    className="input" 
                    placeholder="e.g 33 Books"
                    value={details}
                    onChange={e => onChagne(e, 'details')}
                    />
                </label>
                <label className="label">
                    GOAL FREQUENCY <span>(e.g 1 time a week)</span>
                    <div className="flex mb-6">
                        <input 
                            className="input mr-6" 
                            type="number" 
                            value={events}
                            onChange={e => onChagne(e, 'events')}
                            />
                        <select 
                            className="input"
                            value={period}
                            onChange={e => onChagne(e, 'period')}>
                                {frequency.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>            
                <label className="label">
                    TIMES TO COMPLETE GOAL
                    <input 
                    className="input" 
                    type="number" 
                    value={goal}
                    onChange={e => onChagne(e, 'goal')}
                    />
                </label>
                <label className="label">
                    DEADLINE
                    <input 
                    className="input" 
                    type="date" 
                    value={deadline}
                    onChange={e => onChagne(e, 'deadline')}
                    />
                </label>
                <label className="label">
                    TIMES YOU REACH THE GOAL
                    <input 
                    className="input" 
                    type="number"
                    value={completed}
                    onChange={e => onChagne(e, 'completed')} 
                    />
                </label>
                <label className="label">
                    CHOOSE A EMOJI FOR YOUR GOAL
                    <select 
                        className="input"
                        value={icon}
                        onChange={e => onChagne(e, 'icon')} >
                            {emojis.map(emoji => <option key={emoji} value={emoji}>{emoji}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                {!id && <button 
                    className="button button--black"
                    onClick={create}
                >Create</button>}
                {id && <button 
                    className="button button--black"
                    onClick={update}
                >Update</button>}
                {id && <button 
                    className="button button--red"
                    onClick={deleteGoal}
                >Delete</button>}
                <button 
                    className="button button--gray"
                    onClick={cancel}
                >Cancel</button>
            </div>
        </div>
     );
}

export default Details;