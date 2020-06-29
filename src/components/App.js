import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter ] = useState(Math.round(Math.random() * 10));
  return <button onClick={() => setCounter(counter + 1)}>hello world {counter}</button>;
}

export default App;
