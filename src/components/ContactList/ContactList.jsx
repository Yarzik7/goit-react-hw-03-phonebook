import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({ contacts, filter, handleDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            handleDeleteContact={handleDeleteContact}
            contactId={id}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDeleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default ContactList;
