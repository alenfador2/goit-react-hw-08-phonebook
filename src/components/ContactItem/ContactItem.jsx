import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';
import { Button, Box } from '@mui/material';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <>
      <Box className={css.span_container}>
        <span className={css.item_span}>{name}:</span>
        <span className={css.item_span}>{number}</span>
        <Button
          className={css.item_button}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
      </Box>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
