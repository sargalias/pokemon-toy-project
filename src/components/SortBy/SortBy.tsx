import { StatNames } from '@/Pokemon.model';
import { ChangeEvent } from 'react';

type SortByProps = {
  selectedStatSortOption: StatNames[number] | '';
  setSelectedStatSortOption: (x: StatNames[number] | '') => void;
};

const SortBy = ({
  selectedStatSortOption,
  setSelectedStatSortOption,
}: SortByProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as StatNames[number] | '';
    setSelectedStatSortOption(value);
  };

  return (
    <div className="SortBy">
      <label htmlFor="">
        Sort by stat:{' '}
        <select onChange={handleOnChange} value={selectedStatSortOption}>
          <option value=""></option>
          <option value="hp">HP</option>
          <option value="attack">Attack</option>
          <option value="defense">Defense</option>
          <option value="special-attack">Special Attack</option>
          <option value="special-defense">Special Defense</option>
          <option value="speed">Speed</option>
        </select>
      </label>
    </div>
  );
};

export default SortBy;
