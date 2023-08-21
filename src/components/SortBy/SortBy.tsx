import { StatNames } from '@/Pokemon.model';
import { ChangeEvent } from 'react';

type SortByProps = {
  selectedStatSortOption: StatNames[number] | '';
  setSelectedStatSortOption: (x: StatNames[number] | '') => void;
  selectedOrderSortOption: '' | 'asc' | 'desc';
  setSelectedOrderSortOption: (x: '' | 'asc' | 'desc') => void;
};

const SortBy = ({
  selectedStatSortOption,
  setSelectedStatSortOption,
  selectedOrderSortOption,
  setSelectedOrderSortOption,
}: SortByProps) => {
  const handleOnChangeStat = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as StatNames[number] | '';
    setSelectedStatSortOption(value);
  };
  const handleOnChangeOrder = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as '' | 'asc' | 'desc';
    setSelectedOrderSortOption(value);
  };

  return (
    <div className="SortBy">
      <label htmlFor="">
        Sort by stat:{' '}
        <select onChange={handleOnChangeStat} value={selectedStatSortOption}>
          <option value=""></option>
          <option value="hp">HP</option>
          <option value="attack">Attack</option>
          <option value="defense">Defense</option>
          <option value="special-attack">Special Attack</option>
          <option value="special-defense">Special Defense</option>
          <option value="speed">Speed</option>
        </select>
      </label>
      <label htmlFor="">
        Order:{' '}
        <select onChange={handleOnChangeOrder} value={selectedOrderSortOption}>
          <option value=""></option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
};

export default SortBy;
