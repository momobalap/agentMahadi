import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

const SearchBar = () => {
  return (
    <div className="relative flex-1 mr-4">
      <Input
        type="text"
        placeholder="Search agents or categories"
        className="pl-10 pr-4 py-2 rounded-full"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBar;