import { useState } from "react"

function Form({onAddLibro}){
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (titulo.length > 3  && descripcion.length > 6) {
            onAddLibro({titulo, descripcion})
            setTitulo("")
            setDescripcion("")
        } else if (titulo.length <= 3) {
            alert("El titulo debe tener mas de 3 caracteres")            
        } else if ( descripcion.length <= 6) {
            alert("La descripcion debe tener mas de 6 caracteres")
        } else {
            alert("Datos incompletos")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese el titulo" value={titulo} onChange={(e)=>setTitulo(e.target.value)}></input>
            <input type="text" placeholder="Ingrese la descripcion" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}></input>
            <button type="submit">Cargar Libro</button>
        </form>
    )

}



export default Form;