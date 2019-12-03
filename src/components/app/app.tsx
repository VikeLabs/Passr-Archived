import React, { useState } from 'react'
import NavBar from '../nav/nav'
import { makeStyles, Theme, createStyles, Grid, AppBar } from '@material-ui/core'
import ApplicationBar from '../ApplicationBar/ApplicationBar'
import SignInButton from '../sign-in/sign-in'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'grid',
        },
    }),
)

const drawerContent = (
    <div>
        <h1>A drawer</h1>
    </div>
)

export const App: React.FC = () => {

    const classes = useStyles()
    
    const [isSignedIn, setIsSignedIn] = useState(false)

    const changeSignIn = () => {
        setIsSignedIn(!isSignedIn)
    }
    
    return (
        <div id="app" className={classes.root}>
            <ApplicationBar drawerContent={drawerContent}>
                <h1>Content put here will be rendered properly </h1>
            </ApplicationBar>
        </div>
    )
}

export default App
