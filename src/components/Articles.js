import React, { Fragment, useReducer, useEffect } from 'react';
import { getArticles } from "../http/articlesService";
import DescriptionIcon from '@material-ui/icons/Description';

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
            const { pages } = response.data.query
            dispatch({
                type: "GET_ARTICLES",
                articles: Object.keys(pages).map(id => pages[id].extract.slice(0,200))
            });
        });
    }, []);


    console.log(state)
    return (
        <Fragment>
            <div className="articles nav-item dropdown">
                <div className="d-flex flex-row justify-content-between">
                    <DescriptionIcon fontSize="large" />
                    <h1>Artículos</h1>
                </div>
                {state.articles.length > 0 && state.articles.map((item, index) => (
                    <div key={index} >
                        <div className="card bg-light mb-3" styles="max-width: 18rem;">
                            <div className="card-header"></div>
                            <div className="card-body d-flex justify-content-between">
                                <div className="d-flex">
                                    <h5 className="card-title">{item.title}</h5>
                                    <div dangerouslySetInnerHTML={{ __html: item }} /> <p className="align-self-end">...</p>
                                </div>
                                {item.urlToImage != null && <img src={item.urlToImage} className="card-img-rigth" alt={item.urlToImage} />}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </Fragment>
    )
}
