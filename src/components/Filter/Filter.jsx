import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css'

const Filter = ({handleChange, filter }) => {
  const filterInputId = nanoid();

  return (
    <div className={css.filterBox}>
      <label htmlFor={filterInputId} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="tel"
        name="filter"
        id={filterInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.input}
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
