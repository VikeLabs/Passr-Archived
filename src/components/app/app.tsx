import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core'
import ApplicationBar from '../ApplicationBar/ApplicationBar'
import { User, Course, loadUser } from '../../services/storage'
import CourseContent from '../course-content/CourseContent'
import { course1 } from '../../services/storage/mock'

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
            <ApplicationBar drawerContent={drawerContent}>
                <CourseContent
                    course={course1}
                    updateCourse={() => {}}
                ></CourseContent>
            </ApplicationBar>
        </div>
    )
}

export default App
