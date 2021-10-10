import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useDispatch } from 'react-redux';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { deleteStudent } from '../../../actions/students';

import useStyles from './styles';


const Student = ({ student, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const pdfGenerate=({})=>{
        var doc=new jsPDF('portrait','px','a4','false'); 
        autoTable(doc, {html: '#my-table'})
        doc.setFontSize(28);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(0,0,128)
        doc.text(152, 60, "Student Profile");    
        doc.addImage(student.selectedFile,'PNG',135,80,180,200);
        doc.setFontSize(18);
        doc.setFont(undefined, 'bold');
        
        doc.autoTable({
            startY:290,
            margin:50,
            theme:'plain',     
            columnStyles: { 0: { halign: 'center' } },
            alternateRowStyles:{fontSize:18, fontStyle:'bold'},
            body:[
                
                [[student.firstName+" "+student.lastName]],
            ],
        })
        
        var date=new Date().toLocaleDateString();
        
        
        doc.autoTable({
            startY:320,
            margin:50,
            columnStyles: { 1: { halign: 'right' } },
            head:[['','Student Details']],
            body:[
                ['First Name',[student.firstName]],
                ['Last Name',[student.lastName]],
                ['Gender'  , [student.gender]],
                ['Date of Birth'  , [student.birthday]],
                ['Father'  , [student.fatherName]],
                ['Mother'  ,[student.motherName]],
                ['Email'  , [student.email]],
                ['Phone Number'  ,'0'+ [student.phoneNumber]],
                ['Address'  , [student.address]],
                
            ],
        })
        doc.autoTable({
            startY:560,
            margin:50,
            theme:'plain',            
            
            columnStyles: { 1: { halign: 'right' } },
            alternateRowStyles:{fontSize:8, fontStyle:'italic'},
            body:[
                
                ['Dekma Institute Matara', 'Generated on'+' '+[date]],
            ],
        })
        doc.save('Report.pdf');
    }
    
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
                    onClick={pdfGenerate}>
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
                        <Typography variant="p" color="primary" gutterBottom> {'0'+student.phoneNumber} </Typography>
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
