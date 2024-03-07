import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuthHook';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.navlink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.navlink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
