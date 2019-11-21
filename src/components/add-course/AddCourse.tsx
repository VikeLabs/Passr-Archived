import React, { useState } from 'react'
import { makeStyles, createStyles, } from '@material-ui/styles'
import { Theme, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'




const useStyles = makeStyles((theme: Theme) => ({
  
        container: {
            display: 'flex',
            flexWrap: 'wrap',
          },

        textField:{
            //marginLeft: theme.spacing(1),
            //marginRight: theme.spacing(1),
            width: 200,
        },

        button: {
            display: 'grid',
        },
    }))


export const AddCourse: React.FC = () => {
    const classes = useStyles()

    const [ courseName, setCourseName ] = useState('')
    const [ CRNnumber, setCRNnumber ] = useState('')
    
    return (
        
        <div>
        Want to add a course?
        <br/>
        <br/>
            <TextField 
                name="courseName"
                className={classes.textField}
                label="Course Name"
                placeholder="e.g) CSC225"
                value={courseName} 
                onChange={(event) => {
                    setCourseName(event.currentTarget.value)
                }}/>

                <br />
            
            <TextField 
                name="CRNnumber"
                className={classes.textField}
                label="CRN"
                placeholder="e.g) 12345"
                value={CRNnumber} 
                onChange={(event) => {
                    setCRNnumber(event.currentTarget.value)
                }}/>

                <br/>
        <Button className={classes.button}>submit</Button>

        {/* below, just testing if textfields are actually fetching the info*/}
            
        <p>course name: {courseName}</p>
        <p>CRN: {CRNnumber}</p>

        </div>
    )
}

export default AddCourse