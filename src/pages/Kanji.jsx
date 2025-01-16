import React, { useState, useEffect } from 'react';
import * as japanese_easy from 'japanese-easy';
import { Select, MenuItem, FormControl, InputLabel, CircularProgress, Box, Typography } from '@mui/material';

const KanjiLearn = () => {
  const [kanjiData, setKanjiData] = useState([]); 
  const [selectedGrade, setSelectedGrade] = useState('grade-1'); 
  const [loading, setLoading] = useState(false); 

  const fetchKanjiData = (grade) => {
    setLoading(true);
    japanese_easy.lookupKanjiList(grade).then((data) => {
      console.log(`Result from lookupKanjiList for ${grade}:`, data);
      setKanjiData(data); 
      setLoading(false); 
    }).catch((error) => {
      console.error(`Error fetching ${grade} Kanji data:`, error);
      setLoading(false); 
    });
  };

  useEffect(() => {
    fetchKanjiData(selectedGrade);
  }, [selectedGrade]); 

  return (
    <>
       <Typography variant="h4" align="center" fontWeight={700} marginBottom={5}>
        Kanji Chart {selectedGrade.charAt(0).toUpperCase() + selectedGrade.slice(1).toLowerCase()}
      </Typography>

      <FormControl fullWidth style={{ marginBottom: '20px' }}>
        <InputLabel>Grade</InputLabel>
        <Select
          value={selectedGrade}
          label="Grade"
          onChange={(e) => setSelectedGrade(e.target.value)}
        >
          <MenuItem value="grade-1">Grade 1</MenuItem>
          <MenuItem value="grade-2">Grade 2</MenuItem>
          <MenuItem value="grade-3">Grade 3</MenuItem>
          <MenuItem value="grade-4">Grade 4</MenuItem>
          <MenuItem value="grade-5">Grade 5</MenuItem>
          <MenuItem value="grade-6">Grade 6</MenuItem>
          <MenuItem value="grade-8">Grade 8</MenuItem>
          <MenuItem value="joyo">Joyo</MenuItem>
          <MenuItem value="jinmeiyo">Jinmeiyo</MenuItem>
          <MenuItem value="heisig">Heisig</MenuItem>
          <MenuItem value="kyouiku">Kyouiku</MenuItem>
          <MenuItem value="all">All</MenuItem>
          
        </Select>
      </FormControl>

      {/* Display Kanji data */}
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress />
        </Box>
      ) : (
        <div>     
          <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
            {kanjiData.map((kanjiItem, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="50px"
                height="50px"
                border="1px solid #ddd"
                borderRadius="8px"
                bgcolor="#f5f5f5"
                boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
                style={{ fontSize: '24px', fontWeight: 600 }}
              >
                {kanjiItem}
              </Box>
            ))}
          </Box>
        </div>
      )}
    </>
  );
};

export default KanjiLearn;
