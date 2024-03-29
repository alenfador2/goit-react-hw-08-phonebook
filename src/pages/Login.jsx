import { Helmet } from 'react-helmet';
import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Authentication</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
