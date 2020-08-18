import React, { useState } from 'react'

const Input = props => {
  const [inputVal, setInputVal] = useState('');
  const [fetchGet, setFetchGet] = useState(false);
  const getRequest = () => {
   fetch(props.uri) 
      .then(res => res.json())
      .then(data => setFetchGet({...data}));
  };
  const addToDB = () => {
    fetch(props.uri, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name: inputVal })
    })
      .then(_ => setInputVal(''))
      .catch(e => console.log(e));
  };

  const handleChange = e => {
    e.preventDefault();
    setInputVal(e.target.value);
  };
  return (
    <>
      <div className="input-wrapper">
        <h1 className="header">{props.name}</h1>
        <input className="input" type="text" value={inputVal} onChange={handleChange} />
        <button className="btn-add" onClick={addToDB}>{`Add ${props.name}`}</button>
        <button className="btn-get-all" onClick={getRequest}>Get All</button>
      </div>
      {fetchGet
        ? <p>{JSON.stringify(fetchGet)}</p>
        : <></>
      } 
    </>
  )
}

export default Input
