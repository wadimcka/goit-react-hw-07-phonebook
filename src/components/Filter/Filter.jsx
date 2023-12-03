import React from 'react';
import { FilterInput, FilterInputLabel, FilterWrap } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handlChange = event => {
    dispatch(selectFilter(event.target.value));
  };

  return (
    <FilterWrap>
      <FilterInputLabel htmlFor="">Find contacts by name</FilterInputLabel>
      <FilterInput type="text" value={filter} onChange={handlChange} />
    </FilterWrap>
  );
}

export default Filter;
