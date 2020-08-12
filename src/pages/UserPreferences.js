import React, { Fragment, useState }  from 'react';
import { useHistory } from 'react-router-dom';

export default function UserPreferences() {

    const history = useHistory();
    const handleClick = () => {
        history.push("/dashboard")
    }

    const [preferences, setPreferences] = useState({
        intereses: [],
        economicos: []
    });

    const handleIntereses = (e) => {
        console.log(e.target.value)
        let inputChanged = e.target.value;
        let array = preferences.intereses
        array.push(inputChanged)
        setPreferences({
            ...preferences,
            intereses: array
        })
    }

    const handleEconocmicos = (e) => {
        console.log(e.target.value)
        let inputChanged = e.target.value;
        let array = preferences.economicos
        array.push(inputChanged)
        setPreferences({
            ...preferences,
            economicos: array
        })
    }
console.log(preferences)
    return (
        <Fragment>            
            <div className="d-flex flex-row justify-content-around m-5">
                   <div className="mt-2 mr-5">
                   <h1 className="intereses">Intereses</h1>
                        <input type="checkbox" name="innovacion" value="innovacion" onChange={handleIntereses}/>
                        <label>Innovación</label>
                        <br />
                        <input type="checkbox" name="desarrolloDeProductor" value="desarrolloDeProductor" onChange={handleIntereses}/>
                        <label>Desarrollo de productos</label>
                        <br />
                        <input type="checkbox" name="vigilanciaTecnologica" value="vigilanciaTecnologica" onChange={handleIntereses}/>
                        <label>Vigilancia tecnológica</label>
                        <br />
                        <input type="checkbox" name="prototipado" value="prototipado" onChange={handleIntereses}/>
                        <label>Prototipado</label>
                        <br />
                        <input type="checkbox" name="desarrolloDeProductosServicios" value="desarrolloDeProductosServicios" onChange={handleIntereses}/>
                        <label>Desarrollo de productos/servicios</label>
                        <br />
                        <input type="checkbox" name="nuevosNegocios" value="nuevosNegocios" onChange={handleIntereses}/>
                        <label>Nuevos negocios</label>
                        <br />
                        <input type="checkbox" name="redesDeContacto" value="redesDeContacto" onChange={handleIntereses}/>
                        <label>Redes de contactos</label>
                        <br />
                        <input type="checkbox" name="patentes" value="patentes" onChange={handleIntereses}/>
                        <label>Patentes</label>
                        <br />
                        <input type="checkbox" name="gestionDeProyectos" value="gestionDeProyectos" onChange={handleIntereses}/>
                        <label>Gestión de proyectos</label>
                        <br />
                        <input type="checkbox" name="comercializacionDeProductosYServicios" value="comercializacionDeProductosYServicios" onChange={handleIntereses}/>
                        <label>Comercialización de productos y servicios</label>
                        <br />
                        <input type="checkbox" name="bigData" value="bigData" onChange={handleIntereses}/>
                        <label>Big data</label>
                        <br />
                        <input type="checkbox" name="analitica" value="analitica" onChange={handleIntereses}/>
                        <label>Analítica</label>
                        <br />
                        <input type="checkbox" name="software" value="software" onChange={handleIntereses}/>
                        <label>Software</label>
                        <br />
                        <input type="checkbox" name="industria4.0" value="industria4.0" onChange={handleIntereses}/>
                        <label>Industria 4.0</label>
                        <br />
                        <input type="checkbox" name="transformacionDigital" value="transformacionDigital" onChange={handleIntereses}/>
                        <label>Transformación digital</label>
                        <br />
                        <input type="checkbox" name="megatendencias" value="megatendencias" onChange={handleIntereses}/>
                        <label>Megatendencias</label>
                        <br />
                        <input type="checkbox" name="economiaYSociedad" value="economiaYSociedad" onChange={handleIntereses}/>
                        <label>Economía y sociedad</label>
                        <br />
                        <input type="checkbox" name="demografia" value="demografia" onChange={handleIntereses}/>
                        <label>Demografía</label>
                   </div>
               
                <div className="d-flex flex-column">
                    <h1 className="sectoresEconomicos text-center">Sectores económicos</h1>
                        <div className="d-flex">
                        <div className="col-6">
                            
                            <input type="checkbox" name="actuarialYSeguros" value="actuarialYSeguros" onChange={handleEconocmicos}/>
                            <label>Actuarial y seguros</label>
                            <br />
                            <input type="checkbox" name="administracionEmpresarial" value="administracionEmpresarial" onChange={handleEconocmicos}/>
                            <label>Administración Empresarial</label>
                            <br />
                            <input type="checkbox" name="agricultura" value="agricultura" onChange={handleEconocmicos}/>
                            <label>Agricultura</label>
                            <br />
                            <input type="checkbox" name="agroindustria" value="agroindustria" onChange={handleEconocmicos}/>
                            <label>Agroindustria</label>
                            <br />
                            <input type="checkbox" name="alimentosYBebidas" value="alimentosYBebidas" onChange={handleEconocmicos}/>
                            <label>Alimentos y bebidas</label>
                            <br />
                            <input type="checkbox" name="ambienteYDesarrolloSostenible" value="ambienteYDesarrolloSostenible" onChange={handleEconocmicos}/>
                            <label>Ambiente y desarrollo sostenible</label>
                            <br />
                            <input type="checkbox" name="automotriz" value="automotriz" onChange={handleEconocmicos}/>
                            <label>Automotriz</label>
                            <br />
                            <input type="checkbox" name="comercio" value="comercio" onChange={handleEconocmicos}/>
                            <label>Comercio</label>
                            <br />
                            <input type="checkbox" name="construccion" value="construccion" onChange={handleEconocmicos}/>
                            <label>Construcción</label>
                            <br />
                            <input type="checkbox" name="consultoria" value="consultoria" onChange={handleEconocmicos}/>
                            <label>Consultoría</label>
                            <br />
                            <input type="checkbox" name="cosmeticosYAseo" value="cosmeticosYAseo" onChange={handleEconocmicos}/>
                            <label>Cosméticos y aseo</label>
                            <br />
                            <input type="checkbox" name="dispositivosMedicos" value="dispositivosMedicos" onChange={handleEconocmicos}/>
                            <label>Dispositivos médicos</label>
                            <br />
                            <input type="checkbox" name="economiaNaranja" value="economiaNaranja" onChange={handleEconocmicos}/>
                            <label>Economía naranja</label>
                            <br />
                            <input type="checkbox" name="educacion" value="educacion" onChange={handleEconocmicos}/>
                            <label>Educación</label>
                            <br />
                            <input type="checkbox" name="electrodomesticos" value="electrodomesticos" onChange={handleEconocmicos}/>
                            <label>Electrodomésticos</label>
                            <br />
                        </div>
                        <div className="col-6">
                            <input type="checkbox" name="gobierno" value="gobierno" onChange={handleEconocmicos}/>
                            <label>Gobierno</label> 
                            <br />
                            <input type="checkbox" name="hosteleriaYTurismo" value="hosteleriaYTurismo" onChange={handleEconocmicos}/>
                            <label>Hostelería y turismo</label> 
                            <br />
                            <input type="checkbox" name="logistica" value="logistica" onChange={handleEconocmicos}/>
                            <label>Logística</label> 
                            <br />
                            <input type="checkbox" name="manufactura" value="manufactura" onChange={handleEconocmicos}/>
                            <label>Manufactura</label> 
                            <br />
                            <input type="checkbox" name="metalmecanica" value="metalmecanica" onChange={handleEconocmicos}/>
                            <label>Metalmecánica</label> 
                            <br />
                            <input type="checkbox" name="mineroYEnergetico" value="mineroYEnergetico" onChange={handleEconocmicos}/>
                            <label>Minero y energético</label> 
                            <br />
                            <input type="checkbox" name="posconsumo" value="posconsumo" onChange={handleEconocmicos}/>
                            <label>Posconsumo</label> 
                            <br />
                            <input type="checkbox" name="salud" value="salud" onChange={handleEconocmicos}/>
                            <label>Salud</label> 
                            <br />
                            <input type="checkbox" name="seguridadYSaludEnElTrabajo" value="seguridadYSaludEnElTrabajo" onChange={handleEconocmicos}/>
                            <label>Seguridad y salud en el trabajo</label> 
                            <br />
                            <input type="checkbox" name="serviciosFinancieros" value="serviciosFinancieros" onChange={handleEconocmicos}/>
                            <label>Servicios financieros</label> 
                            <br />
                            <input type="checkbox" name="sostenibilidad" value="sostenibilidad" onChange={handleEconocmicos}/>
                            <label>Sostenibilidad</label> 
                            <br />
                            <input type="checkbox" name="tecnologiasDeInformacionYComunicaciones" value="tecnologiasDeInformacionYComunicaciones" onChange={handleEconocmicos}/>
                            <label>Tecnologías de información y comunicaciones</label> 
                            <br />
                            <input type="checkbox" name="textil" value="textil" onChange={handleEconocmicos}/>
                            <label>Textil</label> 
                            <br />
                            <input type="checkbox" name="trasporte" value="trasporte" onChange={handleEconocmicos}/>
                            <label>Transporte</label> 
                            <br />
                            <input type="checkbox" name="transversal" value="transversal" onChange={handleEconocmicos}/>
                            <label>Transversal (Ciencia, tecnología, negocios, etc.)</label>
                        </div>
                        </div>
                    </div>
                </div>
              
            <div className="text-center">
                <button className="btn-blue" onClick={handleClick}>
                    Página principal
                </button>
            </div>
        </Fragment>
    )
}
