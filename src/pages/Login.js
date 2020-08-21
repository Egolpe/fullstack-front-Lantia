import React, { Fragment } from 'react'
import { useHistory, Link } from 'react-router-dom'
import startup from "../img/startup.jpg";
import { useForm } from 'react-hook-form';
import { signIn } from "../http/authService";
import { useAuth } from "../context/auth-context";

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
  const history = useHistory();
  const { setIsAuthenticated, setCurrentUser } = useAuth();

  const handleLogin = formData => {
    const data = {
      ...formData,
      "remember_me": true
    }
    return signIn(data)
      .then(response => {
        setIsAuthenticated(true);
        setCurrentUser(response.data);
        history.push(`/preferences`);
      })
      .catch(error => {
        setValue("password", "");
        setError("password", "credentials", "The credentials are invalid");
      });
  };

    return(
        <Fragment>
          <img className="imagen"
            src={startup}
              alt="startup"
          />
          <div className="login">
            <div className="container justify-content-between">
            <h3 className="logint">Iniciar sesión</h3>
            <form onSubmit={handleSubmit(handleLogin)} noValidate>
          <div
            className={`form-group d-flex flex-column col-4 p-0 ${
              errors.email ? "ko" : formState.touched.email && "ok"
            }`}
          >
            <label>Usuario o Email</label>
            <input
              className="form-group"
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
            className={`form-group d-flex flex-column col-4 p-0 ${
              errors.password ? "ko" : formState.touched.password && "ok"
            }`}
          >
            <label>Contraseña</label>
            <input
              ref={register({
                required: "La contraseña es requerida",
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
              <label className="form-check-label"><p> </p>Recordar mi cuenta</label>

          </div>
          <div className="btn-container">
            <div className="final-form">
              <button 
                type="submit"
                className="btn-blue col-4"
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
            
        </div>
      </Fragment>
    )
}