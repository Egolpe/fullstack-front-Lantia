import React, { Fragment } from 'react'
import { Search } from "../components/Search"
import { Videos } from "../components/Videos"
import { News } from "../components/News"
import { Articles } from "../components/Articles"

export function Dashboard() {
    return(
        <Fragment>
            <div className="container mt-5">
                <Search />
                <div className="d-flex">
                    <News />
                    <div className="ml-5"> 
                        <Videos />
                        <Articles />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}