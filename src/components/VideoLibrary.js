import React, { useState } from 'react';
import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import AddVideoForm from './AddVideoForm';
import VideoPlayer from './VideoPlayer';

const VideoLibrary = () => {
  const [videos, setVideos] = useState([]);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showBookmarked, setShowBookmarked] = useState(false);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const bookmarkVideo = (video) => {
    if (!bookmarkedVideos.includes(video)) {
      setBookmarkedVideos([...bookmarkedVideos, video]);
    }
  };

  const toggleShowBookmarked = () => {
    setShowBookmarked(!showBookmarked);
  };

  const displayedVideos = showBookmarked ? bookmarkedVideos : videos;

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Video Library</Typography>
      <AddVideoForm addVideo={addVideo} />
      <Button onClick={toggleShowBookmarked} variant="contained" sx={{ mb: 2 }}>
        {showBookmarked ? 'Show All Videos' : 'Show Bookmarked Videos'}
      </Button>
      <List>
        {displayedVideos.map((video, index) => (
          <ListItem key={index} sx={{ mb: 1, borderBottom: '1px solid #ddd' }}>
            <ListItemText primary={video.name} />
            <Button onClick={() => setSelectedVideo(video)} variant="outlined" sx={{ mr: 1 }}>
              Play
            </Button>
            <Button onClick={() => bookmarkVideo(video)} variant="contained" color="secondary">
              Bookmark
            </Button>
          </ListItem>
        ))}
      </List>
      {selectedVideo && <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </Box>
  );
};

export default VideoLibrary;
