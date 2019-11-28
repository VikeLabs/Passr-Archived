import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import CSS from 'csstype';
import {user1} from '../../services/storage/mock'

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
<<<<<<< HEAD
);
=======
)
>>>>>>> 7dee131a58c58b5e0ddf14a21e459db697447904

// CSS Styles
const drawer_content: CSS.Properties = {
    backgroundColor: '#F5F5F5',
    paddingTop: '30px',
    paddingBottom: '30px',
    height: '100%',
<<<<<<< HEAD
};
=======
}
>>>>>>> 7dee131a58c58b5e0ddf14a21e459db697447904
const textStyles: CSS.Properties = {
    paddingLeft: '30px',
    paddingRight: '30px',
}

<<<<<<< HEAD
const CurrentCourses = (props: { courses: string[]}) => {
    const classes1 = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(10);
=======
const CurrentCourses = (props: { courses: string[] }) => {
    const classes1 = useStyles()
    const [selectedIndex, setSelectedIndex] = React.useState(10)
>>>>>>> 7dee131a58c58b5e0ddf14a21e459db697447904
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
<<<<<<< HEAD
        setSelectedIndex(index);
    };

    return (
        <List
            component="nav"
            className={classes1.root}>
            {props.courses.map((course, index) => {
                return (<><ListItem
                    button
                    selected={selectedIndex === index}
                    onClick={event => handleListItemClick(event, index)}>
                    <ListItemText primary={course} style={textStyles} />
                </ListItem>
                    <Divider />
                </>
=======
        setSelectedIndex(index)
    }

    return (
        <List component="nav" className={classes1.root}>
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
>>>>>>> 7dee131a58c58b5e0ddf14a21e459db697447904
                )
            })}
        </List>
    )
}

<<<<<<< HEAD
function PreviousCourses(props: {previousSemesters: PreviousSemesters}) {
    const classes2 = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
=======
function PreviousCourses(props: { previousSemesters: PreviousSemesters }) {
    const classes2 = useStyles()
    const [open, setOpen] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(-1)
>>>>>>> 7dee131a58c58b5e0ddf14a21e459db697447904
    const handleNestedListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
<<<<<<< HEAD
        setSelectedIndex(index);
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            className={classes2.root}>
            {props.previousSemesters.map((previousSemester, index) => {
                return (<><ListItem
                    button
                    selected={selectedIndex === index}
                    onClick={event => handleNestedListItemClick(event, index)}>
                    <ListItemText primary={previousSemester.name} style={textStyles} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                    <Divider />
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {previousSemester.courses.map((course, index) => {
                                return (<>
                                    <ListItem button className={classes2.nested}>
                                        <ListItemText style={textStyles} primary={course} />
                                    </ListItem>
                                    <Divider /> </>
                                )
                            })}
                        </List>
                    </Collapse></>
                )
            })}
        </List>)
}

type PreviousSemesters = {name: string, courses: string[]}[]

export const DrawerContent: React.FC = () => {
    let currentSemester = "Fall 2019";
    let courses = user1.courses.map(x => x.name);
    const previousSemesters: PreviousSemesters = [{
        name: "Fall 2018",
        courses: ["CSC 106", "CSC 110", "HINF 130", "PSYC 100A", "MATH 109"],
    },
    {
        name: "Spring 2018",
        courses: ["CSC 115", "PSYC 100B", "MATH 100", "MATH 122"]
    }]

    let gpa = "3.2"
=======
        setSelectedIndex(index)
        setOpen(!open)
    }

    return (
        <List component="nav" className={classes2.root}>
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
                                                    className={classes2.nested}
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
>>>>>>> 7dee131a58c58b5e0ddf14a21e459db697447904

    //  Things to change:
    //      On any nested loop click, all nested lists open and close -> should only open and close specific nested list

<<<<<<< HEAD



    return <div id='drawer_content' style={drawer_content}>
        <Box style={textStyles}>
            <h1 style={{ paddingBottom: '0px', lineHeight: '0px' }}>{currentSemester}</h1>
            <h4 style={{ paddingLeft: '15px', paddingTop: '0px' }}>GPA: {gpa}</h4>
            <h2>Courses:</h2>
        </Box>

        {CurrentCourses({courses})}

        <Box style={textStyles}>
            <h2 style={{}}>Previous Courses:</h2>
        </Box>

        {PreviousCourses({previousSemesters})}

    </div>
}

export default DrawerContent;
=======
    return (
        <div id="drawer_content" style={drawer_content}>
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
>>>>>>> 7dee131a58c58b5e0ddf14a21e459db697447904
