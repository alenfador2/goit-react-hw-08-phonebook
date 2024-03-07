import css from './LoginForm.module.css';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField
          id="email-input"
          label="Please enter your email"
          variant="outlined"
          name="email"
        />
        <TextField
          id="password-input"
          label="Please enter your password"
          variant="outlined"
          name="password"
        />
        <Button variant="contained" type="submit" className={css.login_button}>
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
