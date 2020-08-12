import React, { Fragment }  from 'react';
import { useHistory } from 'react-router-dom';

export default function UserPreferences() {

    const history = useHistory();
    const handleClick = () => {
        history.push("/dashboard")
    }

    return (
        <Fragment>
            
            <div className="container d-flex flex-row">
                   <div className="mr-5">
                   <h1 className="intereses">Intereses</h1>
                   <input type="checkbox" name="innovacion" value="innovacion"/>
                        <label>Innovación</label>
                        <br />
                        <input type="checkbox" name="desarrolloDeProductor" value="desarrolloDeProductor"/>
                        <label>Desarrollo de productos</label>
                        <br />
                        <input type="checkbox" name="vigilanciaTecnologica" value="vigilanciaTecnologica"/>
                        <label>Vigilancia tecnológica</label>
                        <br />
                        <input type="checkbox" name="prototipado" value="prototipado"/>
                        <label>Prototipado</label>
                        <br />
                        <input type="checkbox" name="desarrolloDeProductosServicios" value="desarrolloDeProductosServicios"/>
                        <label>Desarrollo de productos/servicios</label>
                        <br />
                        <input type="checkbox" name="nuevosNegocios" value="nuevosNegocios"/>
                        <label>Nuevos negocios</label>
                        <br />
                        <input type="checkbox" name="redesDeContacto" value="redesDeContacto"/>
                        <label>Redes de contactos</label>
                        <br />
                        <input type="checkbox" name="patentes" value="patentes"/>
                        <label>Patentes</label>
                        <br />
                        <input type="checkbox" name="gestionDeProyectos" value="gestionDeProyectos"/>
                        <label>Gestión de proyectos</label>
                        <br />
                        <input type="checkbox" name="comercializacionDeProductosYServicios" value="comercializacionDeProductosYServicios"/>
                        <label>Comercialización de productos y servicios</label>
                        <br />
                        <input type="checkbox" name="bigData" value="bigData"/>
                        <label>Big data</label>
                        <br />
                        <input type="checkbox" name="analitica" value="analitica"/>
                        <label>Analítica</label>
                        <br />
                        <input type="checkbox" name="software" value="software"/>
                        <label>Software</label>
                        <br />
                        <input type="checkbox" name="industria4.0" value="industria4.0"/>
                        <label>Industria 4.0</label>
                        <br />
                        <input type="checkbox" name="transformacionDigital" value="transformacionDigital"/>
                        <label>Transformación digital</label>
                        <br />
                        <input type="checkbox" name="megatendencias" value="megatendencias"/>
                        <label>Megatendencias</label>
                        <br />
                        <input type="checkbox" name="economiaYSociedad" value="economiaYSociedad"/>
                        <label>Economía y sociedad</label>
                        <br />
                        <input type="checkbox" name="demografia" value="demografia"/>
                        <label>Demografía</label>
                   </div>
               
                <div className="d-flex flex-column">
                    <h1 className="sectoresEconomicos">Sectores económicos</h1>
                        <div className="d-flex justify-content-between">
                        <div>
                            
                            <input type="checkbox" name="actuarialYSeguros" value="actuarialYSeguros"/>
                            <label>Actuarial y seguros</label>
                            <br />
                            <input type="checkbox" name="administracionEmpresarial" value="administracionEmpresarial"/>
                            <label>Administración Empresarial</label>
                            <br />
                            <input type="checkbox" name="agricultura" value="agricultura"/>
                            <label>Agricultura</label>
                            <br />
                            <input type="checkbox" name="agroindustria" value="agroindustria"/>
                            <label>Agroindustria</label>
                            <br />
                            <input type="checkbox" name="alimentosYBebidas" value="alimentosYBebidas"/>
                            <label>Alimentos y bebidas</label>
                            <br />
                            <input type="checkbox" name="ambienteYDesarrolloSostenible" value="ambienteYDesarrolloSostenible"/>
                            <label>Ambiente y desarrollo sostenible</label>
                            <br />
                            <input type="checkbox" name="automotriz" value="automotriz"/>
                            <label>Automotriz</label>
                            <br />
                            <input type="checkbox" name="comercio" value="comercio"/>
                            <label>Comercio</label>
                            <br />
                            <input type="checkbox" name="construccion" value="construccion"/>
                            <label>Construcción</label>
                            <br />
                            <input type="checkbox" name="consultoria" value="consultoria"/>
                            <label>Consultoría</label>
                            <br />
                            <input type="checkbox" name="cosmeticosYAseo" value="cosmeticosYAseo"/>
                            <label>Cosméticos y aseo</label>
                            <br />
                            <input type="checkbox" name="dispositivosMedicos" value="dispositivosMedicos"/>
                            <label>Dispositivos médicos</label>
                            <br />
                            <input type="checkbox" name="economiaNaranja" value="economiaNaranja"/>
                            <label>Economía naranja</label>
                            <br />
                            <input type="checkbox" name="educacion" value="educacion"/>
                            <label>Educación</label>
                            <br />
                            <input type="checkbox" name="electrodomesticos" value="electrodomesticos"/>
                            <label>Electrodomésticos</label>
                            <br />
                        </div>
                        <div className="ml-10">
                            <input type="checkbox" name="gobierno" value="gobierno"/>
                            <label>Gobierno</label> 
                            <br />
                            <input type="checkbox" name="hosteleriaYTurismo" value="hosteleriaYTurismo"/>
                            <label>Hostelería y turismo</label> 
                            <br />
                            <input type="checkbox" name="logistica" value="logistica"/>
                            <label>Logística</label> 
                            <br />
                            <input type="checkbox" name="manufactura" value="manufactura"/>
                            <label>Manufactura</label> 
                            <br />
                            <input type="checkbox" name="metalmecanica" value="metalmecanica"/>
                            <label>Metalmecánica</label> 
                            <br />
                            <input type="checkbox" name="mineroYEnergetico" value="mineroYEnergetico"/>
                            <label>Minero y energético</label> 
                            <br />
                            <input type="checkbox" name="posconsumo" value="posconsumo"/>
                            <label>Posconsumo</label> 
                            <br />
                            <input type="checkbox" name="salud" value="salud"/>
                            <label>Salud</label> 
                            <br />
                            <input type="checkbox" name="seguridadYSaludEnElTrabajo" value="seguridadYSaludEnElTrabajo"/>
                            <label>Seguridad y salud en el trabajo</label> 
                            <br />
                            <input type="checkbox" name="serviciosFinancieros" value="serviciosFinancieros"/>
                            <label>Servicios financieros</label> 
                            <br />
                            <input type="checkbox" name="sostenibilidad" value="sostenibilidad"/>
                            <label>Sostenibilidad</label> 
                            <br />
                            <input type="checkbox" name="tecnologiasDeInformacionYComunicaciones" value="tecnologiasDeInformacionYComunicaciones"/>
                            <label>Tecnologías de información y comunicaciones</label> 
                            <br />
                            <input type="checkbox" name="textil" value="textil"/>
                            <label>Textil</label> 
                            <br />
                            <input type="checkbox" name="trasporte" value="trasporte"/>
                            <label>Transporte</label> 
                            <br />
                            <input type="checkbox" name="transversal" value="transversal"/>
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
