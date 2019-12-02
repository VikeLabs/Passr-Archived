import React, { useState, useEffect } from 'react'
import { Course } from '../../services/storage'
import {
    Typography,
    TextField,
    Button,
    Grid,
    makeStyles,
    createStyles,
    Theme,
    Divider,
} from '@material-ui/core'
import { CourseItem } from '../course-item/CourseItem'

interface Props {
    course: Course
    updateCourse: (course: Course) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toggleButton: {
            width: 'fit-content',
            padding: theme.spacing(1),
            margin: theme.spacing(1),
            alignSelf: 'flex-end',
        },
        inputContainer: {
            justifyContent: 'space-between',
            padding: '8px',
            transition: 'all 1s ease-out',
        },
        root: {
            padding: theme.spacing(1),
        },
        title: {
            margin: theme.spacing(1),
        },
    }),
)

export const CourseContent: React.FC<Props> = ({
    course,
    updateCourse,
}: Props) => {
    const classes = useStyles()

    const [showGrade, setShowGrade] = useState(true)
    const [desiredGradeErr, setDesiredGradeErr] = useState(false)
    const [desiredGrade, setDesiredGrade] = useState(
        String(course.desiredGrade * 100),
    )

    useEffect(() => {
        setDesiredGrade(String(course.desiredGrade * 100))
    }, [course])

    return (
        <Grid container direction="column" className={classes.root}>
            <Typography variant="h3" className={classes.title}>
                {course.name}
            </Typography>
            {showGrade && (
                <Grid
                    className={classes.inputContainer}
                    container
                    key="inputContainer"
                >
                    <TextField
                        variant="filled"
                        label="Current Grade"
                        disabled
                        value="0.3"
                    />

                    <TextField
                        variant="filled"
                        label="Desired Grade"
                        onBlur={event => {
                            const desiredGrade =
                                Number(event.target.value) / 100
                            if (isNaN(desiredGrade)) {
                                setDesiredGradeErr(true)
                                return
                            }
                            if (desiredGradeErr) {
                                setDesiredGradeErr(false)
                            }
                            updateCourse({ ...course, desiredGrade })
                        }}
                        onChange={event => setDesiredGrade(event.target.value)}
                        value={desiredGrade}
                        error={desiredGradeErr}
                    />
                </Grid>
            )}

            <Button
                variant="text"
                onClick={() => setShowGrade(!showGrade)}
                color="secondary"
                className={classes.toggleButton}
            >
                {showGrade ? 'Hide Grade' : 'Show Grade'}
            </Button>
            {course.items.map((item, index) => {
                return (
                    <CourseItem
                        item={item}
                        key={index}
                        handleItemChange={item => {
                            const newCourse = {
                                ...course,
                                items: [...course.items],
                            }
                            newCourse.items[index] = item
                            updateCourse(newCourse)
                        }}
                    />
                )
            })}
        </Grid>
    )
}
