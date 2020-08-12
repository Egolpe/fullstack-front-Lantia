import React, { Fragment, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import startup from "../img/startup.jpg";
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/auth-context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


export function Register() {

    const { register, errors, formState, handleSubmit } = useForm({
        mode: 'onBlur'
      });
      const [startDate, setStartDate] = useState(new Date());
      const { setIsAuthenticated, setCurrentUser } = useAuth();
      
      const history = useHistory();
    const handleRegister = () => {
        history.push("/login")
    }
    return(
    <Fragment>
         <img 
            className="imagen"
            src={startup}
            alt="startup"
          />
    <div className='register'>
      <div className="container">
        <h3 className="registro">Registrate</h3>
        <form onSubmit={handleSubmit(handleRegister)} noValidate>
      <div
        className={`form-group d-flex flex-column col-4 p-0 ${
          errors.name ? 'ko' : formState.touched.name && 'ok'
        }`}
      >
        <label for="formGroupExampleInput">Nombre</label>
        <input
          ref={register({
            required: 'El nombre es requerido'
          })}
          name='name'
          type='text'
        />
        {errors.name && (
          <span className='errorMessage'>{errors.name.message}</span>
        )}
      </div>
      <div
        className={`form-group d-flex flex-column col-4 p-0 ${
          errors.apellidos ? 'ko' : formState.touched.apellidos && 'ok'
        }`}
      >
        <label>Apellidos</label>
        <input
          ref={register({
            required: 'Los apellidos son requeridos'
          })}
          name='apellidos'
          type='text'
        />
        {errors.apellidos && (
          <span className='errorMessage'>{errors.apellidos.message}</span>
        )}
      </div>
      <div
        className={`form-group d-flex flex-column col-4 p-0 ${
          errors.sexo ? 'ko' : formState.touched.sexo && 'ok'
        }`}
      >
        <label>Sexo</label>
        <select
          ref={register({
            required: 'El sexo es requerido'
          })}
          name='sexo'
        >
        <option value="hombre">hombre</option>
        <option value="mujer">mujer</option>
        <option value="otro">otro</option>
        </select>
        {errors.sexo && (
          <span className='errorMessage form-group d-flex flex-column col-4 p-0'>{errors.sexo.message}</span>
        )}
      </div>
      
        <label>Fecha de nacimiento</label>
        <DatePicker 
        
        selected={startDate} 
        onChange={date => setStartDate(date)}
        dateFormat="dd-MM-yyyy"
        />

      <div
        className={`form-group d-flex flex-column col-4 p-0 ${
          errors.celular ? 'ko' : formState.touched.celular && 'ok'
        }`}
      >
        <label>Número de teléfono</label>
        <input
          ref={register({
            required: 'El celular es requerido'
          })}
          name='celular'
          type='text'
        />
        {errors.celular && (
          <span className='errorMessage'>{errors.celular.message}</span>
        )}
      </div>
      <div
        className={`form-group d-flex flex-column col-4 p-0 ${
          errors.email ? 'ko' : formState.touched.email && 'ok'
        }`}
      >
        <label>Correo electrónico</label>
        <input
          ref={register({
            required: 'El correo electrónico es requerido',
            pattern: {
              message: 'The email is not valid',
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
          })}
          name='email'
          type='email'
          
        />
        {errors.email && (
          <span className='errorMessage'>{errors.email.message}</span>
        )}
      </div>
      <div
        className={`form-group d-flex flex-column col-4 p-0 ${
          errors.password ? 'ko' : formState.touched.password && 'ok'
        }`}
      >
        <label>Contraseña</label>
        <input
          ref={register({
            required: 'La contraseña es requerida',
            minLength: {
              message: 'Password length should be greater than 6',
              value: 6
            }
          })}
          name='password'
          type='password'
        />
        {errors.password && (
          <span className='errorMessage'>{errors.password.message}</span>
        )}
      </div>
      <div className='btn-container'>
        <div className="final-form">
          <button
            type='submit'
            className='btn-blue col-4 p-0'
            disabled={formState.isSubmitting}
          >
            Registrate gratis
          </button>
          <div className='m-t-lg'>
            ¿Ya tienes cuenta?   
          <Link className='m-t-lg' to='/login'>
             Iniciar Sesión
          </Link>
          </div>
        </div>  
      </div>
     </form>
     </div>
    </div>
  </Fragment>
  
  )

}