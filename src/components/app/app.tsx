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
    const [user, setUser] = useState<undefined | User>(undefined)
    const updateCourse = (index: number, course: Course) => {
        if (!user) {
            return
        }
        const newUser = { ...user }
        newUser.courses[index] = course
        setUser(newUser)
    }

    useEffect(() => {
        loadUser('1').then(res => setUser(res))
    }, [])

    return (
        <div id="app" className={classes.root}>
            <ApplicationBar />
            <h1>Content put here will not be rendered properly </h1>
        </div>
    )
}

export default App
