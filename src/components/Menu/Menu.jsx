import { useAuth } from '../../hooks/useAuthHook';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import css from './Menu.module.css';

const Menu = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.menu_div}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default Menu;
