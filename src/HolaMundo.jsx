import '../src/styles.css'

export const HolaMundo = ({titulo = 'Curso de Python', duracion}) => {

  console.log(titulo)


  return (
    <>
     <div className='mi-div'>
        { titulo}
     </div>
    </>
  )
}

