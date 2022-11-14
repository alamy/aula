import { useState } from "react";
import "./ContadorPage.css";

function ContadorPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(0)}>Reiniciar</button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Diminuir
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Aumentar
        </button>
      </div>
    </>
  );
}

export default ContadorPage;
