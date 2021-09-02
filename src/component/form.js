import React from 'react'
import {useState} from 'react';
import {Link} from "react-router-dom";
import saludable from '../img/saludable.jpg'
import './form.css';



function Formulario(){
    function postre(){
        document.getElementById('postre').style.display = 'block';
    }
    function noPostre(){
        document.getElementById('postre').style.display = 'none';
    }
    function masalimento(){
        document.getElementById('masalimento').style.display = 'block'
    }
    function nomasalimento(){
        document.getElementById('masalimento').style.display = 'none';
    }
    function alimentomas(){
        document.getElementById('alimentomas').style.display = 'block'
    }
    function noalimentomas(){
        document.getElementById('alimentomas').style.display = 'none';
    }
    const [form,setForm]=useState({
        comida: '',
        bebida: '',
        postre:'',
        masalimento:'',
        alimentomas:'',
        hambre:'',
    })
    const handleForm = (event) => {            
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }
    const enviarForm = (event) => {
        event.preventDefault()
        let formularioComp= [form.comida,form.bebida,form.postre,form.masalimento,form.alimentomas,form.hambre]
    }
      
    return(
        <div className='formContain'>
            <form>
                <label>
                    <h3>Tipo de comida</h3><br/>
                    <label>Desayuno </label><input type='radio' name='comida' onClick={noPostre} onChange={handleForm}/>
                    <label>Almuerzo </label><input type='radio' name='comida' onClick={postre} onChange={handleForm}/>
                    <label>Merienda </label><input type='radio' name='comida' onClick={noPostre} onChange={handleForm}/>
                    <label>Cena </label><input type='radio' name='comida'onClick={postre} onChange={handleForm}/>
                    <br/><br/>
                    <label>Comida Principal:<br/> </label><textarea name='comidaprincipal'onChange={handleForm}/><br/><br/>
                    <label>Comida Secundaria:<br/> </label><textarea name='comidasecundaria'onChange={handleForm}/><br/><br/>
                    <h3>Bebida</h3><br/>
                    <label>Agua </label><input type='radio' name='bebida'onChange={handleForm}/>
                    <label>Gaseosa </label><input type='radio' name='bebida'onChange={handleForm}/>
                    <label>Jugo </label><input type='radio' name='bebida'onChange={handleForm}/>
                    <br/><br/>
                    <div id='postre'>
                        <h3>Ingirio Postre</h3>
                        <label>Si </label><input type='radio' name='postre' onClick={masalimento} onChange={handleForm}/>
                        <label>No </label><input type='radio' name='postre'onClick={nomasalimento} onChange={handleForm}/>
                        <br/><br/>
                    </div>
                    <div id='masalimento'>
                        <h3>Tiene tentación de otro alimento?</h3>
                        <label>Si </label><input type='radio' name='masalimento' onClick={alimentomas} onChange={handleForm}/>
                        <label>No </label><input type='radio' name='masalimento'onClick={noalimentomas} onChange={handleForm}/>
                        <br/><br/>
                    </div>
                                      
                    <div id='alimentomas'>
                        <h3>Que alimento deseaba ingerir</h3>
                        <textarea type='radio' name='alimentomas' onChange={handleForm}/> <br/><br/>                     
                    
                        <h3>Se quedo con hambre?</h3>
                        <label>Si </label><input type='radio' name='hambre' onChange={handleForm}/>
                        <label>No </label><input type='radio' name='hambre' onChange={handleForm}/>
                        <br/><br/>
                    </div>                    
                </label>
                <button type='submit' onSubmit={enviarForm}><Link to='/bebida'>Guardar</Link></button>
            </form>
            <div>
            <img src={saludable} className='salud'/>
            </div>
        </div>
    )

}
export default Formulario