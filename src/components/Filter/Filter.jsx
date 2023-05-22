import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({ filterInputId, handleChange, filter }) => {
  return (
    <div className={css.filterBox}>
      <label htmlFor={filterInputId} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="tel"
        name="filter"
        id={filterInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.input}
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  filterInputId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
