import { Helmet } from 'react-helmet';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box className="home-container">
        <img
          className="home-img"
          src="https://cdn.dribbble.com/users/2705839/screenshots/6536846/contact-us.jpg?resize=800x600&vertical=center"
          alt="Phonebook"
        />
        <h1>Welcome to Phonebook</h1>
      </Box>
    </>
  );
};

export default Home;
