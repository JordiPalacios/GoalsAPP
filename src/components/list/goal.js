import { Link } from 'react-router-dom';
import styles from './goal.module.css';

function Goal({id, icon,events, period, details, goal, completed}) {
    
    return ( 
        <Link to={`/list/${id}`} className={styles.goal + " card"}>
            <div className='flex items-center'>
                <div className={styles.icon}>{icon}</div>
                <p className='text-xl ml-5 mr-10'>{events}
                    <sub className='text-xs text-gray-500 ml-1'>/{period}</sub>
                </p>
                <p>{details}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>
                        {completed} of {goal}
                    </p>
                    {/* It's the complete bar with gray bg */}
                    <div className={styles.barBg}>
                        {/* It's the progress bar */}
                        <div style={{width: `${Math.round((completed/goal) * 100)}%`}} 
                        className={styles.barProg}></div>
                    </div>
                </div>
                <button className='button button--gray'>Complete!</button>
            </div>
        </Link>
     );
}

export default Goal;