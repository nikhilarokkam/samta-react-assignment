// src/components/UserInfo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchBar from './SearchBar';
import PastSearches from './PastSearches';

const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [pastSearches, setPastSearches] = useState(JSON.parse(localStorage.getItem('pastSearches')) || []);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch(error => {
        setError('Error fetching user data');
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);

    if (!pastSearches.includes(term)) {
      const updatedPastSearches = [...pastSearches, term];
      setPastSearches(updatedPastSearches);
      localStorage.setItem('pastSearches', JSON.stringify(updatedPastSearches));
    }
  };

  const handleSort = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredUsers(sortedUsers);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>User Info</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <SearchBar onSearch={handleSearch} />
      <Button onClick={handleSort} variant="contained" sx={{ mb: 2 }}>Sort by Name</Button>
      <PastSearches pastSearches={pastSearches} onSearch={handleSearch} />
      {searchTerm ? (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>Search Results for "{searchTerm}"</Typography>
      ) : (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>User's List</Typography>
      )}
      {filteredUsers.map(user => (
        <Accordion key={user.id} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{user.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography><strong>Username:</strong> {user.username}</Typography>
            <Typography><strong>Email:</strong> {user.email}</Typography>
            <Typography><strong>Phone:</strong> {user.phone}</Typography>
            <Typography><strong>Website:</strong> {user.website}</Typography>
            <Typography><strong>Address:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</Typography>
            <Typography><strong>Company:</strong> {user.company.name}</Typography>
            <Typography><strong>Catch Phrase:</strong> {user.company.catchPhrase}</Typography>
            <Typography><strong>BS:</strong> {user.company.bs}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default UserInfo;
