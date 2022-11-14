import { useState } from "react";
import "./ContadoresPage.css";

function ContadoresPage() {
  const [pa, setPA] = useState(0);
  const [pg, setPG] = useState(2);
  const [regressivo, setRegressivo] = useState(10);

  return (
    <div>
      <button onClick={() => setPA((prevState) => prevState + 2)}>PA</button>
      <label>{pa}</label>
      <br />
      <button onClick={() => setPG((prevState) => prevState * Math.pow(2, 1))}>
        PG
      </button>
      <label>{pg}</label>
      <br />
      <button
        onClick={() =>
          setRegressivo((prevState) => (prevState - 1 >= 0 ? prevState - 1 : 0))
        }
      >
        Regressivo
      </button>
      <label>{regressivo}</label>
      <br />
    </div>
  );
}

export default ContadoresPage;
