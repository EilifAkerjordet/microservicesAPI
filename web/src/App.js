import React from 'react';
import { v4 as uuid } from 'uuid';
import Input from './Components/Input';
import './App.css';

function App() {
  const inputs = [
    { name: 'Books', uri: '/api/books' },
    { name: 'Videoes', uri: '/api/videoes' },
    { name: 'Videos and Books', uri: '/api/search' }
];
  return (
    <div className="App">
      {inputs.map(e => <Input key={uuid()} name={e.name} uri={e.uri} />)}
    </div>
  );
}

export default App;
