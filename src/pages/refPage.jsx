import React, { useState, useEffect, useRef } from "react";
import './refPage.css'

function refPage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const count = useRef(0);
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      count.current = count.current + 1;
    });
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </>
    );
}

export default refPage