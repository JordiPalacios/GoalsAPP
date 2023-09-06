import './header.css';
import { ReactComponent as LogoSVG } from '../img/logo.svg';
import { ReactComponent as ProfileSVG } from '../img/profile.svg';

export function Header () {
    return (
        <header className= "header">
            <div className="container" >
                <LogoSVG className="logo"/>
                <a href="/" className='tittle'>Metas App</a>
            </div>
            <nav>
                <a href="/profile" className="vincle">
                    <ProfileSVG className="icon"/>
                </a>
            </nav>
        </header>
    );
}