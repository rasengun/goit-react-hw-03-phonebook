import PropTypes from 'prop-types';

import s from './contactlistitem.module.css';

export const ContactListItem = ({ nameId, name, number, deleting }) => {
  return (
    <li className={s.items}>
      <span>Name: {name}</span>
      <span>Phone: {number}</span>
      <button
        className={s.button}
        onClick={() => deleting(nameId)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  nameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleting: PropTypes.func.isRequired,
};
