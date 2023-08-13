'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

type SearchProps = {
  onSubmit: (x: string) => void;
};

const Search = ({ onSubmit }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <div className="Search">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Search by name:
          <input
            type="search"
            onChange={handleOnChange}
            value={searchTerm}
          />{' '}
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
