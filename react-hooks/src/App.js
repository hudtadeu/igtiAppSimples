import React, { useEffect, useState } from 'react';
import { getNewTimestamp } from './helpers/dateTimeHelpers';

export default function App() {
  const [clickArray, setClickArray] = useState([]);

  useEffect(()=> {
    document.title = clickArray.length;
  })

  function handleClick() {
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(getNewTimestamp());

    setClickArray(newClickArray);
  }

  return (
    <div>
      <h1>
        React e <em>Hooks</em>
      </h1>

      <button onClick={handleClick}>Clique Aqui</button>

      <ul>{clickArray.map(item => {
        return <li key={item}>{item}</li>;
      })}
      </ul>
    </div>
  );
}

