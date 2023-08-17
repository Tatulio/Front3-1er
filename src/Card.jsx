//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({libros}) {
  return (
    <div>
      <h2>Resumen Libro</h2>
      {libros.map((libro, i) =>(
        <div key={i} className="card">
          <h3>Titulo: {libro.titulo}</h3>
          <h4>Descripcion: {libro.descripcion}</h4>
        </div>
      ))}
    </div>
  );
}

export default Card;
