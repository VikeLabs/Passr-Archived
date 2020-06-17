import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    TextField,
    Grid,
    Typography,
    Container,
    Button,
    Icon,
    Modal,
    DialogActions,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(2),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        maxHeight: '180vh',
        maxWidth: '77vw',
        overflow: 'auto',
        backgroundColor: 'white',
        borderRadius: '2%',
    },
    assignmentContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        paddingTop: theme.spacing(1),
        backgroundColor: '#e5f4fd',
        borderRadius: '2%',
    },
    assignments: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
    },
    modalStyle: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
    },
    buttonStyle: {
        float: 'right',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        padding: 'theme.spacing(2)',
    },
    button: {
        margin: theme.spacing(1),
    },
}))

interface Course {
    course: any
    setCourse: (e: any) => void
}

export default function Gradebook({ course, setCourse }: Course) {
    const classes = useStyles()
    const currentGradeList =
        course &&
        course.items &&
        course.items.map((item: any) =>
            item.weight && item.grade
                ? (item.weight * item.grade.numerator) / item.grade.denominator
                : 0,
        )
    const currentGradeTotal =
        currentGradeList &&
        currentGradeList.reduce((grade1: any, grade2: any) => grade1 + grade2)

    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Container
                component="main"
                maxWidth="md"
                className={classes.container}
            >
                <Typography
                    component="h5"
                    variant="h5"
                    className={classes.assignments}
                >
                    {course && course.name}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            disabled
                            id="currentGrade"
                            label="Current Grade"
                            name="currentGrade"
                            value={currentGradeTotal || ''}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="desiredGrade"
                            label="Desired Grade"
                            name="desiredGrade"
                            value={(course && course.desiredGrade) || ''}
                            onChange={event =>
                                setCourse({
                                    ...course,
                                    desiredGrade: event.target.value,
                                })
                            }
                        />
                    </Grid>
                </Grid>
                <div className={classes.assignmentContainer}>
                    {course &&
                        course.items &&
                        course.items.map((item: any, index: number) => (
                            <div key={item.name}>
                                <Typography
                                    component="h6"
                                    variant="h6"
                                    className={classes.assignments}
                                >
                                    {item.name}
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id={'weight' + item.name}
                                            label="Weight"
                                            name="weight"
                                            value={
                                                (item.weight * 100).toFixed(2) +
                                                '%'
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id={'grade' + item.name}
                                            label="Grade"
                                            name="grade"
                                            value={
                                                item.grade &&
                                                item.grade.numerator +
                                                    '/' +
                                                    item.grade.denominator
                                            }
                                        />
                                    </Grid>
                                </Grid>{' '}
                            </div>
                        ))}{' '}
                    <div className={classes.buttonStyle}>
                        {' '}
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<AddCircleOutlineIcon />}
                            onClick={handleOpen}
                        >
                            Add Item
                        </Button>
                    </div>{' '}
                </div>
            </Container>

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={classes.modalStyle}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <h2 id="simple-modal-title">
                                    Add a new course item{' '}
                                </h2>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id={'nameNewItem'}
                                    label="Assignment Name"
                                    name="nametNewItem"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id={'weightNewItem'}
                                    label="Weight"
                                    name="weightNewItem"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id={'gradeNewItem'}
                                    label="Grade"
                                    name="gradeNewItem"
                                />
                            </Grid>
                        </Grid>
                        <DialogActions>
                            <Button
                                autoFocus
                                onClick={handleClose}
                                color="primary"
                            >
                                Save changes
                            </Button>
                        </DialogActions>
                    </div>
                </Modal>
            </div>
        </>
    )
}
