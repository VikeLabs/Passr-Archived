import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import { Course } from '../../services/storage';
import dayjs from 'dayjs';
import dayjsutil from '@date-io/dayjs';


const useStyles = makeStyles((theme: Theme) => ({

    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {
        margin : "normal",
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

interface Props {
    addCourse: (course: Course) => void
}

export const AddCourse: React.FC<Props> = ({ addCourse }: Props) => {
    const classes = useStyles()
    const [courseName, setCourseName] = useState('')
    const [desiredGrade, setdesiredGrade] = useState('')
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        // reset data
        setCourseName(''),
        setdesiredGrade(''),
        setStartDate(dayjs())
        setEndDate(dayjs())
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log('SUBMIT')
        const courseData: Course = {
            name: courseName,
            destiredGrade: Number(desiredGrade),
            items: [],
        }
        addCourse(courseData)
        handleClose()
    }

    const [startDate, setStartDate] = React.useState<dayjs.Dayjs | null>(
        dayjs(),
    );

    const [endDate, setEndDate] = React.useState<dayjs.Dayjs | null>(
        dayjs(),
    );

    return (

        <div>

            <Button
                type="button"
                onClick={handleOpen}
                className={classes.button} 
                variant='contained'
                color='primary'
                >
                Add a course
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                >
                <div className={classes.modal}>
                    <TextField
                        name="courseName"
                        className={classes.textField}
                        label="Course Name"
                        placeholder="CSC 225"
                        value={courseName}
                        onChange={(event) => {
                            setCourseName(event.currentTarget.value)
                        }} />

                    <br />

                    <TextField
                        name="Desired Grade"
                        className={classes.textField}
                        label="Desired Grade"
                        placeholder="7.5"
                        value={desiredGrade}
                        onChange={(event) => {
                            setdesiredGrade(event.currentTarget.value)
                        }} />

                    <br />

                    <MuiPickersUtilsProvider utils={dayjsutil}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/DD/YYYY"
                                margin="normal"
                                id="startDate"
                                label="start Date"
                                value={startDate}
                                onChange={setStartDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'Change start date',
                                }}
                            />

                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/DD/YYYY"
                                margin="normal"
                                id="EndDate"
                                label="End Date"
                                value={endDate}
                                onChange={setEndDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'Change end date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>

                    <Button
                        className={classes.button} 
                        variant='text'
                        color='primary'
                        onClick={handleSubmit}
                        >Submit</Button>

                    <Button
                        className={classes.button} 
                        variant='text'
                        color='secondary'
                        onClick={handleClose}
                        >Cancel</Button>
                </div>
            </Modal>
        </div>
    )
}

export default AddCourse