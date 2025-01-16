import React, { useState, useEffect } from 'react';
import * as japanese_easy from 'japanese-easy';

const Convert = () => {
  const [kanjiInput, setKanjiInput] = useState('日'); 
  const [kanaOutput, setKanaOutput] = useState('');
  const [error, setError] = useState('');

  // Regular expression for Kanji character validation
  const kanjiRegex = /^[一-龯々〆〤]/;

  // Handle Kanji input change
  const handleKanjiInputChange = (e) => {
    const value = e.target.value;
    setKanjiInput(value);

    // Validate if the input is a Kanji character
    if (kanjiRegex.test(value)) {
      setError('');
    } else if (value !== '') {
      setError('Invalid Kanji input. Please enter a valid Kanji character.');
    } else {
      setError('');
    }
  };

  useEffect(() => {
    if (kanjiInput && !error) {
      japanese_easy.convertKanjiToKana(kanjiInput).then(data => {
        // console.log("Result from convertKanjiToKana:", data);
        setKanaOutput(data); 
      }).catch(error => {
        console.error("Error converting Kanji to Kana:", error);
        setKanaOutput('Error in conversion.');
      });
    } else {
      setKanaOutput(''); 
    }
  }, [kanjiInput, error]); 

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
    }}>
      <h1>Convert Kanji to Kana</h1>

      {/* Input Field for Kanji */}
      <input
        type="text"
        value={kanjiInput}
        onChange={handleKanjiInputChange}
        placeholder="Enter Kanji characters (e.g. 日)"
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ddd'
        }}
      />

      {kanaOutput && (
        <div style={{
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f5f5f5',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          marginTop: '20px',
          wordWrap: 'break-word',
        }}>
          <h3>Kana Output:</h3>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
            {kanaOutput}
          </p>
        </div>
      )}

      {/* Display Error Message */}
      {error && (
        <div style={{
          padding: '20px',
          border: '1px solid #f5c6cb',
          borderRadius: '8px',
          backgroundColor: '#f8d7da',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          marginTop: '20px',
          color: '#721c24',
        }}>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Convert;
