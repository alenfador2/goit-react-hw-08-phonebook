import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuthHook';
import { logOut } from '../../redux/auth/operations';
import { Button, Box } from '@mui/material';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box className={css.usermenu_box}>
      <h2 className={css.heading}>
        Welcome,
        <br /> <span className={css.username}>{user.name} !</span>
      </h2>
      <Button
        variant="outlined"
        className={css.user_menu_button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
