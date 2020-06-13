import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles, Grid } from '@material-ui/core'
import ApplicationBar from '../ApplicationBar/ApplicationBar'
import Gradebook from '../Gradebook/Gradebook'
import { loadUser, User, Fraction, Course, CourseItem, loadCourse} from '../../services/storage'
import { Features } from '../../services/features'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'grid',
            gridTemplateColumns: '1.5fr 7fr 1fr',
            width: '100vw',
            height: '100vh',
            gridTemplateRows: '1fr 10fr',
            gridTemplateAreas: `"sidebar topbar account"
                                "sidebar content content"`,
        },

        sidebar: {
            gridArea: 'sidebar',
            backgroundColor: 'pink',
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
            backgroundColor: 'yellow',
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

    const [user, setUser] = useState<User | null>(null)
    const [selectedFeature, setSelectedFeature] = useState<Features>('calendar')
    const [desiredGrade, setDesiredGrade] = useState<string>("")
    const [course, setCourse] = useState<Course | any>(null)

    useEffect(() => {
        loadUser('').then(user => setUser(user))
    }, [])

  useEffect(() => {
        loadCourse('').then(course => setCourse(course))
    }, [])


    return (
        <div id="app" className={classes.root}>
            <div id="sidebar" className={classes.sidebar}></div>
            <div id="topbar" className={classes.topbar}></div>
            <div id="account" className={classes.account}></div>
            <div id="content" className={classes.content}><Gradebook name={course} items = {course&& course.items} desiredGrade={desiredGrade} setDesiredGrade={event => setDesiredGrade(event.target.value)}/></div>
        </div>
    )
}

export default App
