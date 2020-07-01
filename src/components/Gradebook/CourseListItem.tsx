import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
        alignItems: 'right',
    },

    expander: {
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
}))

interface Props {
    course: Course
    updateCourse: (course: Course) => void
    copyCourse: any
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

    const handleChangeWeightGrade = (weightValue: any, gradeValue: any) => {
        const newCourse = copyCourse(course)
        const newGrade = gradeValue.match(fractionRegex)
            ? {
                  numerator: gradeValue.match(fractionRegex)[1],
                  denominator: gradeValue.match(fractionRegex)[2],
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

    const matchFractionDecimal = (input: any) => {
        return input.match(fractionRegex) || input.match(decimalRegex)
    }

    return (
        <>
            <ExpansionPanel className={classes.expander}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justify="center"
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
                <ExpansionPanelDetails className={classes.expander}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
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
