import React from "react";
import Swal from "sweetalert2";

const Rejuvenecedor = () => {
    const [nombre, setNombre] = React.useState(null);
    const [edad, setEdad] = React.useState(null);
    const [error, setError] = React.useState({nombre:false,edad:false});
    
    const submitHandler = (event) => {
        event.preventDefault();
        if(nombre.length<1) setError({nombre:true});
        if(edad<=0) setError({edad:true});
        if(nombre.length<1 || edad <=0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo falló!!! Tu nombre debe tener al menos un caracter y tu edad debe ser mayor a cero',
                footer: '<a href="">Por qué tuve este error?</a>'
            })
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title:'Datos',
                text: 'Nombre: '+ nombre + '  Edad: ' + (edad-10),
                showConfirmButton: true
            })
            setNombre(null);
            setEdad(null);
            setError({'nombre':false,'edad':false});
        }
    }

    return ( 
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Nombre</label>
                    <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
                    {error.nombre===true && <span>  * Obligatorio</span>}
                </div>
                <div>
                    <label>Edad</label>
                    <input type="number" value={edad} onChange={(event) => setEdad(event.target.value)}/>
                    {error.edad===true && <span>  * Obligatorio</span>}
                </div>
                <button>Submit</button>
            </form>
        </>
    )
} 

export default Rejuvenecedor;