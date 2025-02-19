import React, { useState, useEffect } from 'react';
import * as japanese_easy from 'japanese-easy';
import { Box, Grid2, Typography, CircularProgress, Divider } from '@mui/material';

const KatakanaLearning = () => {
  const [KatakanaData, setKatakanaData] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Fetch the Katakana chart data
    japanese_easy.getKatakanaChart().then(data => {
      // console.log("Result from getKatakanaChart:", data);
      setKatakanaData(data); 
      setLoading(false); 
    }).catch(error => {
      console.error("Error fetching Katakana chart data:", error);
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
        Katakana Chart
      </Typography>

      <Grid2 container spacing={2} justifyContent="center">
        {Object.keys(KatakanaData).map((vowel, index) => (
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
                {KatakanaData[vowel].map((characterData, idx) => (
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
                {KatakanaData[vowel].slice(5).map((character, idx) => (
                  <Grid2 item key={idx}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        width: { xs: '50px', sm: '60px', md: '70px', lg: '80px' }, 
                        height: { xs: '50px', sm: '60px', md: '70px', lg: '80px' }, 
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        bgcolor: '#f5f5f5',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '32px' },
                        fontWeight: 'bold'
                      }}
                    >
                      {character}
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

export default KatakanaLearning;
