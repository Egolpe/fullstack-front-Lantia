import React, { Fragment } from 'react'


export function Search() {
    

    
    return(
        <Fragment>
            <div className="d-flex flex-row justify-content-center">    
                {/* <input  className="filter" type="text" placeholder="Escribe aquí tu búsqueda" /> */}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>                    
                    </div>
                        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>
                        <button className="btn-buscar p-1">Buscar</button>
            </div>
        </Fragment>
    )
}