import { Outlet } from 'react-router-dom';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { Main } from './main.js';

function Layout() {
    return ( 
        <>
            <Header></Header>
            <Main>
                <Outlet></Outlet>
            </Main>
            <Footer></Footer>
        </>
     );
}

export default Layout;