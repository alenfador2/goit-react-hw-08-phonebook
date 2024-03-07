import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <div className={css.nav}>
        <NavLink to="/register" className={css.navlinks}>
          Registration
        </NavLink>
        <NavLink to="/login" className={css.navlinks}>
          Login
        </NavLink>
      </div>
    </>
  );
};

export default AuthNav;
