import css from './RegisterForm.module.css';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          id="name-input"
          label="Please enter your name"
          variant="outlined"
          name="name"
          type="text"
        />
        <TextField
          id="email-input"
          label="Please enter your email"
          variant="outlined"
          name="email"
          type="email"
        />
        <TextField
          id="password-input"
          label="Please enter your password"
          variant="outlined"
          name="password"
          type="password"
        />
        <Button variant="contained" type="submit">
          Contained
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
