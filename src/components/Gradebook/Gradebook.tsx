import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Grid, Typography, Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'


const useStyles = makeStyles((theme) => ({
container: {
paddingTop: theme.spacing(2),
    marginTop:theme.spacing(4),
    marginBottom:theme.spacing(4),
    height: '75vh',
    overflow: 'auto'
},
  assignments: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}));

 interface Course {
 course: any;
 setCourse: (e: any) => void;
 }

export default function Gradebook( {course, setCourse}: Course) {
const classes = useStyles()
const currentGradeList = course&&course.items&&course.items.map((item:any)=>item.weight&&item.grade ? item.weight*item.grade.numerator/item.grade.denominator : 0);
const currentGradeTotal=currentGradeList&&currentGradeList.reduce((grade1:any,grade2:any)=>grade1+grade2);

    return (
    <Container component="main" maxWidth="md" className={classes.container}>
     <CssBaseline />
     <Grid container spacing={2}>
     <Grid item xs={12} sm={4}>
       <TextField
                variant="outlined"
                required
                fullWidth
                disabled
                id="currentGrade"
                label="Current Grade"
                name="currentGrade"
                value={currentGradeTotal || ''}
              />
              </Grid>
               <Grid item xs={12} sm={4}>
        <TextField
                variant="outlined"
                required
                fullWidth
                id="desiredGrade"
                label="Desired Grade"
                name="desiredGrade"
                value={course&&course.desiredGrade || ''}
                onChange={event => setCourse({...course, desiredGrade:event.target.value})}
              />
              </Grid>
              </Grid>
              {course&&course.items && course.items.map((item:any, index: number) => (<div key = {item.name}>
              <Typography
              component="h6" variant="h6" className={classes.assignments}>
              {item.name}
        </Typography>
                  <Grid container spacing={2}>
     <Grid item xs={12} sm={4}>
       <TextField
                variant="outlined"
                required
                fullWidth
                id={"weight"+ item.name}
                label="Weight"
                name="weight"
                value={(item.weight*100).toFixed(2) +'%'}
              />
              </Grid>
               <Grid item xs={12} sm={4}>
        <TextField
                variant="outlined"
                required
                fullWidth
                id={"grade"+ item.name}
                label="Grade"
                name="grade"
                value={item.grade && item.grade.numerator + '/' + item.grade.denominator}
              />
              </Grid>
              </Grid> </div>))}
              </Container>              
    );
}

