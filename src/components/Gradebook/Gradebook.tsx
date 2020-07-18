import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    TextField,
    Grid,
    Typography,
    Container,
    Button,
    SvgIcon,
} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

import { CourseListItem } from './CourseListItem'
import { Course, CourseItem } from '../../services/storage'
import { AddItemModal } from './AddItemModal'

import { copyCourse } from './index'

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
        alignItems: 'right',
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
        display: 'flex',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: 'theme.spacing(1)',
    },
    button: {
        alignSelf: 'flex-end',
        margin: theme.spacing(1),
    },
}))

interface Props {
    course: Course
    updateCourse: (course: Course) => void
}

export function Gradebook({ course, updateCourse }: Props) {
    const classes = useStyles()

    function getCurrentGrade(courseItems: CourseItem[]) {
        const currentGrade = courseItems
            .map(item =>
                typeof item.grade === 'number'
                    ? item.weight * item.grade
                    : item.grade
                    ? (item.weight * item.grade.numerator) /
                      item.grade.denominator
                    : 0,
            )
            .reduce((grade1: number, grade2: number) => grade1 + grade2)
        return currentGrade
    }

    const currentGradeTotal =
        course && course.items && getCurrentGrade(course.items)

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
            {course ? (
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
                                    value={
                                        (course && course.desiredGrade) || ''
                                    }
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
                            <div className={classes.buttonStyle}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<AddCircleOutlineIcon />}
                                    onClick={handleOpen}
                                >
                                    Add Item
                                </Button>
                            </div>
                            {course &&
                                course.items &&
                                course.items.map((item, index) => (
                                    <div key={item.name}>
                                        <CourseListItem
                                            course={course}
                                            item={item}
                                            copyCourse={copyCourse}
                                            updateCourse={updateCourse}
                                            index={index}
                                        />
                                    </div>
                                ))}
                        </div>
                    </Container>
                    <div>
                        <AddItemModal
                            addItem={addItem}
                            open={open}
                            handleClose={handleClose}
                            setOpen={setOpen}
                        />
                    </div>{' '}
                </>
            ) : (
                <Container
                    component="main"
                    maxWidth="md"
                    className={classes.container}
                >
                    You have no courses listed.
                </Container>
            )}
        </>
    )
}
