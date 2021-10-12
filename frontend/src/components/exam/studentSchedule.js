import react,{useState, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class StudentView extends Component{
  
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
    render(){
        return(

           

                <div class Name="container" align="center" >
                    
                    <br></br><br></br>
                    {this.state.schedules.map(sche=>(
                          <div class="p-3 mb-2 bg-secondary text-white" style={{width:"600px"}}>
                             <h3>{sche.schedule_description}</h3>
                             <p>Examiner Name : {sche.examiner_name}</p>
                             <p><mark>Date and Time : {sche.date_time}</mark></p>
                             </div>
                     ))}
                     
                     <br></br> <br></br>
                </div> 
        
        )
    }
    
}