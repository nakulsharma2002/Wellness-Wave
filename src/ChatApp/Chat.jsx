import React, { useState } from 'react';
import Message from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\ChatApp\\Message.jsx';
import MessageInput from './MessageInput';
import { username } from '../Information/Username';
import 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\CSS\\Homecss.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState('');

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, timestamp: new Date() }]);
  };

  const handleUsernameClick = (name) => {
    setSelectedUsername(name);
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '670px' }}>
      <div style={{ width: '30%', height: '637px' }}>
        <Header />
        <UserList onUsernameClick={handleUsernameClick} />
      </div>
      <div style={{ width: '70%', height: '700px' }}>
        <ChatHeader selectedUsername={selectedUsername} />
        <ChatMessages messages={messages} />
        <MessageInputContainer onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '60px', backgroundColor: 'rgb(181 165 247)', color: 'white' }}>
      <div style={{ width: '20%' }}>
        <h1 style={{ textAlign: 'center' }}>&#9776;</h1>
      </div>
      <div style={{ width: '80%' }}>
        <h1>Wellness Wave</h1>
      </div>
    </div>
  );
}

function UserList({ onUsernameClick }) {
  return (
    <div style={{ height: '609px', width: '100%', backgroundColor: 'rgb(181 165 247)' }}>
      {username.map((v, i) => (
        <UserName items={v} key={i} onClick={() => onUsernameClick(v.name)} />
      ))}
    </div>
  );
}

function ChatHeader({ selectedUsername }) {
  return (
    <div style={{ display: 'flex', height: '60px', width: '100%', backgroundColor: 'rgb(181 165 247)' }}>
      <h1 style={{ fontSize: '34px', textAlign: 'center', padding: '13px 34px ' }}>{selectedUsername || 'Username'}</h1>
    </div>
  );
}

function ChatMessages({ messages }) {
  return (
    <div style={{ padding: '20px 14px', textAlign:'right',height: '550px', width: '100%', backgroundColor: 'lightcoral' }}>
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} timestamp={msg.timestamp} />
      ))}
    </div>
  );
}

function MessageInputContainer({ onSendMessage }) {
  return (
    <div style={{ width: '100%', height: '77px' }}>
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
}

function UserName({ items, onClick }) {
  return (
    <div 
      className="card mb-3" 
      id="cars" 
      style={{ maxWidth: '540px', backgroundColor: 'rgb(181 165 247)', border: 'none', cursor: 'pointer', borderBottom: '1px solid black' }}
      onClick={onClick}
    >
      <div className="row g-0" style={{ height: '84px' }}>
        <div className="col-md-4" style={{ width: '107px', height: '800px', padding: '19px' }}>
          <div style={{ height: '10px' }}>
            <img src={`${process.env.PUBLIC_URL}/Images/apple.jpg`} style={{ height: '40px', width: '100px', borderRadius: '30px' }} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{ padding: '26px 20px' }}>
            <h5 className="card-title" style={{ color: 'white' }}>{items.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
