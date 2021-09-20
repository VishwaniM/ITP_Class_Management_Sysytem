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
                    <th scope="col">Student ID</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Marks</th>
                    <th scope="col">Grade</th>
                    <th scope="col">Submit Date</th>
                    <th scope="col">Exam Code</th>
                </tr>
                </thead>
                <tbody>
            {this.state.marks.map(mark=>(
                
                <tr>
                    <td scope="row"><div>{mark.studentid}</div></td>
                    <td scope="row"><div>{mark.subjectname}</div></td>
                    <td scope="row"><div>{mark.marks}</div></td>
                    <td scope="row"><div>{mark.grade}</div></td>
                    <td scope="row"><div>{mark.date}</div></td>
                    <td scope="row"><div>{mark.examcode}</div></td>
                    
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
