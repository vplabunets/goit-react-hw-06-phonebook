import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import phoneData from '../components/constants/phonedata.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: phoneData, filter: '' },
  reducers: {
    addContacts: {
      reducer({ contacts }, action) {
        contacts.push(action.payload);
      },
      prepare(name, number) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact({ contacts }, action) {
      const index = contacts.findIndex(
        contact => contact.id === action.payload
      );
      contacts.splice(index, 1);
    },
    filterContacts(state, action) {
      let filteredContacts = state.filter(contact =>
        contact.name.toLowerCase().includes(action.payload)
      );
      return filteredContacts;
    },
  },
});

export const { addContacts, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// console.log(contactsSlice.reducer());
