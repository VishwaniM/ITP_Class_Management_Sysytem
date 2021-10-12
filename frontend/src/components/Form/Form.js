import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper,Grid, FormLabel,FormControl,InputLabel,Select} from '@material-ui/core';
import FileBase from 'react-file-base64';
import  { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createStudent, updateStudent } from '../../actions/students';


const Form = ({ currentId, setCurrentId}) => {
    const [studentData, setStudentData] = useState({firstName: '', lastName: '', email: '', phoneNumber: '', grade: '', gender: '',birthday: '', address: '', fatherName: '', motherName: '', selectedFile: ''});
    const student = useSelector((state) => (currentId ? state.students.find((p) => p._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    
    useEffect(() => {
        if(student) setStudentData(student); 
    },[student])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updateStudent(currentId, studentData));
        }else{            
            dispatch(createStudent(studentData));
        }
        clear();

        
    }
    const clear = () => {
        setCurrentId(null);
        setStudentData({firstName: '', lastName: '', email: '', phoneNumber: '', grade: '', gender: '',birthday: '', address: '', fatherName: '', motherName: '', selectedFile: ''});
    }
 
        
    
    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>

                <Typography className = {classes.typography} variant="h4" >{currentId ? 'Edit Student' : 'Add New Student' } </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <TextField required name="First Name" variant="outlined" label="First Name" fullWidth value={studentData.firstName} onChange={(e) => setStudentData({...studentData, firstName: e.target.value})}/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required name="Last Name" variant="outlined" label="Last Name" fullWidth value={studentData.lastName} onChange={(e) => setStudentData({...studentData, lastName: e.target.value})}/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField type="email" required name="Email" variant="outlined" label="Email" fullWidth value={studentData.email}  
                        onChange={(e) => setStudentData({...studentData, email: e.target.value})}/><br />
                        
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            type="tel"
                            required
                            name="Phone Number" 
                            variant="outlined" 
                            label="Phone Number" 
                            inputProps={{minLength:10 }}
                            fullWidth 
                            value={studentData.phoneNumber} 
                            onChange={(e) => setStudentData({...studentData, phoneNumber: e.target.value })}/>
                    </Grid>

        {/* grade picker */}

                    <Grid item xs={12} sm={3}>
                    
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Grade</InputLabel>
                            <Select
                                required
                                native
                                value={studentData.grade}
                                onChange={(e) => setStudentData({...studentData, grade: e.target.value})}
                                label="Grade"
                                inputProps={{
                                    name: 'Grade',
                                    id: 'outlined-age-native-simple',}}>
                                        <option aria-label="" value="" />
                                        <option value={'Six'}>Six</option>
                                        <option value={'Seven'}>Seven</option>
                                        <option value={'Eight'}>Eight</option>
                                        <option value={'Nine'}>Nine</option>
                                        <option value={'Ten'}>Ten</option>
                                        <option value={'Eleven'}>Eleven</option>
                                        <option value={'Advanced Level'}>A/L</option>
                            </Select>
                        </FormControl>
                    </Grid>
          {/* gender picker */}
                    <Grid item xs={12} sm={3}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                            <Select
                                required
                                native
                                value={studentData.gender}
                                onChange={(e) => setStudentData({...studentData, gender: e.target.value})}
                                label="Gender"
                                inputProps={{
                                    name: 'Gender',
                                    id: 'outlined-age-native-simple',}}>

                                        <option aria-label="" value="" />
                                        <option value={'Male'}>Male</option>
                                        <option value={'Female'}>Female</option>                                        
                            </Select>
                        </FormControl>
                    </Grid>
         {/* Birthday picker */}
                    <Grid item xs={12} sm={6}>
                    <form className={classes.container} noValidate>
                        <TextField required
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="YYYY-MM-DD"
                            value={studentData.birthday}
                            onChange={(e) => setStudentData({...studentData, birthday: e.target.value})}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}/>
                        </form>                    
                    </Grid> 

                    <Grid item xs={12}>
                        <TextField required className={classes.textField}
                            id="Address"
                            label="Address"
                            multiline
                            rows={4}
                            value={studentData.address}
                            onChange={(e) => setStudentData({...studentData, address: e.target.value})}
                            variant="outlined"
                            />
                    </Grid>

                    
                    <Grid item xs={12} sm={6}>
                        <TextField required name="Father's Name" variant="outlined" label="Father's Name" fullWidth value={studentData.fatherName}onChange={(e) => setStudentData({...studentData, fatherName: e.target.value})}/>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required name="Mother's Name" variant="outlined" label="Mother's Name" fullWidth value={studentData.motherName}onChange={(e) => setStudentData({...studentData, motherName: e.target.value})}/>
                    </Grid>

                    <Grid item xs={12}>                  
                        <div className={classes.fileInput}>
                            <FormLabel className={classes.formLabel}>Upload Image</FormLabel>   
                            <FileBase required type= "file" multiple = {false} onDone = {({base64}) => setStudentData({...studentData, selectedFile:base64})}/>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button> 
                        <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> 
                    </Grid>
                </Grid>
            </form>

        </Paper>
    );
};

export default Form;