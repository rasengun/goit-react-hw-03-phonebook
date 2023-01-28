import PropTypes from 'prop-types';

import s from './contactform.module.css';

export const ContactForm = ({ onHandleSubmit }) => {
  let userData = {
    name: '',
    number: '',
  };

  const resetForm = e => {
    e.currentTarget.elements.name.value = '';
    e.currentTarget.elements.number.value = '';
  };

  const onChangingInput = e => {
    userData[e.currentTarget.name] = e.currentTarget.value;
  };

  return (
    <form
      className={s.contact}
      onSubmit={e => {
        e.preventDefault();
        onHandleSubmit(userData);
        resetForm(e);
      }}
    >
      <label>
        Name
        <input
          onChange={onChangingInput}
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          onChange={onChangingInput}
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
