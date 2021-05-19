

export const TiposBasicos = () => {

  const nombre: string  = 'Rafa';
  const edad: number = 35;
  const estaActivo: boolean = true;
  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar bajo el agua'];

  return (
    <>
      <h3>Tipos básicos</h3>
      { nombre }, { edad }, {(estaActivo) ? 'activo' : 'no activo'}
      <br />
      { poderes.join(', ')}
    </>
  )
}
