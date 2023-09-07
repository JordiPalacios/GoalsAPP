import styles from './header.module.css';
import { ReactComponent as LogoSVG } from '../../img/logo.svg';
import { ReactComponent as ProfileSVG } from '../../img/profile.svg';
import Vincle from './vincle.js';

export function Header () {
    return (
        <header className= {styles.header} >
            <div className= {styles.container} >
                <LogoSVG className= {styles.logo} />
                <a href="/" className= {styles.tittle} >Goals App</a>
            </div>
            <nav>
                <Vincle 
                    href="/profile" 
                    Icon={ProfileSVG} />
            </nav>
        </header>
    );
}