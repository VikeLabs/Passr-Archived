import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core'
import { loadUser, User } from '../../services/storage'
import { Features } from '../../services/features'
import TopBar from '../TopBar/TopBar'

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            display: 'grid',
            gridTemplateColumns: '1.5fr 7fr 1fr',
            width: '100vw',
            height: '100vh',
            boxSizing: 'border-box',
            gridTemplateRows: '1fr 10fr',
            gridTemplateAreas: `"sidebar topbar account"
                                "sidebar content content"`,
            backgroundColor: '#edf6ff',
            rowGap: `${theme.spacing(1)}px`,
            columnGap: `${theme.spacing(1)}px`,
            padding: theme.spacing(1),
        },

        sidebar: {
            gridArea: 'sidebar',
            backgroundColor: 'pink',
        },

        topbar: {
            gridArea: 'topbar',
            // backgroundColor: 'cyan',
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

export const App: React.FC = () => {
    const classes = useStyles()

    const [user, setUser] = useState<User | null>(null)
    const [selectedFeature, setSelectedFeature] = useState<Features>('calendar')
    const [topBarSelection, setTopBarSelection] = useState(0) // Needs to be reset on feature change

    useEffect(() => {
        loadUser('').then(user => setUser(user))
    }, [])

    return (
        <div id="app" className={classes.root}>
            <div id="sidebar" className={classes.sidebar}></div>
            <div id="topbar" className={classes.topbar}>
                <TopBar
                    options={undefined}
                    selection={topBarSelection}
                    onChange={setTopBarSelection}
                />
            </div>
            <div id="account" className={classes.account}></div>
            <div id="content" className={classes.content}></div>
        </div>
    )
}

export default App
