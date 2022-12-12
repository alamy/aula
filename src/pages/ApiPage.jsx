import React, { useEffect, useState } from "react";
// import api from "../services/api";

import pokemon from "../services/pokemon";

export default function ApiPage() {
    const [user, setUser] = useState();
  useEffect(() => {
    pokemon
      .get("/pokemon/1")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <div>
      <p>Usuário: {user?.forms.name}</p>
      <p>Nome: {user?.name}</p>
      <p>url: {user?.html_url}</p>
      <img src={user?.sprites.back_default} alt="ditto" />
    </div>
  );
}