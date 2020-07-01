import React, { useState } from 'react'
import { fade,makeStyles } from '@material-ui/core/styles'
import {
    TextField,
    Grid,
    Typography,
    Button,
    Modal,
    DialogActions,
    Box
} from '@material-ui/core'
import { CourseItem } from '../../services/storage'

interface Props {
    handleClose: any
    open: boolean
    addItem: (item: CourseItem) => void
    setOpen: any
}

const useStyles = makeStyles(theme => ({
    title: {
        borderColor: '#E5E5E5',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    subtitle:{
        marginTop: theme.spacing(1),
        color:'#9e9e9e'
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
        borderRadius: '2%'
    },
    textFieldStyle:{
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.dark,
            },
        },
    },
    button: {
        marginTop: theme.spacing(2),
        marginBottom:0
    }
}))

export const AddItemModal = ({ open, handleClose, addItem, setOpen }: Props) => {
    const [assignName, setAssignName] = useState('')
    const [assignWeight, setAssignWeight] = useState('')
    const [assignGrade, setAssignGrade] =useState('')
    const classes = useStyles()

    const handleAddItem = () => {
      addItem({ name: assignName, weight: parseFloat(assignWeight), grade: parseFloat(assignGrade) });
       setOpen(false)}

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
                    <Typography component='h5' variant='subtitle2' className={classes.subtitle} id="simple-modal-title">  Enter your course information  </Typography>
                        <Typography component='h5' variant='h5' color='primary' className={classes.title} id="simple-modal-title"> <Box fontWeight='fontWeightBold'> Add a new item </Box> </Typography>
                        <TextField
                         className={classes.textFieldStyle}
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
                         className={classes.textFieldStyle}
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
                        className={classes.textFieldStyle}
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
                        onClick={handleClose}
                        variant='outlined'
                        color="primary"
                        className={classes.button}
                    >
                        Cancel
                    </Button>
                    <Button
                        autoFocus
                        onClick={handleAddItem}
                        variant='contained'
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
