import React, { Fragment, useReducer, useEffect } from 'react';
import { getArticles } from "../http/articlesService";

function articlesReducer(state, action) {
    switch (action.type) {
      case "GET_ARTICLES":
        return {
          ...state,
          articles: action.articles
        };
      default:
        return state;
    }
  }

export function Articles() {

    const [state, dispatch] = useReducer(articlesReducer, {
        articles: [],
      });

    useEffect(() => {
        getArticles().then(response => {
            console.log(response)
          dispatch({
            type: "GET_ARTICLES",
            articles: response.data.query.search
          });
        });
    }, []);

    console.log(state)
     
    return (
        <Fragment>
            <div className="articles nav-item dropdown"> 
                <h1>Noticias</h1>
                {state.articles.length >0 && state.articles.map( (item, index) => (
                    <div key={index} >
                        <div className="card bg-light mb-3" styles="max-width: 18rem;">
                            <div className="card-header"></div>
                            <div className="card-body d-flex justify-content-between">
                                <div>
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{}</p>
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