import RegisterForm from '../components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <>
      <Helmet>Registration</Helmet>
      <RegisterForm />
    </>
  );
};

export default Register;
