import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Chatbot = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript !== '') {
      setInputText(transcript);
      resetTranscript();
    }
  }, [transcript, resetTranscript]);

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message to chat history
    setChatHistory([...chatHistory, { type: 'user', text: inputText }]);
    setInputText('');

    // Make API call with cURL command (replace with your own API endpoint)
    // This is a simplified example, you may need to handle asynchronous requests properly
    fetch('https://chatbot-sp6egsqylq-el.a.run.app/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText }),
    })
      .then(response => response.json())
      .then(data => {
        const botResponse = data.response; // Assuming the API response has a 'response' property
        // Add bot message to chat history
        setChatHistory([...chatHistory, { type: 'bot', text: botResponse }]);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '20px auto',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    }}>
      <div style={{
        padding: '70px',
        overflowY: 'auto',
        maxHeight: '300px'
      }}>
        {chatHistory.map((message, index) => (
          <div key={index} className={message.type === 'user' ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#f5f5f5'
      }}>
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: '8px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button
          className="send-button"
          style={{
            padding: '10px 10px',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
          onClick={sendMessage}
        >
          Send
        </button>
        <button
          className="listen-button"
          style={{
            padding: '10px 10px',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
          onClick={() => SpeechRecognition.startListening()}
          disabled={listening}
        >
          Start Listening
        </button>
        <button
          className="stop-listening-button"
          style={{
            padding: '10px 10px',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={() => SpeechRecognition.stopListening()}
          disabled={!listening}
        >
          Stop Listening
        </button>
      </div>
    </div>
  );
};

export default Chatbot;