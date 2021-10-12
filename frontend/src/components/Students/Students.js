// import { formatMs, Grid } from '@material-ui/core';
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Student from './Student/Student';
import useStyles from './styles';


const Students = ({ setCurrentId }) => {
    const students = useSelector((state) => state.students);
    const classes = useStyles();
    
    console.log(students);


    return(
       !students.length ? <CircularProgress /> : (
           <Grid className={classes.container} container alignItems="stretch" spacing={3}>
               {students.map((student) => (
                   <Grid key= {student._id} item xs= {12} sm={6}>
                       <Student student={student} setCurrentId={setCurrentId}/>

                   </Grid>
               ))}

           </Grid>
       )
    );
}

export default Students;