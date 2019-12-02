import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {
        margin: 'normal',
        //marginLeft: theme.spacing(1),
        //marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        // display: 'grid',
    },
    buttonContainer: {
        justifyContent: 'space-around',
        justifyItems: 'center',
    },
    modal: {
        position: 'absolute',
        top: `calc(50% -  100px)`,
        left: `calc(50% - 200px)`,
        padding: theme.spacing(2),
        width: 400,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonContainer: {
        textAlign: 'center',
    },
}))

export const AddCourse: React.FC = () => {
    const classes = useStyles()
    const [courseName, setCourseName] = useState('')
    const [CRNnumber, setCRNnumber] = useState('')
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const [startDate, setStartDate] = React.useState<Date | null>(new Date())

    const [endDate, setEndDate] = React.useState<Date | null>(new Date())

    return (
        <div className={classes.addButtonContainer}>
            <Button
                type="button"
                onClick={handleOpen}
                className={classes.button}
                variant="contained"
                color="primary"
            >
                Add a course
            </Button>

            <Modal open={open} onClose={handleClose}>
                <div className={classes.modal}>
                    <TextField
                        name="courseName"
                        className={classes.textField}
                        label="Course Name"
                        placeholder="e.g) CSC225"
                        value={courseName}
                        onChange={event => {
                            setCourseName(event.currentTarget.value)
                        }}
                    />

                    <br />

                    <TextField
                        name="CRNnumber"
                        className={classes.textField}
                        label="CRN"
                        placeholder="e.g) 12345"
                        value={CRNnumber}
                        onChange={event => {
                            setCRNnumber(event.currentTarget.value)
                        }}
                    />

                    <br />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="startDate"
                                label="start Date"
                                value={startDate}
                                onChange={setStartDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />

                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="EndDate"
                                label="End Date"
                                value={endDate}
                                onChange={setEndDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <Grid container className={classes.buttonContainer}>
                        <Button
                            className={classes.button}
                            variant="text"
                            color="secondary"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            className={classes.button}
                            variant="text"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Grid>
                </div>
            </Modal>

            {/* below, just testing if textfields are actually fetching the info*/}

            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>course name: {courseName}</p>
            <p>CRN: {CRNnumber}</p>

            <p>Start date: {startDate ? startDate.toString() : ''}</p>
            <p>End Date: {endDate ? endDate.toString() : ''}</p> */}
        </div>
    )
}

export default AddCourse
