import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';

// new way choose one of these
const Option1 = () => {
  useEffect(() => {
    // triggers when component mounts
    console.log('Option 1 is mounting');

    return () => {
      console.log('Option 1 is unmounting');
    };
  }, []);
  return <div>I am a component</div>;
};

function Option2(){
  useEffect(() => {
    // triggers when component mounts
    console.log('Option 2 is mounting');

    return () => {
      console.log('Option 2 is unmounting');
    };
  }, []);

  return <div>I am also component</div>;
};

const websocket = new WebSocket('ws://localhost:3004');

websocket.onmessage = (e) => {
  console.log('Got Websocket Messagae');
  console.log(e);
};

function App() {
  // always a tuple
  const [state, setState] = useState('default value');

  useEffect(() => {
    // triggers when component mounts
    console.log('Detecting a change');
  }, []);

  const changeHandler = () => {
    setState('handleChange');
  };

  function changeHandler2() {
    setState('handleChange');
  }

  const [data, setData] = useState();

  const handleUpload = () => {
    const formData = new FormData();
    formData.append(
      'file',
      data,
      data.name,
    );
    axios.post('/upload', formData);
  };

  const [username, setUsername] = useState('');
  
  const logIn = () => {
    const message = JSON.stringify({ type: 'login', username : username });
    websocket.send(message);
  };

  const sendTestMessage = () => {
    const message = JSON.stringify({ 
      type: 'broadcast', 
      username : username,
      message: 'hello',
     });
    websocket.send(message);
  };

  return (
    <div className="App">
      <Link to="/test">Test</Link>
      <Link to="/">Home</Link>
      <div onClick={() => setState('Changed!')}>{state}</div>
      <div onClick={changeHandler}>{state}</div>
      <div onClick={changeHandler2}>{state}</div>

      <input type="file" onChange={e => setData(e.target.files[0])} />
      <button onClick={handleUpload}>upload</button>

      <input value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={logIn}>Login</button>
      <button onClick={sendTestMessage}>Send Test</button>

      <Routes>
        {/*Things in here render depending on route*/}
        <Route path="/test" element={<Option1/>} />
        <Route path="/" element={<Option2/>}/>
      </Routes>
    </div>
  );
}

export default App;
