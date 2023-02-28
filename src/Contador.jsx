import { useState } from 'react'

export const Contador = ({valor}) => {

    const [contador, setContador] = useState(valor)

    const incrementar  = () => {
        setContador(contador + 1)
    }

    const decremento = () => {
        setContador(contador - 1)
    }
    
    const reiniciar = () => {
        setContador(valor)
    }

  return (
    <>
        <h1>Contador</h1>
        <h3>{contador}</h3>
        <hr />

        <button
            onClick={  incrementar }
        >
            Incrementar
        </button>
         <br />
        <button
            onClick={  decremento }
        >
            Decremento
        </button>
        <br />
        <button
            onClick={  reiniciar }
        >
            Reiniciar
        </button>
    </>
  )
}
