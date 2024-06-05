import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const VideoPlayer = ({ video, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{video.name}</DialogTitle>
      <DialogContent>
        <video controls style={{ width: '100%' }}>
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default VideoPlayer;
