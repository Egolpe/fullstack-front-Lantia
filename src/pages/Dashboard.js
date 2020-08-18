import React, { Fragment } from 'react'
import { useAuth } from "../context/auth-context";
import { Search } from "../components/Search"
import { Videos } from "../components/Videos"
import { News } from "../components/News"
import { Articles } from "../components/Articles"
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export function Dashboard() {

    const history = useHistory();
    const { currentUser, setCurrentUser, setIsAuthenticated } = useAuth();
    console.log(currentUser);
    const classes = useStyles()
    console.log(window.localStorage)

    return (
        <Fragment>
            <div className={classes.root}>
                <AppBar className="bg-dark">
                    <Toolbar className>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <NotificationsNoneIcon />
                    </Toolbar>
                </AppBar>
            </div>
            <div className="container mt-5">
                <Search />
                <div className="d-flex">
                    <News />
                    <div className="ml-5">
                        <Videos />
                        <Articles options={"big data"} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}