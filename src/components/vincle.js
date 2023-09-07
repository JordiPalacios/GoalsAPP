import styles from  './vincle.module.css';

export default function Vincle ({Icon, text, href}) {
    return (
        <a href={href} className={styles.vincle}>
            <Icon className={styles.icon} />
            { text && <span className={styles.text}>{text}</span> }
        </a>
    );
}