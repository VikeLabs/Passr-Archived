import React from 'react'
import NavBar from '../nav/nav'
import Drawer from '../drawer-content/DrawerContent'
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core'

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
            {/* <Drawer /> */}
            <h1>Passr</h1>
            <p>Congratulation, you have successfully started Passr.</p>
        </div>
    )
}

export default App
