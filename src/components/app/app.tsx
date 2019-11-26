import React from 'react'
import NavBar from '../nav/NavBar'
import { makeStyles, Theme, createStyles } from '@material-ui/core'

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
            <NavBar />
            <h1>Passr</h1>
            <p>Congratulation, you have successfully started Passr.</p>
        </div>
    )
}

export default App
