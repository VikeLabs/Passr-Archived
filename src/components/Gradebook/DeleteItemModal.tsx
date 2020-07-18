import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogActions,
    DialogContent,
} from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

import { Course, CourseItem } from '../../services/storage'

const useStyles = makeStyles(theme => ({
    modalTitle: {
        textAlign: 'center',
    },
    deleteIcon: {
        backgroundColor: '#ffb2b2',
        padding: theme.spacing(1),
        borderRadius: '50%',
    },
    actions: {
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
}))

interface Props {
    course: Course
    updateCourse: (course: Course) => void
    copyCourse: (course: Course) => Course
    item: CourseItem
    open: boolean
    handleClose: () => void
}

export function DeleteItemModal({
    course,
    updateCourse,
    item,
    open,
    handleClose,
    copyCourse,
}: Props) {
    const classes = useStyles()

    const handleDeleteItem = (courseName: string) => {
        const newCourseItems = course.items.filter(
            item => item.name !== courseName,
        )
        const newCourse = copyCourse(course)
        newCourse.items = newCourseItems
        updateCourse(newCourse)
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle className={classes.modalTitle} id="alert-dialog-title">
                <DeleteOutlinedIcon
                    className={classes.deleteIcon}
                    color="secondary"
                />
                <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                    Are you sure?
                </Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Deleting will permanently remove this course item. This
                    cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.actions}>
                <Button
                    variant="outlined"
                    onClick={handleClose}
                    color="primary"
                >
                    Cancel
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => handleDeleteItem(item.name)}
                    color="secondary"
                    autoFocus
                >
                    Delete item
                </Button>
            </DialogActions>
        </Dialog>
    )
}
