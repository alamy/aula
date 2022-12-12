import React, { useState } from "react";
import './AboutPage.css';
import { useNavigate } from 'react-router-dom'


function AboutPages() {

    const [user] = useState("Jesse Hall");

    const navegation = useNavigate();
    return (
        <>
        <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
            <button class="waves-effect waves-light btn-small" onClick={()=>navegation('/usuario')}>clique aqui</button>
        </> 
    )

    function Component2({ user }) {
        return (
          <>
            <h1>Component 2</h1>
            <Component3 user={user} />
          </>
        );
      }

      function Component3({ user }) {
        return (
          <>
            <h1>Component 3</h1>
            <h2>{`Hello ${user} again!`}</h2>
          </>
        );
      }

}
export default AboutPages;