import React, { Fragment } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';


export function Recuperar(){
    const {
        handleSubmit,
        register,
        errors,
        formState,
        setError,
        setValue
       } = useForm({
         mode: "onBlur"
       });
   
       const handleLogin = () => {
         history.push("/dashboard")
       }
   
       const history = useHistory();
       const handleRegister = () => {
           history.push("/register")
       }
    return(
        <Fragment>
            <div className="recuperar">
                <div className="title2">
                    <h1>Recupera tu contraseña</h1>
                </div>
                <div
                    className={`form-control ${
                    errors.email ? "ko" : formState.touched.email && "ok"
                    }`}
                >
                <label>Usuario o Email</label>
                <input
                    ref={register({
                        required: "El usuario o email son requeridos",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "El email no es válido"
                        }
                    })}
                        name="email"
                        type="email"
              
                ></input>
                        {errors.email && (
                        <span className="errorMessage">{errors.email.message}</span>
                        )}
                </div>
            </div>    
            <div className='btn-container'>
                <div className="final-form">
                <button
                    type='submit'
                    className='btn-blue'
                    disabled={formState.isSubmitting}
                >
                    Recuperar contraseña
                </button>
                </div>
                <div className='m-t-lg'>
                        ¿La has recordado?   
                    <Link className='m-t-lg' to='/login'>
                        Vuelve a Inicio de sesión
                    </Link>
                </div>
                <div className='m-t-lg'>
                        ¿No tienes cuenta?   
                    <Link className='m-t-lg' to='/register'>
                        Registrate gratis
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}