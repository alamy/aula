import React, { useState, useEffect } from "react";
import './HomePage.css';
import Login from '../component/Login';

function HomePage() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });
    return (
        
        <div>
            <span>Estamos on-line à {count} segundos!</span>
            <Login />
        </div> 
    )
}
export default HomePage;