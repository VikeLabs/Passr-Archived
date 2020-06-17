import React, { useState } from 'react'
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

export const AddItem = ({ open, handleClose, addItem }: Props) => {
    const [assignName, setAssignName] = useState('')
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div>
                {/* <div className={classes.modalStyle}> */}
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
                        onClick={() => addItem({ name: assignName, weight: 0 })}
                        color="primary"
                    >
                        Save changes
                    </Button>
                </DialogActions>
            </div>
        </Modal>
    )
}
