import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuthHook';
import { logOut } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <h2 className={css.heading}>Welcome, {user.name}!</h2>
      <button
        className={css.user_menu_button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
