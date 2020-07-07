import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import {
    TextField,
    Grid,
    Typography,
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DeleteIcon from '@material-ui/icons/Delete'
import { DeleteItemModal } from './DeleteItemModal'

import { Course, CourseItem } from '../../services/storage'

const useStyles = makeStyles(theme => ({
    assignments: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'left',
    },

    expanded: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
    },

    assignmentSummary: {
        width: '100px',
        padding: theme.spacing(1),
        color: '#0080FF',
        backgroundColor: '#e5f4fd',
        textAlign: 'center',
        borderRadius: '7%',
    },

    deleteButton: {
        marginTop: theme.spacing(2),
        marginBottom: 0,
        marginRight: theme.spacing(1),
    },

    textFieldStyle: {
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                boxShadow: `${fade(
                    theme.palette.primary.main,
                    0.25,
                )} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.dark,
            },
        },
    },
}))

interface Props {
    course: Course
    updateCourse: (course: Course) => void
    copyCourse: (course: Course) => Course
    item: CourseItem
    index: number
}

export function CourseListItem({
    course,
    updateCourse,
    copyCourse,
    item,
    index,
}: Props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const assignmentGrade = !item.grade
        ? ''
        : typeof item.grade === 'number'
        ? `${item.grade}`
        : `${item.grade.numerator}/${item.grade.denominator}`

    const fractionRegex = /^([0-9]+)\/([0-9]+)$/
    const decimalRegex = /^[0-1]{0,1}(\.[0-9]+)?$/

    const handleChangeWeightGrade = (
        weightValue: string,
        gradeValue: string,
    ) => {
        const newCourse = copyCourse(course)
        const newGrade = gradeValue.match(fractionRegex)
            ? {
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  numerator: Number(gradeValue.match(fractionRegex)![1]),
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  denominator: Number(gradeValue.match(fractionRegex)![2]),
              }
            : parseFloat(gradeValue)
        newCourse.items[index].grade = newGrade ? newGrade : item.grade
        newCourse.items[index].weight = weightValue
            ? parseFloat(weightValue)
            : item.weight
        updateCourse(newCourse)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const [weightInput, setWeightInput] = useState('')
    const [gradeInput, setGradeInput] = useState('')

    const matchFractionDecimal = (input: string) => {
        return input.match(fractionRegex) || input.match(decimalRegex)
    }

    return (
        <>
            <ExpansionPanel className={classes.expanded}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justify="space-around"
                    >
                        <Grid item md={6}>
                            <Typography
                                component="h6"
                                variant="h6"
                                color="primary"
                                className={classes.assignments}
                            >
                                {item.name}
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography
                                component="h6"
                                variant="subtitle2"
                                className={classes.assignmentSummary}
                            >
                                Weight: {item.weight}
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography
                                component="h6"
                                variant="subtitle2"
                                className={classes.assignmentSummary}
                            >
                                Grade: {assignmentGrade}
                            </Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                color="primary"
                                component="h6"
                                variant="subtitle2"
                            >
                                Edit your {item.name} information.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.textFieldStyle}
                                variant="outlined"
                                required
                                fullWidth
                                id={'weight' + item.name}
                                label="Weight"
                                name="weight"
                                value={weightInput}
                                onChange={event => {
                                    setWeightInput(event.target.value)
                                }}
                                helperText={
                                    weightInput.match(decimalRegex)
                                        ? ''
                                        : 'Enter a decimal between 0 and 1'
                                }
                                error={!weightInput.match(decimalRegex)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.textFieldStyle}
                                variant="outlined"
                                required
                                fullWidth
                                id={'grade' + item.name}
                                label="Grade"
                                name="grade"
                                value={gradeInput}
                                onChange={event =>
                                    setGradeInput(event.target.value)
                                }
                                helperText={
                                    matchFractionDecimal(gradeInput)
                                        ? ''
                                        : 'Enter a fraction or a decimal between 0 and 1'
                                }
                                error={!matchFractionDecimal(gradeInput)}
                            />
                        </Grid>
                        <Grid container justify="flex-end">
                            <Button
                                className={classes.deleteButton}
                                autoFocus
                                endIcon={<DeleteIcon />}
                                onClick={() => handleOpen()}
                                variant="outlined"
                                color="secondary"
                            >
                                Delete
                            </Button>
                            <Button
                                className={classes.deleteButton}
                                autoFocus
                                onClick={() => {
                                    handleChangeWeightGrade(
                                        weightInput,
                                        gradeInput,
                                    )
                                }}
                                variant="outlined"
                                color="primary"
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <DeleteItemModal
                course={course}
                handleClose={handleClose}
                updateCourse={updateCourse}
                item={item}
                open={open}
                copyCourse={copyCourse}
            />
        </>
    )
}
