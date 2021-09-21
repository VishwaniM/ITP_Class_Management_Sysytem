import * as api from '../api/index';

//Action creators
export const getStudents = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStudents();
        dispatch({type: 'FETCH_ALL', payload: data});


    } catch (error) {
        console.log(error.message);
        
    } 
};

export const getStudentsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchStudentsBySearch(searchQuery);

        dispatch({type: 'FETCH_BY_SEARCH', payload: data});

    } catch (error) {
        console.log(error);
        
    }
};


export const createStudent = (student) => async (dispatch) => {
    try {
        const { data } = await api.createStudent(student);

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error); 
    }
};

export const updateStudent = (id,student) => async (dispatch) => {
    try {
        const { data } = await api.updateStudent(id, student);

        dispatch({ type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const deleteStudent = (id) => async (dispatch) => {
    try {
        await api.deleteStudent(id);

        dispatch( { type: 'DELETE', payload: id });
        
    } catch (error) {
        console.log(error);
        
    }
}