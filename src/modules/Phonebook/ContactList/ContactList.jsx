import PropTypes from 'prop-types';

// import ContactListItem from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleted }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>Name: {name}</span>
            <span>Phone: {number}</span>
            <button onClick={() => deleted(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleted: PropTypes.func.isRequired,
};
