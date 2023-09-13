import { useEffect, useState } from "react";
import styles from "../new/details.module.css";

function Details() {

    const [form, setForm] = useState({
        details: '',
        events: 1,
        period: 'week',
        icon: '🏋️‍♂️',
        goal: 33,
        deadline: '20240101'
    });
    
    const {details, events, period, icon, goal, deadline, completed} = form;

    const onChagne = (event, prop) => {
        setForm(state => ({...state, [prop]:event.target.value}));
    }

    useEffect(() => {
        // console.log(form);
    }, [form])

    const create = async () => {
        console.log(form);
    }

    const frequency = ["day", "week", "month", "year"];
    const emojis = ["👨‍💻", "🏋️‍♂️", "💻", "📌", "🚁", "🎥", "🎶", "🏃‍♂️", "📚", "🍏", "🤑"];

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
                                {frequency.map(option => <option value={option}>{option}</option>)}
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
                            {emojis.map(emoji => <option value={emoji}>{emoji}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                <button 
                className="button button--black"
                onClick={create}
                >Create</button>
                <button className="button button--gray">Cancel</button>
            </div>
        </div>
     );
}

export default Details;