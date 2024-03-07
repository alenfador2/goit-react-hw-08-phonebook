import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { findNumber } from '../../redux/filter/filtersSlice';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = event => {
    dispatch(findNumber(event.currentTarget.value));
  };
  return (
    <>
      <TextField
        label="Write name here"
        variant="outlined"
        type="text"
        id="filter"
        name="filter"
        onChange={onFilter}
        className={css.filter_input}
      />
    </>
  );
};

Filter.propTypes = {};

export default Filter;
