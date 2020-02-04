import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {
    makeStyles,
    useTheme,
    Theme,
    createStyles,
} from '@material-ui/core/styles'
import { DrawerContent } from '../drawer-content/DrawerContent'
import { Course, User, loadUser } from '../../services/storage'
import { CourseContent } from '../course-content/CourseContent'
import  UploadDialog  from '../upload-dialog/UploadDialog'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex-end',
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            maxWidth: '500px',
            padding: theme.spacing(3),
        },
    }),
)

export default function ApplicationBar() {
    const classes = useStyles()
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = React.useState(false)

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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = <DrawerContent></DrawerContent>

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" noWrap>
                        Passr
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        ></IconButton>
                    </div>
                </Toolbar>
                
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <UploadDialog/>
                {/* Insert CourseContent here */}
                {user && (
                    <CourseContent
                        updateCourse={course => updateCourse(0, course)}
                        course={user.courses[0]}
                    />
                )}
            </main>
        </div>
    )
}
