import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import VideoLibrary from './components/VideoLibrary';
import UserInfo from './components/UserInfo';

const HeroSection = styled('div')({
  height: 'calc(100vh - 64px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#000000',
});

const HeroText = styled('div')({
  maxWidth: '600px',
  padding: '20px',
});

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Samta.ai Media Library
            </Link>
          </Typography>
          <Button color="inherit" component={Link} to="/videos">Video Library</Button>
          <Button color="inherit" component={Link} to="/users">User Info</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/videos" element={<VideoLibrary />} />
          <Route path="/users" element={<UserInfo />} />
          
          <Route path="/" element={
            <HeroSection>
              <HeroText>
                <Typography variant="h2" gutterBottom sx={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '2.5rem' }}>
                  Welcome to Samta.ai Media Library
                </Typography>
                <Typography variant="body1" gutterBottom>
                Your hub for multimedia exploration and user interaction. Discover captivating videos and insightful user profiles for an immersive experience.
                </Typography><br></br>
                <Button variant="contained" color="primary" component={Link} to="/">
                  Get Started
                </Button>
              </HeroText>
            </HeroSection>
          } />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
