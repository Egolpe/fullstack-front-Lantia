import React, { Fragment, useReducer, useEffect } from 'react';
import { getNews } from "../http/newsService";
import DescriptionIcon from '@material-ui/icons/Description';


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

    useEffect(() => {
        getNews().then(response => {
          dispatch({
            type: "GET_NEWS",
            news: response.data.articles
          });
        });
    }, []);

    console.log(state)
     
    return (
        <Fragment>
            <div className="news nav-item dropdown"> 
              <div className="d-flex flex-row justify-content-between">
                <DescriptionIcon fontSize="large"/>
                <h1>Noticias</h1>
              </div>
                {state.news.length >0 && state.news.map( (item, index) => (
                    <div key={index} >
                        <div className="card bg-light mb-3" styles="max-width: 18rem;">
                            <div className="card-header"></div>
                            <div className="card-body d-flex justify-content-between">
                                <div>
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                {item.urlToImage!= null && <img src={item.urlToImage} className="card-img-rigth" alt={item.urlToImage} /> }
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </Fragment>
    )
}