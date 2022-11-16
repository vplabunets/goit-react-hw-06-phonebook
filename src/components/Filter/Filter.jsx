import PropTypes from 'prop-types';
import { FormInput, FormLabel } from '../Filter/Filter.styled';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <FormLabel>
      Find contacts by name
      <FormInput
        value={filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={changeFilter}
      />
    </FormLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
