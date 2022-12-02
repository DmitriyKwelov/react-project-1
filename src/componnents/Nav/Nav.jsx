import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={(navData) => navData.isActive ? `${s.activeLink}` : "" }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={(navData) => navData.isActive ? `${s.activeLink}` : "" }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={(navData) => navData.isActive ? `${s.activeLink}` : "" }>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;