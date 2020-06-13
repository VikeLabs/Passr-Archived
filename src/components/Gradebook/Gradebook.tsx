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
    weight: number;
    grade?: splitGrade;
}


 interface Course {
 name?: string;
 items?: classMaterial[];
 desiredGrade: string;
 setDesiredGrade?: (e: any) => void;
 }

export default function Gradebook( {name,items, desiredGrade, setDesiredGrade}: Course) {
const classes = useStyles()
const currentGradeList = items && items.map(item=>item.weight&&item.grade ? item.weight*item.grade.numerator/item.grade.denominator : 0);
const currentGradeTotal=currentGradeList&&currentGradeList.reduce((grade1,grade2)=>grade1+grade2);

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
                value={desiredGrade}
                onChange={setDesiredGrade}
              />
              </Grid>
              </Grid>
              {items && items.map(item => (<div key = {item.name}>
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

