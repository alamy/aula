import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

function UseStateActivity() {
  const [count, setCount] = useState(0);
  const [countPA, setCountPA] = useState(1);
  const [countPG, setCountPG] = useState(10);

  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <section>
        <h4>Contador Regressivo</h4>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="0">{count}</ToggleButton>
          <ToggleButton value="0" onClick={() => setCount(0)}>
            Resetar
          </ToggleButton>
          <ToggleButton
            onClick={() => setCount((prevCount) => prevCount + 2)}
            value="+"
          >
            +2
          </ToggleButton>
        </ToggleButtonGroup>
      </section>
      <section>
        <h4>Contador PA</h4>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="0">{countPA}</ToggleButton>
          <ToggleButton value="0" onClick={() => setCountPA(0)}>
            Resetar
          </ToggleButton>
          <ToggleButton
            onClick={() => setCountPA((prevCount) => prevCount * 2)}
            value="+"
          >
            x2
          </ToggleButton>
        </ToggleButtonGroup>
      </section>
      <section>
        <h4>Contador PG</h4>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="0">{countPG}</ToggleButton>
          <ToggleButton
            value="0"
            onClick={() => {
              if (countPG > 0) setCountPG((prevCount) => prevCount - 1);
            }}
          >
            Reduzir
          </ToggleButton>
        </ToggleButtonGroup>
      </section>
    </>
  );
}

export default UseStateActivity;
