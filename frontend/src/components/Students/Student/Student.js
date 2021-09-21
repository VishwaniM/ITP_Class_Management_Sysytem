// import { formatMs } from '@material-ui/core';
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useDispatch } from 'react-redux';

import { deleteStudent } from '../../../actions/students';

import useStyles from './styles';

const Student = ({ student, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
       <Card className={classes.card }raised elevation = {6}>
           <CardMedia className= {classes.media} image={student.selectedFile} title= {student.title}/>
           <div className={classes.overlay}>
               <Typography variant="h6"> {student.firstName} </Typography>
               

           </div>
           <div className={classes.overlay2}>
               <Button 
                    style={{color:'white'}} 
                    size="small" 
                    onClick={() => {}}>
                    <GetAppIcon fontSize="default"/>
               </Button>
           </div>
           {/* <div className={classes.details}>
                <Typography variant="body2" color="textSecondary"> {student.email.map((email) => `${email} `)} </Typography>

           </div> */}
            <div>
                <Typography className={classes.title} variant="h5" gutterBottom> {student.firstName} {student.lastName} </Typography>
            </div>    
                <CardContent>
                    <div>    
                        <label>Grade:</label>                
                        <Typography variant="p" color="primary" gutterBottom className={classes.tagName}> {student.grade} </Typography>
                    </div>

                    <div>
                        <label>Gender:</label>
                        <Typography variant="p" color="primary" gutterBottom> {student.gender} </Typography>
                    </div>

                    <div>
                        <label>Date of Birth:</label>
                        <Typography variant="p" color="primary" gutterBottom> {student.birthday} </Typography>
                    </div>

                    <div>
                        <label>Father:</label>
                        <Typography variant="p" color="primary" gutterBottom> {student.fatherName} </Typography>
                    </div> 
                    
                    <div>
                        <label>Mother:</label>
                        <Typography variant="p" color="primary" gutterBottom> {student.motherName} </Typography>
                    </div> 
                    
                    <div>
                        <label>Email:</label>
                        <Typography variant="p" color="primary" gutterBottom> {student.email} </Typography>
                    </div>
                    
                    <div>
                        <label>Phone Number:</label>
                        <Typography variant="p" color="primary" gutterBottom> {student.phoneNumber} </Typography>
                    </div> 
                    
                    <div>
                        <label>Address:</label>
                        <Typography variant="p" color="primary" gutterBottom> {student.address} </Typography>
                    </div> 
                    
                    <div>
                        <label>Admission:</label>
                        <Typography variant="p" color="primary" gutterBottom> {student.createdAt} </Typography>
                    </div>       
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button 
                        size="small" 
                        color="primary" 
                        onClick={() => setCurrentId(student._id)}>
                        <EditIcon fontSize="small"/>
                        Edit
                        {/* {student.likeCount} */}
                    </Button>
                    <Button size="small" color="secondary" onClick={() => dispatch(deleteStudent(student._id))}>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>

                </CardActions>

       </Card>
    );
}

export default Student;
