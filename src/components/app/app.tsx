import React from 'react'
import NavBar from '../nav/nav'
import {
    makeStyles,
    Theme,
    createStyles,
    Grid,
    AppBar,
} from '@material-ui/core'
import ApplicationBar from '../ApplicationBar/ApplicationBar'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'grid',
        },
    }),
)

export const App: React.FC = () => {
    const classes = useStyles()
    return (
        <div id="app" className={classes.root}>
            <ApplicationBar />
            <h1>Content put here will not be rendered properly </h1>
        </div>
    )
}

export default App
