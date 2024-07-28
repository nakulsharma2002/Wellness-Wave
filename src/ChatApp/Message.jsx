import React from 'react';

function Message({ text, timestamp }) {
  return (
    <div className="message" style={{paddingLeft:'10px',width:'100%',textAlign:'-webkit-right'}}>
      <span>{text}</span>
      <span className="timestamp" style={{paddingLeft:'23px',fontSize:'x-small'}}>{timestamp.toLocaleTimeString()}</span>
      
    </div>
  );
}

export default Message;
