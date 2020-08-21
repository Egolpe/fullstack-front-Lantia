import React, { Fragment, useReducer, useEffect, useState } from 'react';
import { getNews } from "../http/newsService";
import DescriptionIcon from '@material-ui/icons/Description';
import search from '../img/searchNotFound.jpg'


function newsReducer(state, action) {
    switch (action.type) {
      case "GET_NEWS":
        return {
          ...state,
          news: action.news
        };
      default:
        return state;
    }
  }

export function News() {

    const [state, dispatch] = useReducer(newsReducer, {
        news: [],
      });
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = () => {
      let text = document.getElementById('text').value
      console.log(text)
      setSearchTerm(text);
    };

    useEffect(() => {
        getNews().then(response => {
          dispatch({
            type: "GET_NEWS",
            news: response.data.articles
          });
        });
        const results = state.news.filter(event =>
          event.title.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [state.news]);
  
     
    return (
        <Fragment>
              <div className="d-flex flex-column justify-content-center">
                <div className="input-group mb-3" style={{width: "140%"}}>
                    <div className="input-group-prepend" style={{width: "170%"}}>
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>                    
                        <input type="text" id="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"  placeholder="Escribe tu búsqueda"/>
                        <button className="btn-buscar p-1" onClick={handleChange}>Buscar</button>
                      </div>  
                </div>
                
              <div className="news nav-item dropdown"> 
                <div className="d-flex flex-row justify-content-between">
                  <DescriptionIcon fontSize="large"/>
                  <h1>Noticias</h1>
                </div>
                  {searchResults.length >0 ? searchResults.map( (item, index) => (
                      <div key={index} >
                          <div className="card bg-light mb-3" styles="max-width: 18rem;">
                              <div className="card-header"></div>
                              <div className="card-body d-flex justify-content-between">
                                  <div>
                                      <h5 className="card-title"><b>{item.title}</b></h5>
                                      <p className="card-text">{item.description}</p>
                                  </div>
                                  {item.urlToImage!= null && <img src={item.urlToImage} className="card-img-rigth" alt={item.urlToImage} /> }
                              </div>
                          </div>
                      </div>
                  )) :
                  <div className="card bg-light mb-3" styles="max-width: 18rem;">
                    <div className="card-header"></div>
                      <div className="card-body d-flex justify-content-between">
                          <div>
                            <h5 className="card-title">No hay resultados para tu búsqueda</h5>
                            <img src={search} className="card-img-rigth" alt="search not found" style={{width: "100%"}} />
                          </div>
                      </div>
                  </div>
                }  
              </div>
            </div>
        </Fragment>
    )
}