
import { NavLink, Outlet } from 'react-router-dom'
import './NavbarComponent.css'
import logo from '../../assets/logo.png'

export const NavbarComponent = () => {


    return(
        <>
            <nav className="NavbarComponent">
                <div className="NavbarComponent__img">
                    <NavLink to=''><img src={logo} alt='logo'/></NavLink>
                </div>
                <div className="NavbarComponent__content">
                    <ul className="NavbarComponent__content__list">
                        <NavLink to='/episodes' className="NavbarComponent__content__list__item">Episodes</NavLink>
                        <NavLink to='/newcharacter' className="NavbarComponent__content__list__item">Add Character</NavLink>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}