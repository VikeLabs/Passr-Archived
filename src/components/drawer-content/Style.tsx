import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        drawerContent: {
            backgroundColor: theme.palette.background.default,
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            height: '100%',
            // Should the drawer have a max width?
        },
        textStyles: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            '& h1': {
                paddingBottom: theme.spacing(0),
                lineHeight: theme.spacing(0),
            }
        },
        
    }),
)

export default useStyles
