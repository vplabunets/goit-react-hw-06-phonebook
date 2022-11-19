import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.Styled';

export const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
