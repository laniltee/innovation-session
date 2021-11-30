import {useEffect, useLayoutEffect, useState} from "react";

const AutoBatching = () => {
  const [color, setColor] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setColor((color) => !color);
    console.log('setColor')
    setClickCount((click) => click + 1);
    console.log('setClickCount')
  }

  useEffect(() => {
    console.log('useEffect')
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  });

  return (
      <div>
        <button onClick={handleClick}>Change color</button>
        <h1 style={{color: color ? "red" : "black"}}>
          Click Count: {clickCount}
        </h1>
      </div>
  );
}

export default AutoBatching;
