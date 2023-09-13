import styles from "../new/details.module.css";

function Details() {
    const frequency = ["day", "week", "month", "year"];
    const emojis = ["👨‍💻", "🏋️‍♂️", "💻", "📌", "🚁", "🎥", "🎶", "🏃‍♂️", "📚", "🍏", "🤑"];

    return ( 
        <div className="card">
            <form className="p-4">
                <label className="label">
                    DESCRIBE YOUR GOAL
                    <input className="input" placeholder="e.g 33 Books"/>
                </label>
                <label className="label">
                    GOAL FREQUENCY <span>(e.g 1 time a week)</span>
                    <div className="flex mb-6">
                        <input 
                            className="input mr-6" 
                            type="number" />
                        <select className="input">
                            {frequency.map(option => <option value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>            
                <label className="label">
                    TIMES TO COMPLETE GOAL
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    DEADLINE
                    <input className="input" type="date" />
                </label>
                <label className="label">
                    TIMES YOU REACH THE GOAL
                    <input className="input" type="number" />
                </label>
                <label className="label">
                    CHOOSE A EMOJI FOR YOUR GOAL
                    <select className="input">
                        {emojis.map(emoji => <option value={emoji}>{emoji}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                <button className="button button--black">Create</button>
                <button className="button button--gray">Cancel</button>
            </div>
        </div>
     );
}

export default Details;