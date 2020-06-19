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
import { CourseItem } from '../../services/storage'

interface Props {
    handleClose: () => void
    open: boolean
    addItem: (item: CourseItem) => void
}

const useStyles = makeStyles(theme => ({
    modalStyle: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
    },
}))

export const AddItem = ({ open, handleClose, addItem }: Props) => {
    const [assignName, setAssignName] = useState('')
    const [assignWeight, setAssignWeight] = useState('')
    const [assignGrade, setAssignGrade] =useState('')
    const classes = useStyles()
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
                 <div className={classes.modalStyle}> 
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <h2 id="simple-modal-title">Add a new course item </h2>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id={'nameNewItem'}
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
                            variant="outlined"
                            required
                            fullWidth
                            id={'weightNewItem'}
                            label="Weight"
                            name="weightNewItem"
                            value={assignWeight}
                            onChange={event =>
                                setAssignWeight(event.target.value)
                            }
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
                            value={assignGrade}
                            onChange={event =>
                                setAssignGrade(event.target.value)
                            }
                        />
                    </Grid>
                </Grid>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={() => addItem({ name: assignName, weight: parseFloat(assignWeight), grade: parseFloat(assignGrade) })}
                        color="primary"
                    >
                        Save changes
                    </Button>
                </DialogActions>
            </div>
        </Modal>
    )
}
