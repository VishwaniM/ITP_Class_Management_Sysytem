import react,{useState, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ViewMarks extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            marks : []
            
        
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/result/viewall")
        .then(Response =>{
            this.setState({marks:Response.data})
            
            console.log("ID ID")
        }).catch(function(err){
            console.log(err);
        })
      
        
    }
    deleteRow(id, e){  
        axios.delete(`http://localhost:5000/result/deleteresult/${id}`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
        
             
            window.location.reload();
          })  }


    
    render(){
        return(

           

                <div className="container">
                     
            <table className = "table table-striped" style={{marginTop:20}}>
            <thead>
                <tr>
                    <th scope="col"><u>Student ID</u></th>
                    <th scope="col"><u>Subject Name</u></th>
                    <th scope="col"><u>Marks</u></th>
                    <th scope="col"><u>Grade</u></th>
                    <th scope="col"><u>Submit Date</u></th>
                    <th scope="col"><u>Exam Code</u></th>
                </tr>
                </thead>
                <tbody>
            {this.state.marks.map(mark=>(
                
                <tr>
                    <td scope="row"><div><b>{mark.studentid}</b></div></td>
                    <td scope="row"><div><b>{mark.subjectname}</b></div></td>
                    <td scope="row"><div><b>{mark.marks}</b></div></td>
                    <td scope="row"><div><b>{mark.grade}</b></div></td>
                    <td scope="row"><div><b>{mark.date}</b></div></td>
                    <td scope="row"><div><b>{mark.examcode}</b></div></td>
                    
                    <td scope="row"><div><Link to={"/editmark/"+mark._id} className="btn btn-dark btn btn-primary">Update</Link></div></td>
                    <td scope="row"><div><button type="button" className="btn btn-danger btn btn-primary" onClick={(e) => this.deleteRow(mark._id, e)}>Delete</button></div> </td>
                   
                </tr>

                
            ))}
            </tbody>
            <br></br> <br></br>
            </table>

            
            
                    
                </div>  
    
        )
        
}
}
