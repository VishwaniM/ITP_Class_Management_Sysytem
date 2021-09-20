import react,{useState, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class ViewSchedule extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            schedules : []
            
        
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/schedule/viewall")
        .then(Response =>{
            this.setState({schedules:Response.data})
            
            console.log("ID ID")
        }).catch(function(err){
            console.log(err);
        })
      
        
    }
    deleteRow(id, e){  
        axios.delete(`http://localhost:5000/schedule/deleteschedule/${id}`)  
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
                    <th scope="col">Schedule Description</th>
                    <th scope="col"> Examiner Name</th>
                    <th scope="col">Date</th>
                </tr>
             </thead>
             <tbody>
            {this.state. schedules.map(schedule=>(
                
                <tr>
                    <td scope="row"><div>{schedule.schedule_description}</div></td>
                    <td scope="row"><div>{schedule.examiner_name}</div></td>
                    <td scope="row"><div>{schedule.date_time}</div></td>
                
                    <td scope="row"><Link to={"/editschedule/"+schedule._id} className="btn btn-dark">Update</Link></td>
                    <td scope="row"><button className="btn btn-danger" onClick={(e) => this.deleteRow(schedule._id, e)}>Delete</button> </td>
                </tr>
                
            ))}
            </tbody>
            </table>
            
            <br></br> <br></br>  
                </div>  
    
        )
        
}
}
