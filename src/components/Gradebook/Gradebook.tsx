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

import { Course, CourseItem } from '../../services/storage'
import { AddItem } from './AddItem'

const fractionRegex = /^([0-9]+)\/([0-9]+)$/

function copyCourse(course: Course): Course {
    return {
        ...course,
        items: course.items.map(item => ({ ...item })),
    }
}

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

interface Props {
    course: Course
    updateCourse: (course: Course) => void
}

export function Gradebook({ course, updateCourse }: Props) {
    const classes = useStyles()
    const currentGradeList =
        course &&
        course.items &&
        course.items.map(item =>
            typeof item.grade === 'number'
                ? item.weight * item.grade
                : item.grade
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

    const addItem = (item: CourseItem) => {
        const newCourse = copyCourse(course)
        newCourse.items.push(item)
        updateCourse(newCourse)
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
                                updateCourse({
                                    ...course,
                                    desiredGrade:
                                        Number(event.target.value) || 0,
                                })
                            }
                            // Think about number validation for this component
                        />
                    </Grid>
                </Grid>
                <div className={classes.assignmentContainer}>
                    {course &&
                        course.items &&
                        course.items.map((item, index) => {
                            const value = !item.grade
                                ? ''
                                : typeof item.grade === 'number'
                                ? `${item.grade}`
                                : `${item.grade.numerator}/${item.grade.denominator}`
                            return (
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
                                                    (item.weight * 100).toFixed(
                                                        2,
                                                    ) + '%'
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
                                                value={value}
                                                onChange={event => {
                                                    const newCourse = copyCourse(
                                                        course,
                                                    )
                                                    newCourse.items[
                                                        index
                                                    ].grade = event.target.value // parse the event.target.value into a number/Fraction
                                                }}
                                                // How to display the value depending on if it is a number of a Fraction
                                            />
                                        </Grid>
                                    </Grid>{' '}
                                </div>
                            )
                        })}{' '}
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
                <AddItem
                    addItem={addItem}
                    open={open}
                    handleClose={handleClose}
                />
            </div>
        </>
    )
}
