import React, { Fragment, useState } from 'react';
import { useAuth } from "../context/auth-context";
import { Videos } from "../components/Videos";
import { News } from "../components/News";
import { Articles } from "../components/Articles";
import {Typography, Button, Toolbar, Drawer, IconButton, AppBar} from '@material-ui/core';
import ExitToApp from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
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

    const { currentUser, setCurrentUser, setIsAuthenticated } = useAuth();
    const [drawer, setDrawer] = useState(false);
    const classes = useStyles()

    const toggleDrawer = () => {
        setDrawer(!drawer)
    };

    const history = useHistory();

    const logout = () => {
        localStorage.clear()
        history.push('/login')
    }

    return (
        <Fragment>
            <div className={classes.root}>
                <AppBar  position="static" className="bg-dark">
                    <Toolbar className="d-flex justify-content-between">
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <div className="d-flex">
                        <NotificationsNoneIcon />
                        <h5 className="m-0 ml-4">{currentUser.name}</h5>
                        </div>
                    </Toolbar> 
                </AppBar>
                <Drawer
                    open={drawer}
                    onClose={toggleDrawer}
                    style={{ width: 300 }}
                >
                    <Typography align="center">
                      <Button color="primary" onClick={toggleDrawer}>
                            <ExitToApp className="mt-5" onClick={logout}/>
                        </Button>
                    </Typography>
                </Drawer>
            </div>
            <div className="container">
                <div className="d-flex">
                    <News />
                    <div className="contenedor2">
                        <Videos />
                        <Articles options={"big data"} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}