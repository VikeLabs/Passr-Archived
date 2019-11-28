import React from 'react'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import CSS from 'csstype'
import { user1 } from '../../services/storage/mock'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 500,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
)

// CSS Styles
const drawerContent: CSS.Properties = {
    backgroundColor: '#F5F5F5',
    paddingTop: '30px',
    paddingBottom: '30px',
    height: '100%',
}
const textStyles: CSS.Properties = {
    paddingLeft: '30px',
    paddingRight: '30px',
}

const CurrentCourses = (props: { courses: string[] }) => {
    const classes = useStyles()
    const [selectedIndex, setSelectedIndex] = React.useState(-1)
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index)
    }

    return (
        <List component="nav" className={classes.root}>
            {props.courses.map((course, index) => {
                return (
                    <>
                        <ListItem
                            button
                            selected={selectedIndex === index}
                            onClick={event => handleListItemClick(event, index)}
                        >
                            <ListItemText primary={course} style={textStyles} />
                        </ListItem>
                        <Divider />
                    </>
                )
            })}
        </List>
    )
}

function PreviousCourses(props: { previousSemesters: PreviousSemesters }) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(-1)
    const handleNestedListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index)
        setOpen(!open)
    }

    return (
        <List component="nav" className={classes.root}>
            {props.previousSemesters.map((previousSemester, index) => {
                return (
                    <>
                        <ListItem
                            button
                            selected={selectedIndex === index}
                            onClick={event =>
                                handleNestedListItemClick(event, index)
                            }
                        >
                            <ListItemText
                                primary={previousSemester.name}
                                style={textStyles}
                            />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Divider />
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {previousSemester.courses.map(
                                    (course, index) => {
                                        return (
                                            <>
                                                <ListItem
                                                    button
                                                    className={classes.nested}
                                                >
                                                    <ListItemText
                                                        style={textStyles}
                                                        primary={course}
                                                    />
                                                </ListItem>
                                                <Divider />{' '}
                                            </>
                                        )
                                    },
                                )}
                            </List>
                        </Collapse>
                    </>
                )
            })}
        </List>
    )
}

type PreviousSemesters = { name: string; courses: string[] }[]

export const DrawerContent: React.FC = () => {
    const currentSemester = 'Fall 2019'
    const courses = user1.courses.map(x => x.name)
    const previousSemesters: PreviousSemesters = [
        {
            name: 'Fall 2018',
            courses: [
                'CSC 106',
                'CSC 110',
                'HINF 130',
                'PSYC 100A',
                'MATH 109',
            ],
        },
        {
            name: 'Spring 2018',
            courses: ['CSC 115', 'PSYC 100B', 'MATH 100', 'MATH 122'],
        },
    ]

    const gpa = '3.2'

    //  Things to change:
    //      On any nested loop click, all nested lists open and close -> should only open and close specific nested list

    return (
        <div id="drawer_content" style={drawerContent}>
            <Box style={textStyles}>
                <h1 style={{ paddingBottom: '0px', lineHeight: '0px' }}>
                    {currentSemester}
                </h1>
                <h4 style={{ paddingLeft: '15px', paddingTop: '0px' }}>
                    GPA: {gpa}
                </h4>
                <h2>Courses:</h2>
            </Box>

            {CurrentCourses({ courses })}

            <Box style={textStyles}>
                <h2 style={{}}>Previous Courses:</h2>
            </Box>

            {PreviousCourses({ previousSemesters })}
        </div>
    )
}

export default DrawerContent
