import React from 'react'
import NavBar from '../nav/nav'
import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core'
import AddCourse from '../add-course/AddCourse'

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

            <AddCourse />
        </div>
    )
}

export default App
