import styles from './main.module.css';
import { ReactComponent as ListSVG } from '../../img/lista.svg';
import { ReactComponent as NewSVG } from '../../img/nueva.svg';
import Vincle from './vincle';

export function Main ({children}) {
    return (
        <div className={styles.mainPage}>
            <aside className={styles.aside}>
                <Vincle 
                to="/list" 
                text="Lista de Metas"
                Icon={ListSVG} />

                <Vincle 
                to="/new" 
                text="Crear Nuevas Meta"
                Icon={NewSVG} />
            </aside>
            <main className={styles.mainContent} >
                {children}
            </main>
        </div>
    );
}