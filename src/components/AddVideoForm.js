// src/components/AddVideoForm.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const AddVideoForm = ({ addVideo }) => {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState('');

  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (video) {
      if (video.type.startsWith('video/')) {
        const videoURL = URL.createObjectURL(video);
        addVideo({ name: video.name, url: videoURL });
        setVideo(null);
        event.target.reset();
      } else {
        setError('Please select a valid video file');
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        type="file"
        inputProps={{ accept: 'video/*' }}
        onChange={handleVideoChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">Add Video</Button>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default AddVideoForm;
