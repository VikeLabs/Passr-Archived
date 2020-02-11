import React, { useEffect, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
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
        </div>
    )
}

export default App
