import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Grid, Typography, Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'


const useStyles = makeStyles((theme) => ({
container: {
    marginTop:theme.spacing(4),
    marginBottom:theme.spacing(4),
},
  assignments: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}));

interface splitGrade {
    numerator: number;
    denominator: number;
}

interface classMaterial {
    name: string;
    weight?: number;
    grade?: splitGrade;
}


 interface Course {
 name?: string;
 desiredGrade?: number;
 items: classMaterial[];
 }

export default function Gradebook( {name, desiredGrade,items}: Course) {
const classes = useStyles()
const currentGradeList = items.map(item=>item.weight&&item.grade ? item.weight*item.grade.numerator/item.grade.denominator : 0);
const currentGradeTotal=currentGradeList.reduce((grade1,grade2)=>grade1+grade2);
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
                value={currentGradeTotal}
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
              />
              </Grid>
              </Grid>
              {items.map(item => (<div key = {item.name}>
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
                value={item.weight}
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
              />
              </Grid>
              </Grid> </div>))}
              </Container>              
    );
}

