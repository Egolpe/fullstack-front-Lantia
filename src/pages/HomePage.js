import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom"
import banner from "../img/banner.jpg";
import AppleIcon from '@material-ui/icons/Apple';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faCogs } from '@fortawesome/free-solid-svg-icons';

export function HomePage() {

    const history = useHistory();
    const handleAcceder = () => {
        history.push("/login")
    }
    return (
        <Fragment>
            <div className="home">
                <img className="w-100"
                    src={banner}
                    alt="banner"
                />
                <div className="encabezado encabezado d-flex flex-row justify-content-between">
                <h1>SEEKER</h1>
                <button className="btn-blue" onClick={handleAcceder}>
                    ACCEDER
                </button>
                </div>
                <div className="title">
            
                    <h1>PLATAFORMA SEEKER</h1>
            
                <p>Poderosa plataforma web de busquedas de multiples fuentes, ajustadas a tus necesidades</p>
                </div> 
                <div className="footer-home d-flex flex-row justify-content-center">
                    <div className="footer-column">
                        <h3>Noticias</h3>
                        <div className="text-center m-3">
                        <AppleIcon fontSize="large"/>
                        </div>
                        <p>Más de 30.000 noticias a tu disposición y e 
                        <br/> informacion al día</p>
                    </div> 
                    <div className="footer-column">  
                    <h3>Videos</h3>
                        <div className="text-center m-3">
                        <FontAwesomeIcon icon={faRocket} size="2x"/>
                        </div>
                        <p>Miles de videos relacionados con tus intereses y todo <br/>lo que puedas buscar</p>
                    </div> 
                    <div className="footer-column">
                        <h3>Artículos</h3>
                        <div className="text-center m-3">
                        <FontAwesomeIcon icon={faCogs} size="2x"/>
                        </div>
                        <p>Millones de artículos desde los cuales podrás tener<br/> información detallada para tus búsquedas</p>
                    </div>
                 </div>
            </div>
        </Fragment>
    )
}

