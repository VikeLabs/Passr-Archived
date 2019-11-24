import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


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

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    <Button className={classes.button}>submit</Button>

                </div>

            </Modal>

            {/* below, just testing if textfields are actually fetching the info*/}

            <p>course name: {courseName}</p>
            <p>CRN: {CRNnumber}</p>

        </div>
    )
}

export default AddCourse