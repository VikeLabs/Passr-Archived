import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core'
import ApplicationBar from '../ApplicationBar/ApplicationBar'

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
    return (
        <div id="app" className={classes.root}>
            <ApplicationBar drawerContent={drawerContent}>
                <h1>Content put here will be rendered properly </h1>
            </ApplicationBar>
        </div>
    )
}

export default App
