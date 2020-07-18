import React, { useState } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import {
    TextField,
    Grid,
    Typography,
    Button,
    Modal,
    DialogActions,
    Box,
} from '@material-ui/core'
import { CourseItem } from '../../services/storage'

interface Props {
    handleClose: () => void
    open: boolean
    addItem: (item: CourseItem) => void
    setOpen: (item: boolean) => void
}

const useStyles = makeStyles(theme => ({
    title: {
        borderColor: '#E5E5E5',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    subtitle: {
        marginTop: theme.spacing(1),
        color: '#9e9e9e',
    },
    modalStyle: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        boxShadow: `${fade('#E5E5E5', 0.25)} 0 0 0 0.2rem`,
        borerColor: theme.palette.primary.main,
        borderRadius: '2%',
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
    button: {
        marginTop: theme.spacing(2),
        marginBottom: 0,
    },
}))

export const AddItemModal = ({
    open,
    handleClose,
    addItem,
    setOpen,
}: Props) => {
    const [assignName, setAssignName] = useState('')
    const [assignWeight, setAssignWeight] = useState('')
    const [assignGrade, setAssignGrade] = useState('')
    const classes = useStyles()

    const fractionRegex = /^([0-9]+)\/([0-9]+)$/
    const decimalRegex = /^[0-1]{0,1}(\.[0-9]+)?$/

    const handleAddItem = () => {
        addItem({
            name: assignName,
            weight: Number(assignWeight),
            grade: assignGrade.match(fractionRegex)
                ? {
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      numerator: Number(assignGrade.match(fractionRegex)![1]),
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      denominator: Number(assignGrade.match(fractionRegex)![2]),
                  }
                : Number(assignGrade),
        })
        setOpen(false)
    }

    const matchFractionDecimal = (input: string) => {
        return input.match(fractionRegex) || input.match(decimalRegex)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Add a syllabus item"
            aria-describedby="Add a syllabus item to your course to track your grad"
        >
            <div className={classes.modalStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Typography
                            component="h5"
                            variant="subtitle2"
                            className={classes.subtitle}
                            id={`enter-course-${assignName}`}
                        >
                            Enter your course information
                        </Typography>
                        <Typography
                            component="h5"
                            variant="h5"
                            color="primary"
                            className={classes.title}
                            id={`add-new-item-${assignName}`}
                        >
                            <Box fontWeight="fontWeightBold">
                                Add a new item
                            </Box>
                        </Typography>
                        <TextField
                            className={classes.textFieldStyle}
                            variant="outlined"
                            required
                            fullWidth
                            id={assignName}
                            label="Assignment Name"
                            name="nametNewItem"
                            value={assignName}
                            onChange={event =>
                                setAssignName(event.target.value)
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textFieldStyle}
                            variant="outlined"
                            required
                            fullWidth
                            id={`${assignName}-weight`}
                            label="Weight"
                            name="weightNewItem"
                            value={assignWeight}
                            onChange={event =>
                                setAssignWeight(event.target.value)
                            }
                            helperText={
                                assignWeight.match(decimalRegex)
                                    ? ''
                                    : 'Enter a decimal between 0 and 1'
                            }
                            error={!assignWeight.match(decimalRegex)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textFieldStyle}
                            variant="outlined"
                            required
                            fullWidth
                            id={`${assignName}-grade`}
                            label="Grade"
                            name="gradeNewItem"
                            value={assignGrade}
                            onChange={event =>
                                setAssignGrade(event.target.value)
                            }
                            helperText={
                                matchFractionDecimal(assignGrade)
                                    ? ''
                                    : 'Enter a fraction or a decimal between 0 and 1'
                            }
                            error={!matchFractionDecimal(assignGrade)}
                        />
                    </Grid>
                </Grid>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={handleClose}
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                    >
                        Cancel
                    </Button>
                    <Button
                        autoFocus
                        onClick={handleAddItem}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Save changes
                    </Button>
                </DialogActions>
            </div>
        </Modal>
    )
}
