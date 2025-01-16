import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import hiraganaImage from '../assets/images/hiragana.jpg'; 
import katakanaImage from '../assets/images/katakana.jpg'; 
import kanjiImage from '../assets/images/kanji.jpg'; 
import kanaImage from '../assets/images/kana.jpg'; 

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Container>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
              <Typography variant="h4" fontWeight={600} marginBottom={2}>
            Learn Japanese Characters
          </Typography>
          <Typography variant="h6" color="textSecondary" fontWeight={500} marginBottom={4}>
            Explore Hiragana, Katakana, Kanji, and Kana. Understand, learn, and practice these essential writing systems.
          </Typography>
        </Box>

        {/* Main Features Section */}
        <Grid container spacing={4} justifyContent="center">
          {/* Hiragana Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, textAlign: 'center', backgroundColor: 'rgb(0,0,0,0)', boxShadow: '0 5px 5px rgba(0, 0, 0)' }}>
              <img src={hiraganaImage} alt="Hiragana" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
                Hiragana
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Hiragana is the most basic Japanese script, used for native Japanese words and grammatical elements.
              </Typography>
              <Button variant="contained" color="inherit" fullWidth href="#/hiragana" sx={{ marginTop: 2 }}>
                Learn
              </Button>
            </Paper>
          </Grid>

          {/* Katakana Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, textAlign: 'center', backgroundColor: 'rgb(0,0,0,0)', boxShadow: '0 5px 5px rgba(0, 0, 0)' }}>
              <img src={katakanaImage} alt="Katakana" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
                Katakana
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Katakana is used primarily for foreign words, names, technical terms, and onomatopoeia.
              </Typography>
              <Button variant="contained" color="inherit"  fullWidth src="#/katakana" sx={{ marginTop: 2 }} >
                Learn 
              </Button>
            </Paper>
          </Grid>

          {/* Kanji Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, textAlign: 'center', backgroundColor: 'rgb(0,0,0,0)', boxShadow: '0 5px 5px rgba(0, 0, 0)' }}>
              <img src={kanjiImage} alt="Kanji" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
                Kanji
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Kanji are logographic characters borrowed from Chinese. They represent concepts and words.
              </Typography>
              <Button variant="contained" color="inherit" fullWidth href="#/kanji" sx={{ marginTop: 2 }}>
                Learn 
              </Button>
            </Paper>
          </Grid>

          {/* Kana Conversion Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ padding: 3, textAlign: 'center', backgroundColor: 'rgb(0,0,0,0)', boxShadow: '0 5px 5px rgba(0, 0, 0)' }}>
              <img src={kanaImage} alt="Kana" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
                Kanji to Kana 
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Try Convert Kanji characters into their corresponding Kana ( Hiragana or Katakana) easily.
              </Typography>
              <Button variant="contained" color="inherit" fullWidth sx={{ marginTop: 2 }} >
                Try Conversion
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', marginTop: 6 }}>
          <Typography variant="h5" gutterBottom>
            Features Available:
          </Typography>
          <Typography variant="body1" color="textSecondary">
            - Learn Hiragana, Katakana, and Kanji
            <br />
            - More features coming soon!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
