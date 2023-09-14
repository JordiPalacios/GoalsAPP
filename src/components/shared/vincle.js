import styles from  './vincle.module.css';
import { Link } from 'react-router-dom';
 
export default function Vincle ({Icon, text, to}) {
    return (
        <Link to={to} className={styles.vincle}>
            <Icon className={styles.icon} />
            { text && <span className={styles.text}>{text}</span> }
        </Link>
    );
}