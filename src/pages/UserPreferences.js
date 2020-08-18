import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function UserPreferences() {

    const history = useHistory();

    const [preferences, setPreferences] = useState({
        intereses: [],
        economicos: []
    });

    const handleIntereses = (e) => {
        console.log(e.target.value)
        let inputChanged = e.target.value;
        let array = preferences.intereses
        array.push(inputChanged)
        window.localStorage.setItem('intereses', JSON.stringify(array));
        setPreferences({
            ...preferences,
            intereses: array
        })
    }

    const handleEconomicos = (e) => {
        console.log(e.target.value)
        let inputChanged = e.target.value;
        let array = preferences.economicos
        array.push(inputChanged)
        window.localStorage.setItem('economicos', JSON.stringify(array));
        setPreferences({
            ...preferences,
            economicos: array
        })
    }
    console.log(preferences)

    const handleClick = () => {
        if (preferences.intereses.length > 0 && preferences.economicos.length > 0) {
            history.push("/dashboard");
        } else {
            alert("Debes seleccionar al menos un interés por categoría");
        }
    }


    return (
        <Fragment>
            <div className="d-flex flex-row justify-content-around m-5">
                <div className="mt-2 mr-5">
                    <h1 className="intereses">Intereses</h1>
                    <input type="checkbox" name="innovacion" value="innovacion" onChange={handleIntereses} />
                    <label>Innovación</label>
                    <br />
                    <input type="checkbox" name="desarrolloDeProductor" value="desarrolloDeProductor" onChange={handleIntereses} />
                    <label>Desarrollo de productos</label>
                    <br />
                    <input type="checkbox" name="vigilanciaTecnologica" value="vigilanciaTecnologica" onChange={handleIntereses} />
                    <label>Vigilancia tecnológica</label>
                    <br />
                    <input type="checkbox" name="prototipado" value="prototipado" onChange={handleIntereses} />
                    <label>Prototipado</label>
                    <br />
                    <input type="checkbox" name="desarrolloDeProductosServicios" value="desarrolloDeProductosServicios" onChange={handleIntereses} />
                    <label>Desarrollo de productos/servicios</label>
                    <br />
                    <input type="checkbox" name="nuevosNegocios" value="nuevosNegocios" onChange={handleIntereses} />
                    <label>Nuevos negocios</label>
                    <br />
                    <input type="checkbox" name="redesDeContacto" value="redesDeContacto" onChange={handleIntereses} />
                    <label>Redes de contactos</label>
                    <br />
                    <input type="checkbox" name="patentes" value="patentes" onChange={handleIntereses} />
                    <label>Patentes</label>
                    <br />
                    <input type="checkbox" name="gestionDeProyectos" value="gestionDeProyectos" onChange={handleIntereses} />
                    <label>Gestión de proyectos</label>
                    <br />
                    <input type="checkbox" name="comercializacionDeProductosYServicios" value="comercializacionDeProductosYServicios" onChange={handleIntereses} />
                    <label>Comercialización de productos y servicios</label>
                    <br />
                    <input type="checkbox" name="bigData" value="bigData" onChange={handleIntereses} />
                    <label>Big data</label>
                    <br />
                    <input type="checkbox" name="analitica" value="analitica" onChange={handleIntereses} />
                    <label>Analítica</label>
                    <br />
                    <input type="checkbox" name="software" value="software" onChange={handleIntereses} />
                    <label>Software</label>
                    <br />
                    <input type="checkbox" name="industria4.0" value="industria4.0" onChange={handleIntereses} />
                    <label>Industria 4.0</label>
                    <br />
                    <input type="checkbox" name="transformacionDigital" value="transformacionDigital" onChange={handleIntereses} />
                    <label>Transformación digital</label>
                    <br />
                    <input type="checkbox" name="megatendencias" value="megatendencias" onChange={handleIntereses} />
                    <label>Megatendencias</label>
                    <br />
                    <input type="checkbox" name="economiaYSociedad" value="economiaYSociedad" onChange={handleIntereses} />
                    <label>Economía y sociedad</label>
                    <br />
                    <input type="checkbox" name="demografia" value="demografia" onChange={handleIntereses} />
                    <label>Demografía</label>
                </div>

                <div className="d-flex flex-column">
                    <h1 className="sectoresEconomicos text-center">Sectores económicos</h1>
                    <div className="d-flex">
                        <div className="col-6">
                            <input type="checkbox" name="actuarialYSeguros" value="actuarialYSeguros" onChange={handleEconomicos} />
                            <label>Actuarial y seguros</label>
                            <br />
                            <input type="checkbox" name="administracionEmpresarial" value="administracionEmpresarial" onChange={handleEconomicos} />
                            <label>Administración Empresarial</label>
                            <br />
                            <input type="checkbox" name="agricultura" value="agricultura" onChange={handleEconomicos} />
                            <label>Agricultura</label>
                            <br />
                            <input type="checkbox" name="agroindustria" value="agroindustria" onChange={handleEconomicos} />
                            <label>Agroindustria</label>
                            <br />
                            <input type="checkbox" name="alimentosYBebidas" value="alimentosYBebidas" onChange={handleEconomicos} />
                            <label>Alimentos y bebidas</label>
                            <br />
                            <input type="checkbox" name="ambienteYDesarrolloSostenible" value="ambienteYDesarrolloSostenible" onChange={handleEconomicos} />
                            <label>Ambiente y desarrollo sostenible</label>
                            <br />
                            <input type="checkbox" name="automotriz" value="automotriz" onChange={handleEconomicos} />
                            <label>Automotriz</label>
                            <br />
                            <input type="checkbox" name="comercio" value="comercio" onChange={handleEconomicos} />
                            <label>Comercio</label>
                            <br />
                            <input type="checkbox" name="construccion" value="construccion" onChange={handleEconomicos} />
                            <label>Construcción</label>
                            <br />
                            <input type="checkbox" name="consultoria" value="consultoria" onChange={handleEconomicos} />
                            <label>Consultoría</label>
                            <br />
                            <input type="checkbox" name="cosmeticosYAseo" value="cosmeticosYAseo" onChange={handleEconomicos} />
                            <label>Cosméticos y aseo</label>
                            <br />
                            <input type="checkbox" name="dispositivosMedicos" value="dispositivosMedicos" onChange={handleEconomicos} />
                            <label>Dispositivos médicos</label>
                            <br />
                            <input type="checkbox" name="economiaNaranja" value="economiaNaranja" onChange={handleEconomicos} />
                            <label>Economía naranja</label>
                            <br />
                            <input type="checkbox" name="educacion" value="educacion" onChange={handleEconomicos} />
                            <label>Educación</label>
                            <br />
                            <input type="checkbox" name="electrodomesticos" value="electrodomesticos" onChange={handleEconomicos} />
                            <label>Electrodomésticos</label>
                            <br />
                        </div>
                        <div className="col-6">
                            <input type="checkbox" name="gobierno" value="gobierno" onChange={handleEconomicos} />
                            <label>Gobierno</label>
                            <br />
                            <input type="checkbox" name="hosteleriaYTurismo" value="hosteleriaYTurismo" onChange={handleEconomicos} />
                            <label>Hostelería y turismo</label>
                            <br />
                            <input type="checkbox" name="logistica" value="logistica" onChange={handleEconomicos} />
                            <label>Logística</label>
                            <br />
                            <input type="checkbox" name="manufactura" value="manufactura" onChange={handleEconomicos} />
                            <label>Manufactura</label>
                            <br />
                            <input type="checkbox" name="metalmecanica" value="metalmecanica" onChange={handleEconomicos} />
                            <label>Metalmecánica</label>
                            <br />
                            <input type="checkbox" name="mineroYEnergetico" value="mineroYEnergetico" onChange={handleEconomicos} />
                            <label>Minero y energético</label>
                            <br />
                            <input type="checkbox" name="posconsumo" value="posconsumo" onChange={handleEconomicos} />
                            <label>Posconsumo</label>
                            <br />
                            <input type="checkbox" name="salud" value="salud" onChange={handleEconomicos} />
                            <label>Salud</label>
                            <br />
                            <input type="checkbox" name="seguridadYSaludEnElTrabajo" value="seguridadYSaludEnElTrabajo" onChange={handleEconomicos} />
                            <label>Seguridad y salud en el trabajo</label>
                            <br />
                            <input type="checkbox" name="serviciosFinancieros" value="serviciosFinancieros" onChange={handleEconomicos} />
                            <label>Servicios financieros</label>
                            <br />
                            <input type="checkbox" name="sostenibilidad" value="sostenibilidad" onChange={handleEconomicos} />
                            <label>Sostenibilidad</label>
                            <br />
                            <input type="checkbox" name="tecnologiasDeInformacionYComunicaciones" value="tecnologiasDeInformacionYComunicaciones" onChange={handleEconomicos} />
                            <label>Tecnologías de información y comunicaciones</label>
                            <br />
                            <input type="checkbox" name="textil" value="textil" onChange={handleEconomicos} />
                            <label>Textil</label>
                            <br />
                            <input type="checkbox" name="trasporte" value="trasporte" onChange={handleEconomicos} />
                            <label>Transporte</label>
                            <br />
                            <input type="checkbox" name="transversal" value="transversal" onChange={handleEconomicos} />
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
