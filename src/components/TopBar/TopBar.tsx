import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#ffffff',
        width: 'auto',
        height: '100%',
        borderRadius: theme.spacing(1),
        boxSizing: 'border-box',
    },
    tabs: {
        borderRadius: theme.spacing(1),
        height: '100%',
    },
}))

interface Props {
    options?: string[]
    selection: number
    onChange: (value: number) => void
}

function TopBar({ options, selection, onChange }: Props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {options && (
                <Tabs
                    value={selection}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(event, value) => onChange(value)}
                    aira-label="Course Selection"
                    className={classes.tabs}
                >
                    {options.map(val => (
                        <Tab key={val} label={val} />
                    ))}
                </Tabs>
            )}
        </div>
    )
}

export default TopBar
