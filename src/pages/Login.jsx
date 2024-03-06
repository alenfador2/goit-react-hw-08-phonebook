import { Helmet } from 'react-helmet';
import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <>
      <Helmet>Authentication</Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
