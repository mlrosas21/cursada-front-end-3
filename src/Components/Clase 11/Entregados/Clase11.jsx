import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Clase11 = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        edad: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (datos.nombre==='' | datos.edad<10){
            Swal.fire('error')
        } else {
            const nuevaEdad = datos.edad-10;
            Swal.fire(datos.nombre + ' ahora tenes ' + nuevaEdad + ' años!');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" 
                value= {datos.nombre}
                onChange= {(e)=>setDatos({...datos, nombre: e.target.value})}/>
            <label>Edad: </label>
            <input type="number"
                value= {datos.edad}
                onChange= {(e)=>setDatos({...datos, edad: e.target.value})}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Clase11