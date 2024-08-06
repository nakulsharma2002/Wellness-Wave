import React, { useState } from 'react';

function Todolist({ onClose }) {
  const [todolist, setTodolist] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const toname = event.target.toname.value.trim();
    if (toname && !todolist.includes(toname)) {
      setTodolist([...todolist, toname]);
    } else if (todolist.includes(toname)) {
      alert('Item already exists');
    }
    event.target.reset();
  };

  const list = todolist.map((value, index) => (
    <List
      value={value}
      indexNumber={index}
      key={index}
      todolist={todolist}
      setTodolist={setTodolist}
    />
  ));

  return (
    <div style={{ zIndex: 999, right: '0px', margin: 'auto', position: 'fixed', top: '118px', backgroundColor: 'white', textAlign: 'center', height: 'auto', width: '253px' }}>
        <div style={{width:'100%',display:'flex',height:'100px'}}>
            <h1>Todolist</h1>
            <button className="close-button" onClick={onClose} style={{ color: 'black',padding:'0px' }}>X</button>
        </div>
      <form style={{ display: 'block' }} onSubmit={handleSubmit}>
        <div style={{display:'flex'}}> 
            <div style={{ textAlign: 'center', paddingLeft: '34px' }}>
              <input style={{ width: '80%' }} name='toname' />
            </div>
        <div style={{paddingTop:'10px'}}>
        <button type="submit" style={{height:'40px'}}>Save</button>

        </div>
        </div>
        <ul style={{ paddingTop:'23px',width: '700px', height: 'auto', justifyContent: 'flex-end' }}>
          {list}
        </ul>
      </form>
    </div>
  );
}

export default Todolist;

function List({ value, indexNumber, todolist, setTodolist }) {
  const deleterow = () => {
    const final = todolist.filter((_, i) => i !== indexNumber);
    setTodolist(final);
  };

  return (
    <li style={{ paddingTop: '2px', color: 'black', height: '40px', width: '192px', listStyle: 'none', backgroundColor: 'aliceblue' }}>
      {value}
      <span style={{ cursor: 'pointer', marginLeft: '114px' }} onClick={deleterow}>&times;</span>
    </li>
  );
}
