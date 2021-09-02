import React from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Login from './component/login.js';
import Formulario from './component/form.js'
import Bebida from './component/bebida.js';
import './index.css'

function App(){
    return(
        <div className='fondo'>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Login />                                              
                    </Route>
                    <Route path='/formulario'>
                        <Formulario />
                    </Route>
                    <Route path='/bebida'>
                        <Bebida />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default App