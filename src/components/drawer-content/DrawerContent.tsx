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

export const DrawerContent: React.FC = () => {
    let currentSemester = "Fall 2019";
    let courses = ["SENG 265","CSC 225","STAT 260","MATH 202"]
    let previousSemesters = ["Fall 2018","Spring 2018"]
    let previousCourses = [["CSC 106","CSC 110","HINF 130","PSYC 100A","MATH 109"],["CSC 115","PSYC 100B","MATH 100","MATH 122"]]
    let gpa = "3.2"

    //  Things to change:
    //      Previous Courses list: number of semesters and courses currently hardcoded, find a way to put list outside of return statement
    //      On any nested loop click, all nested lists open and close -> should only open and close specific nested list

    // CSS Styles
    const drawer_content: CSS.Properties = {
        backgroundColor: '#F5F5F5',
        paddingTop: '30px',
        paddingBottom: '30px',
        height: '100%',
      };
    const textStyles: CSS.Properties = {
        paddingLeft: '30px',
        paddingRight: '30px',
    }
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
    );
    
    function CurrentCourses() {
        const [selectedIndex, setSelectedIndex] = React.useState(10);
        const handleListItemClick = (
            event: React.MouseEvent<HTMLDivElement, MouseEvent>,
            index: number,
        ) => {
            setSelectedIndex(index);
        };

        return (
            <List 
            component="nav" 
            className={classes.root} >
            <ListItem 
                button
                selected={selectedIndex === 0}
                onClick={event => handleListItemClick(event, 0)} >
                <ListItemText primary={courses[0]} style={textStyles}/>
            </ListItem>
            <Divider/>
            <ListItem 
                button
                selected={selectedIndex === 1}
                onClick={event => handleListItemClick(event, 1)}>
                <ListItemText primary={courses[1]} style={textStyles}/>
            </ListItem>
            <Divider/>
            <ListItem 
                button
                selected={selectedIndex === 2}
                onClick={event => handleListItemClick(event, 2)}>
                <ListItemText primary={courses[2]} style={textStyles}/>
            </ListItem>
            <Divider/>
            <ListItem 
                button
                selected={selectedIndex === 3}
                onClick={event => handleListItemClick(event, 3)}>
                <ListItemText primary={courses[3]} style={textStyles}/>
            </ListItem>
        </List>
        )
    }

    function PreviousCourses() {
        const [open, setOpen] = React.useState(false);
        const [selectedIndex, setSelectedIndex] = React.useState(10);
        const handleNestedListItemClick = (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>,
          index: number,
        ) => {
            setSelectedIndex(index);
            setOpen(!open);
        };

        return(
            <List
            component="nav" 
            className={classes.root}>
            <ListItem 
                button
                selected={selectedIndex === 4}
                onClick={event => handleNestedListItemClick(event, 4)} >
                <ListItemText primary={previousSemesters[0]} style={textStyles}/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Divider/>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText style={textStyles} primary={previousCourses[0][0]} />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText style={textStyles} primary={previousCourses[0][1]} />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText style={textStyles} primary={previousCourses[0][2]} />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText style={textStyles} primary={previousCourses[0][3]} />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText style={textStyles} primary={previousCourses[0][4]} />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem 
                button
                selected={selectedIndex === 5}
                onClick={event => handleNestedListItemClick(event, 5)} >
                <ListItemText primary={previousSemesters[1]} style={textStyles}/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Divider/>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText style={textStyles} primary={previousCourses[1][0]} />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText style={textStyles} primary={previousCourses[1][1]} />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText style={textStyles} primary={previousCourses[1][2]} />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText style={textStyles} primary={previousCourses[1][3]} />
                    </ListItem>
                </List>
            </Collapse>
        </List>
        )

    }
    
    const classes = useStyles();
    return <div id='drawer_content' style={drawer_content}>
        <Box style={textStyles}>
            <h1 style={{paddingBottom:'0px',lineHeight:'0px'}}>{currentSemester}</h1>
            <h4 style={{paddingLeft:'15px',paddingTop:'0px'}}>GPA: {gpa}</h4>
            <h2>Courses:</h2>
        </Box>
        
        {CurrentCourses()}

        <Box style={textStyles}>
            <h2 style={{}}>Previous Courses:</h2>
        </Box>

        {PreviousCourses()}
        
    </div>
}

export default DrawerContent;