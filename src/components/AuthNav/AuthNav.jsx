import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <div className={css.nav}>
        <NavLink to="/register">Registration</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
    </>
  );
};

export default AuthNav;
