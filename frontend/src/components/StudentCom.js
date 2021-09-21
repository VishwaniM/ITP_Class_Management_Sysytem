import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getStudents, getStudentsBySearch } from '../actions/students';
import Pagination from './Pagination';
import Students from './Students/Students';
import Form from './Form/Form';
import memories from '../images/memories.png';
import useStyles from '../styles';
import studentUseStyles from './stComStyles';

function useQuery() {
   return new URLSearchParams(useLocation().search); 
}


const StudentCom = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const stClasses = studentUseStyles();
    const [search, setSearch] = useState('');
    // const [tags, setTags] = useState([]);

    useEffect(() => {
        dispatch(getStudents());
    }, [ currentId, dispatch]);

    const searchStudent = () => {
        if (search.trim()){
            dispatch(getStudentsBySearch({ search }));
            history.push(`/students/search?searchQuery=${search || 'none'}`);
        }else {
            history.push('/students')
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13){
            searchStudent();
        }
    };

    // const handleAddChip = (tag) => setTags([...tags, tag]);

    // const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

    return(
        <Container maxidth = "lg">
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
               <Typography className ={classes.heading} varient = "h2" align = "center">Students</Typography>
               <img className = {classes.image} src={memories} alt= "memories" height="70" />

            </AppBar>
            <Grow in>
                <Container maxWidth = "xl">
                    <Grid container justify="space-between" alignItems="stretch" spacing={3} className={stClasses.gridContainer}>
                        <Grid item xs={12} sm={7}>
                            <Students setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <AppBar className= {stClasses.appBarSearch} position = "static" color="inherit">
                                <TextField  
                                    name = "search"                                
                                    variant="outlined"
                                    label = "Search Students"
                                    onKeyPress={handleKeyPress}
                                    fullWidth
                                    value = {search}
                                    onChange ={(e) => setSearch(e.target.value)}
                                />

                                    {/* <ChipInput
                                    style={{ margin: '10px 0' }}
                                    value={tags}
                                    onAdd={(chip) => handleAddChip(chip)}
                                    onDelete={(chip) => handleDeleteChip(chip)}
                                    label="Search Tags"
                                    variant="outlined"
                                /> */}
                                                
                                <Button onClick={searchStudent} className={stClasses.searchButton} variant= "contained" color = "primary">Search</Button>
                                </AppBar>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                            <Paper elevation= {6}>
                                <Pagination />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );

}

export default StudentCom;