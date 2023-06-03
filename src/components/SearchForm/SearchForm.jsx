import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({setRegion}) => {
  const [query, setQuery] = useState('');

  const handleChangeInput = (event) => {
    setQuery(event.target.value);
  }
  
  const handleSumbit = (event) => {
    event.preventDefault();

    setRegion(query);
  }
    return (
    <SearchFormStyled onSubmit={handleSumbit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
        <Select aria-label="select" name="region" onChange={ handleChangeInput} required>
        <option disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
