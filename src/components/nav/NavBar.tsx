import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    makeStyles,
    createStyles,
    Theme,
    Drawer,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import DrawerContent from '../drawer-content/DrawerContent'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
)

export const NavBar: React.FC = () => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/* Should probably use a media query so this is only shown on small screens */}
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => {
                            console.log('Clicked menu button')
                            setOpen(true)
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Passr
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <DrawerContent />
            </Drawer>
        </div>
    )
}

export default NavBar
