// import { useDispatch } from 'react-redux';
import { FormInput, FormLabel } from '../Filter/Filter.styled';

// const changeFilter = event => {
//   setFilter(event.currentTarget.value);
// };

// const filterContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   let aaa = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
//   return aaa;
// };

export const Filter = () => {
  // const dispatch = useDispatch();
  const changeFilter = evt => {
    console.log(evt.currentTarget.value);
  };

  return (
    <FormLabel>
      Find contacts by name
      <FormInput
        // value={filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={changeFilter}
      />
    </FormLabel>
  );
};
