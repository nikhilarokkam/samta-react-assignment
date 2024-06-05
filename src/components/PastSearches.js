import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const PastSearches = ({ pastSearches, onSearch }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">Past Searches</Typography>
      <List>
        {pastSearches.map((term, index) => (
          <ListItem button key={index} onClick={() => onSearch(term)} sx={{ borderBottom: '1px solid #ddd' }}>
            <ListItemText primary={term} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PastSearches;
