import { useEffect } from "react";
import { useState } from "react";
import "./DataAtualPage.css";

function DataAtualPage() {
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      var d = new Date(),
        dformat =
          [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
          " " +
          [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
      setData(dformat);
    }, 1000);
  });

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default DataAtualPage;
