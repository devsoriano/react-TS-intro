
interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Rafael',
    edad: 32,
    direccion: {
      pais: 'México',
      casaNo: 100
    }
  }

  return (
    <>
     <h3>Objetos literales</h3>
     <code>
       <pre>
         {JSON.stringify(persona, null, 2 )}
       </pre>
     </code>
    </>
  )
}
