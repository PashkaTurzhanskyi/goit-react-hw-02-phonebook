import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, filter, onDelete }) => (
  <List>
    {filter === ''
      ? contacts.map(item => (
          <ContactListItem
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
            onDeleteContact={onDelete}
          />
        ))
      : contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(item => (
            <ContactListItem
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
              onDeleteContact={onDelete}
            />
          ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
