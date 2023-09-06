import './header.css';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Profile } from '../img/profile.svg';

export function Header () {
    return (
        <div className= "header">
            <div className="container" >
                <Logo className="logo"/>
                <a href="/" className='tittle'>Metas App</a>
            </div>
            <nav>
                <a href="/profile" className="vincle">
                    <Profile className="icon"/>
                </a>
            </nav>
        </div>
    );
}