import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme, Button } from '@material-ui/core'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            display: 'grid',
        },
    }),
)

export const AddCourse: React.FC = () => {
    const classes = useStyles()

    const [ courseName, setCourseName ] = useState('')
    return (
        <div>
        Want to add a course?
        <br/>
        <br/>
            Course Name :
            <input 
                type="text" 
                name="courseName" 
                value={courseName} 
                onChange={(event) => {
                setCourseName(event.target.value);
                console.log(event.target.value)}
                }/>
        <br/>
            CRN: <input type="text" name="CRNname" value=""/>
        <br/>
        <Button>submit</Button>
        </div>
    )
}

export default AddCourse