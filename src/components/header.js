import './header.css';

import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Profile } from '../img/profile.svg';

export function Header () {
    return (
        <div className= "header">
            <div className="logo" >
                <Logo />
                <a href="/">Metas App</a>
            </div>
            <nav>
                <a href="/perfil" className="logo">
                    <Profile className="icon"/>
                </a>
            </nav>
        </div>
    );
}