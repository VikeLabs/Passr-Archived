import React, { useEffect, useState } from 'react'
import NavBar from '../nav/NavBar'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
import { loadUser, User, Course } from '../../services/storage'
import { CourseContent } from '../course-content/CourseContent'

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
            <NavBar />
            {user && user.courses.length > 0 && (
                <CourseContent
                    course={user.courses[0]}
                    updateCourse={course => updateCourse(0, course)}
                />
            )}
        </div>
    )
}

export default App
