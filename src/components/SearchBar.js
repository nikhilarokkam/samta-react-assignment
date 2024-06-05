import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(term);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        type="text"
        value={term}
        onChange={handleChange}
        placeholder="Search users by name"
        fullWidth
        autoComplete='off'
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">Search</Button>
    </Box>
  );
};

export default SearchBar;
