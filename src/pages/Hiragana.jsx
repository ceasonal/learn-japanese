import React, { useState, useEffect } from 'react';
import * as japanese_easy from 'japanese-easy';
import { Box, Grid2, Typography, CircularProgress, Divider } from '@mui/material';

const HiraganaLearning = () => {
  const [hiraganaData, setHiraganaData] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Fetch the Hiragana chart data
    japanese_easy.getHiraganaChart().then(data => {
      console.log("Result from getHiraganaChart:", data);
      setHiraganaData(data); 
      setLoading(false); 
    }).catch(error => {
      console.error("Error fetching Hiragana chart data:", error);
      setLoading(false); 
    });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress size={80} />
      </Box>
    );
  }

  return (
    <Box padding={2}>
      <Typography variant="h4" align="center" fontWeight={700} marginBottom={5}>
        Hiragana Chart
      </Typography>

      <Grid2 container spacing={2} justifyContent="center">
        {Object.keys(hiraganaData).map((vowel, index) => (
          <Grid2 key={index} xs={12} sm={6} md={3}>
            <Box sx={{ marginBottom: 5 }}>
              <Typography
                variant="h5"
                align="center"
                fontWeight={600}
                marginBottom={1}
                color='red'
              >
                {vowel.toUpperCase()}
              </Typography>

              {/* Display the first 5 characters */}
              <Grid2 container spacing={1} justifyContent="center">
                {hiraganaData[vowel].map((characterData, idx) => (
                  <Grid2 item key={idx}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        width: {
                          xs: "170px",
                          sm: "170px",
                          md: "170px",
                          lg: "180px",
                        },
                        height: {
                          xs: "170px",
                          sm: "170px",
                          md: "170px",
                          lg: "180px",
                        },
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        bgcolor: "#f5f5f5",
                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                        fontSize: {
                          xs: "20px",
                          sm: "24px",
                          md: "28px",
                          lg: "32px",
                        },
                        fontWeight: "bold",
                        padding: 1,
                      }}
                    >
                      <Typography variant="h5" fontWeight={600}>
                        {characterData.character}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" fontWeight={'bold'}>
                        Romaji: {characterData.romaji}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" fontWeight={'bold'}>
                        Strokes: {characterData.stroke_count}
                      </Typography>
                      <Divider sx={{ marginY: 1 }} />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        fontSize="14px"
                        fontWeight={'bold'}
                      >
                        Examples:
                        {characterData.example_words.map((example, index) => (
                          <Typography
                            key={index}
                            variant="body2"
                            color="textSecondary"
                            display="block"
                          >
                            {example.replace("(", " :").replace(")", "")}
                          </Typography>
                        ))}
                      </Typography>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>

              {/* Display the rest of the characters */}
              {/* <Grid2 container spacing={1} justifyContent="center">
                {hiraganaData[vowel].slice(5).map((characterData, idx) => (
                  <Grid2 item key={idx}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        width: { xs: '100px', sm: '120px', md: '140px', lg: '160px' },
                        height: { xs: '100px', sm: '120px', md: '140px', lg: '160px' },
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        bgcolor: '#f5f5f5',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '32px' },
                        fontWeight: 'bold',
                        padding: 1
                      }}
                    >
                      <Typography variant="h5">{characterData.character}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Strokes: {characterData.stroke_count}
                      </Typography>
                      <Divider sx={{ marginY: 1 }} />
                      <Typography variant="body2" color="textSecondary" fontSize="14px">
                        Examples: {characterData.example_words.join(', ')}
                      </Typography>
                    </Box>
                  </Grid2>
                ))}
              </Grid2> */}
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default HiraganaLearning;
