import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search GitHub users..."
        onChange={handleChange}
        className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
