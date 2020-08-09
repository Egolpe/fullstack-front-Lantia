import React, { Fragment }  from 'react';
import { useHistory } from 'react-router-dom';

export default function UserPreferences() {

    const history = useHistory();
    const handleClick = () => {
        history.push("/dashboard")
    }

    return (
        <Fragment>
            <div className="d-flex flex-row m-5">
               <div className="container">
                   <h1>Intereses</h1>
                   <div className="col-6">
                   <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Innovación</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Desarrollo de productos</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Vigilancia tecnollógica</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Prototipado</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Desarrollo de productos/servicios</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Nuevos negocios</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Redes de contactos</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Patentes</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Gestión de proyectos</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Comercialización de productos y servicios</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Big data</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Analítica</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Software</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Industria 4.0</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Transformación digital</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Megatendencias</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Economía y sociedad</label>
                        <br />
                        <input type="checkbox" name="intereses" value="intereses"/>
                        <label>Demografía</label>
                   </div>
               </div>
               <div className="col-6">
                   <h1>Sectores económicos</h1>
                    <div>
                    <   input type="checkbox" name="actuarialYSeguros" value="actuarialYSeguros"/>
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
                        <input type="checkbox" name="empaques" value="empaques"/>
                        <label>Empaques</label> 
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
