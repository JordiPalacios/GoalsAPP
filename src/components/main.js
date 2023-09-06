import '../components/main.css';
import { ReactComponent as List } from '../img/lista.svg';
import { ReactComponent as New } from '../img/nueva.svg';
import Vincle from './vincle';


export function Main ({children}) {
    return (
        <div className='mainPage'>
            <aside className='aside'>
                <Vincle href="/lista" text="Lista">
                    <List />
                </Vincle>
                <Vincle href="/create" text="Crear">
                    <New />
                </Vincle>
            </aside>
            <main className='mainContent'>
                {children}
            </main>
        </div>
    );
}