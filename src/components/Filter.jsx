import { FilterInput } from './Styles.module';
const Filter = ({ filter, onChange }) => {
  return (
    <FilterInput
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;
