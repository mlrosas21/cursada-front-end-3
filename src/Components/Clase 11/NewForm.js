import React, {useState} from 'react'
import Swal from 'sweetalert2'

const NewForm = () => {


    const [user, setUser ] = useState({
        name: '',
        domicilio: '',
        error: false
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.name === '')
            setUser({...user, error: true})
        else{
            Swal.fire('Hola ' + user.name)
            setUser({...user, name: ''})
        }

    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                name=''
                type="text" 
                value={user.name}
                onChange={(e) => setUser({error: false, name: e.target.value})}
            />
            
            {console.log(user)}
            {user.error && <span>This field is required</span>}
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default NewForm