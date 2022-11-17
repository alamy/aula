import { useState } from 'react'
import { useEffect } from 'react'

function CountPage () {
    const [count, setCount] = useState(0)
    const [countPA, setCountPA] = useState(1)
    const [countPG, setCountPG] = useState(10)
    const [data, setData] = useState(new Date())

    useEffect(() => {
        setTimeout(() => {
            setData(new Date())
        }, 1000);
    })
    
    return(
        <>
            <section>
                Data: {data.toLocaleString()}
            </section>
            <section>
                <h4>Contador Regressivo</h4>
                Contador Regressivo: {count}
                <button onClick={() => setCount(0)}>Reiniciar</button>
                <button onClick={() => setCount(prevCount => prevCount + 2)}>Adicionar</button>                
            </section>
            <section>
                <h4>Contador PA</h4>
                Contador PA: {countPA}
                <button onClick={() => setCountPA(0)}>Reiniciar</button>
                <button onClick={() => setCountPA(prevCount => prevCount * 2)}>Adicionar</button>                
            </section>
            <section>
                <h4>Contador PG</h4>
                Contador PG: {countPG}                
                <button onClick={() => {
                    if(countPG > 0) setCountPG(prevCount => prevCount - 1)
                }
            }>Reduzir</button>
            </section>
            
        </>
    )
}

export default CountPage