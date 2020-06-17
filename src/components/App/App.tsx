import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core'
import Gradebook from '../Gradebook/Gradebook'
import { loadUser, User, Course, loadCourse } from '../../services/storage'
import { Features } from '../../services/features'

function copyUser(user: User): User {
    return {
        ...user,
        semesters: user.semesters.map(semester => ({
            ...semester,
            courses: semester.courses.map(course => ({
                ...course,
                items: course.items.map(item => ({ ...item })),
            })),
        })),
    }
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'grid',
            gridTemplateColumns: '1.5fr 7fr 1fr',
            width: '100vw',
            height: '180vh',
            gridTemplateRows: '.5fr 10fr',
            gridTemplateAreas: `"sidebar topbar account"
                                "sidebar content content"`,
        },

        sidebar: {
            gridArea: 'sidebar',
            backgroundColor: '#ffdde2',
        },

        topbar: {
            gridArea: 'topbar',
            backgroundColor: 'cyan',
        },

        account: {
            gridArea: 'account',
            backgroundColor: 'limegreen',
        },

        content: {
            gridArea: 'content',
            backgroundColor: '#E5E5E5',
        },
    }),
)

export const App: React.FC = () => {
    const classes = useStyles()

    const [user, setUser] = useState<User | null>(null)
    const [currSemester, setCurrSemester] = useState<number>(0)
    const [selectedFeature, setSelectedFeature] = useState<Features>('calendar')
    const [currCourse, setCurrCourse] = useState<number>(0)

    const updateCourse = (updatedCourse: Course) => {
        if (!user) throw new Error('No user found')
        const newUser = copyUser(user)

        newUser.semesters[currSemester].courses[currCourse] = {
            ...updatedCourse,
        }

        setUser(newUser)
    }
    const [desiredGrade, setDesiredGrade] = useState<string>('')
    const [course, setCourse] = useState<Course | any>(null)

    useEffect(() => {
        loadUser('').then(user => {
            setUser(user)
            setCurrSemester(
                user.semesters.findIndex(
                    semester => user.defaultSemester === semester.name,
                ) || 0,
            )
        })
    }, [])

    useEffect(() => {
        loadCourse('').then(course => setCourse(course))
    }, [])

    return (
        <div id="app" className={classes.root}>
            <div id="sidebar" className={classes.sidebar}></div>
            <div id="topbar" className={classes.topbar}></div>
            <div id="account" className={classes.account}></div>
            <div id="content" className={classes.content}>
                <Gradebook course={course} setCourse={setCourse} />
            </div>
        </div>
    )
}

export default App
