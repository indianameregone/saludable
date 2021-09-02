import React from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";
import './form.css'
import saludable from '../img/saludable.jpg'


function Login (){    
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        dni:'',
        sexo:'',
        fecha:'',
        localidad:'',
        user:'',
        password:''
    })
    const handleInputChange = (event) => {
            
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        let userDatos = [datos.nombre + ' ' + datos.apellido +' '+ datos.dni +' '+ datos.sexo +' '+ datos.fecha + ' '+ datos.localidad +' '+ datos.user +' '+ datos.password]
    }
            
        return(
            <div className='formContain' onClick={enviarDatos}>                
                <h1>Saludable</h1>
                <br/>
                <h3>Iniciar sesion</h3><br/>
                <form>
                    <label>
                        <div className='name'>
                        Nombre:
                        <input type="text"  name="nombre" onChange={handleInputChange} /><br/><br/>
                        Apellido:
                        <input type="text" name="apellido" onChange={handleInputChange} /><br/></div>
                        <div className='name'>
                        DNI:
                        <input type="number" name="dni" onChange={handleInputChange} /><br/><br/>
                        Sexo:
                        <input type="text" name="sexo" onChange={handleInputChange} /><br/><br/>
                        Fecha de Nacimiento:
                        <input type="date" name="fecha" onChange={handleInputChange} /><br/><br/>
                        Localidad:
                        <input type="text" name="localidad" onChange={handleInputChange} /><br/></div>
                        <div className='name'>
                        Ususario:
                        <input type="text" name="user" onChange={handleInputChange} /><br/><br/>
                        Contraseña:
                        <input type="password" name="password" onChange={handleInputChange} /></div>
                       
                    </label>                
                    
                         <button onClick={enviarDatos}>
                           <Link to='/formulario'>Enviar</Link>
                         </button>
    </form>
    <img src={saludable} className='salud'/>
    </div>
        )
}

export default Login