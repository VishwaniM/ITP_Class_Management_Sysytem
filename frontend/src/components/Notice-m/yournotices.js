import react,{useState, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Edit extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            notice : [],
            user : this.props.match.params.id
        }
    }
    componentDidMount(){
     
        
        axios.get(`http://localhost:5000/notice/yournotices/${this.state.user}`)
        .then(Response =>{
            this.setState({notice:Response.data})
            console.log("Response",Response.data)
        }).catch(function(err){
            console.log(err);
        })
      
    }

    deleteRow(id, e){  
        axios.delete(`http://localhost:5000/notice/deletenotice/${id}`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
        
             
            window.location.reload();
          })  }
    

    
    
    render(){
        return(
                <div className="container">
                   Your User Name : {this.state.user}
                   
                    <h1 class="display-4" style={{color:"green"}}>Edit and Delete Your Notices</h1>
            <div class="shadow p-3 mb-5 bg-white rounded">
            <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Notice Subject</th>
                        <th scope="col">Notice Body</th>
                        <th scope="col">Date and Time Published</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    {this.state.notice.map(notice=>(
                    <tbody>
                        <tr>
                        <th scope="row">{notice.subject.slice(0,30)}...</th>
                        <td scope="row">{notice.body.slice(0,40)}...</td>
                        <td scope="row">{notice.time}</td>
                        <td scope="row"><Link to={"/edit/"+notice._id} className="btn btn-success">Edit</Link></td>

                        <td scope="row"><button type="button" class="btn btn-danger" onClick={(e) => this.deleteRow(notice._id, e)}>Delete</button></td>
                        </tr>
        
                    </tbody>
                    
                        
                        ))}
            </table>
            </div>
                    
                         
            </div>  
    
        );
        
    }
}
