// SpeechSearch.js
import React from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './SpeechSearch.css';

const SpeechSearch = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleSearch = () => {
    // Implement your search logic using the 'transcript' variable
    console.log("Searching for:", transcript);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container">
      <div className="content-container">
        <div className="search-container">
          <input type="text" value={transcript} readOnly />
          <button onClick={handleSearch}>Go</button>
        </div>
        <div className="buttons-container">
          <button onClick={SpeechRecognition.startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>
      </div>
      <p className="microphone-status">Microphone: {listening ? "on" : "off"}</p>
    </div>
  );
};

export default SpeechSearch;
