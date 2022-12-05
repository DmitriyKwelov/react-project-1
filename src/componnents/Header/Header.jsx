import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
}

export default Header;