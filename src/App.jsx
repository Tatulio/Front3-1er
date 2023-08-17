import { useState } from 'react';
import Form from './Form';
import Card from './Card';


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [libros, setLibros] = useState([])

  const addLibro = (libro) => {
    setLibros([...libros, libro])
  }


  return (
    <div className="App">
      <h1>Elige un Libro</h1>
      <Form onAddLibro={addLibro}/>
      <Card libros={libros}/>
    </div>
  );
}

export default App;
