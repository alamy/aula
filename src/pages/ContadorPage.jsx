import './ContadorPage.css';
import React, {useState} from 'react'

function ContadorPage() {

    const [count, setCount] = useState(0);

    return(
        <>
            Contador: {count}
            <button onClick={() => setCount(0)}>Reinciar</button>
            <button onClick={() => setCount(prevCount => prevCount - 1 )}>Diminuir</button>
            <button onClick={() => setCount(prevCount => prevCount + 1 )}>aumentar</button>
        </>
    )

}
export default ContadorPage