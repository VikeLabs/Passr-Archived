import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => ({

    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {
        //marginLeft: theme.spacing(1),
        //marginRight: theme.spacing(1),
        width: 200,
    },

    button: {
        display: 'grid',
    },
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper
    }
}))


export const AddCourse: React.FC = () => {
    const classes = useStyles()
    const [courseName, setCourseName] = useState('')
    const [CRNnumber, setCRNnumber] = useState('')
    const [open, setOpen] = React.useState(false);
    const [StartDate, setStartDate] = React.useState('');
    const [EndDate, setEndDate] = React.useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2019-11-24'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (

        <div>

            <button type="button" onClick={handleOpen}>
                Add a course
      </button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.modal}>
                    <TextField
                        name="courseName"
                        className={classes.textField}
                        label="Course Name"
                        placeholder="e.g) CSC225"
                        value={courseName}
                        onChange={(event) => {
                            setCourseName(event.currentTarget.value)
                        }} />

                    <br />

                    <TextField
                        name="CRNnumber"
                        className={classes.textField}
                        label="CRN"
                        placeholder="e.g) 12345"
                        value={CRNnumber}
                        onChange={(event) => {
                            setCRNnumber(event.currentTarget.value)
                        }} />

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
                                value={selectedDate}
                                onChange={handleDateChange}
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
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>

                    <Button className={classes.button}>submit</Button>
                </div>
            </Modal>

            {/* below, just testing if textfields are actually fetching the info*/}

            <p>course name: {courseName}</p>
            <p>CRN: {CRNnumber}</p>
            <p>Start date: {StartDate}</p>
            <p>End Date: {EndDate}</p>

        </div>
    )
}

export default AddCourse