import React, { Fragment } from 'react'
import { useHistory, Link } from 'react-router-dom'
import startup from "../img/startup.jpg";
import { useForm } from 'react-hook-form';

export function Login () {

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
          <img className="imagen"
            src={startup}
              alt="startup"
          />
          <div className="login">
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit(handleLogin)} noValidate>
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
          <div
            className={`form-control ${
              errors.password ? "ko" : formState.touched.password && "ok"
            }`}
          >
            <label>Contraseña</label>
            <input
              ref={register({
                required: "El contraseña es requerida",
                minLength: {
                  value: 6,
                  message:
                    "La contraseña debe tener al menos 6 caracteres"
                }
              })}
              name="password"
              type="password"
         
            ></input>
            {errors.password && (
              <span className="errorMessage">{errors.password.message}</span>
            )}
          </div>
          <div>
              <input 
                name="checkbox"
                type="checkbox"
              >
              </input>
              <label><p> </p>Recordar mi cuenta</label>

          </div>
          <div className="btn-container">
            <div className="final-form">
              <button 
                type="submit"
                className="btn-blue"
                disabled={formState.isSubmitting}
              >
                Iniciar Sesión  
              </button>
            </div>
            <div>
              <Link className="linkCreateAccount" to="/recuperar">
                {" "}
                ¿Has olvidado tu contraseña?
                </Link>
              <Link className="linkCreateAccount" to="/register">
                {" "}
                <br/>
                Registrate ahora GRATIS
  
              </Link>
          
            </div> 
          </div>
        </form>
            
            
        </div>
      </Fragment>
    )
}