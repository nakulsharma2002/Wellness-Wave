import React, { useState } from 'react';
import 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\App.css'

function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        style={{height:'48px',width:'80%',padding:'10px 10px',borderBlock:'none',display:'flex'}}
      />
      <div style={{paddingTop:'12px',paddingLeft:'12px'}}>
      <button type="submit" style={{height:'48px',width:'76px',border:'2px saddlebrown',borderRadius:'11px'}}>Send</button>
      </div>
    </form>
  );
}

export default MessageInput;
