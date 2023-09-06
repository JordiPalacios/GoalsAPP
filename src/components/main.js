import '../components/main.css';
import '../components/vincle.css';
import { ReactComponent as ListSVG } from '../img/lista.svg';
import { ReactComponent as NewSVG } from '../img/nueva.svg';
import Vincle from './vincle';


export function Main ({children}) {
    return (
        <div className='mainPage'>
            <aside className='aside'>
                <Vincle href="/lista" text="Lista de Metas">
                    <ListSVG className='icon'/>
                </Vincle>
                <Vincle href="/create" text="Crear Nuevas Meta">
                    <NewSVG className='icon'/>
                </Vincle>
            </aside>
            <main className='mainContent'>
                {children}
            </main>
        </div>
    );
}