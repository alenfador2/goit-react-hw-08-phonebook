import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>Contacts</Helmet>;
      <div>
        <img
          src="https://cdn.dribbble.com/users/2705839/screenshots/6536846/contact-us.jpg?resize=800x600&vertical=center"
          alt="Phonebook"
        />
        <h1>Welcome to Phonebook</h1>
      </div>
    </>
  );
};

export default Home;
