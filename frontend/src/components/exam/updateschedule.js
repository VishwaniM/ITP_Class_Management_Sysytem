import react,{useState, Component} from 'react';
import axios from 'axios';
import {Link, useLocation,useParams} from "react-router-dom";



export default class View extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            schedule : [],
            schedule_description: '',
            examiner_name : '',
            date_time  : ''
        }


    }
    

    

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/schedule/findschedule/${id}`)
        .then(Response =>{
            this.setState({
                schedule:Response.data,
                schedule_description:Response.data.Schedule.schedule_description,
                date_time:Response.data.Schedule.date_time,
                examiner_name : Response.data.Schedule.examiner_name

            })
            console.log("Test",this.state.schedule_description)
            
        }).catch(function(err){
            console.log(err);
        })
    }
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({

            ...this.state,
            [name]:value
        })
    }
    

    onSubmit = (e) =>{

        e.preventDefault();
        const id = this.props.match.params.id;

        const{schedule_description,date_time,examiner_name} = this.state;

        const data ={
            schedule_description:schedule_description,
            examiner_name :examiner_name,
            date_time : date_time

        }
        

        axios.put(`http://localhost:5000/schedule/updateschedule/${id}`,data).then((res)=>{

          alert("succesfully Notices were updated")
                 if(res.data.success){
                    alert("succesfully Notices were updated")
                   
                     this.setState(
                         {
                            schedule_description : "",
                            examiner_name : "",
                            date_time : ""
                         }
                     )
                 }

        });
    }
    

    //Comment INserting
    
    render(){
        return(
            
                <div className="container">
            
            <div class="shadow p-3 mb-5 bg-white rounded">
                        <form>
                            <div class="mb-3">
                                <label for="schedule_description" class="form-label">Schedule Description : </label>
                                <input name="schedule_description" type="text" class="form-control" id="schedule_description" aria-describedby="nothelp" placeholder={this.state.schedule_description} defaultValue = {this.state.schedule_description}  onChange={this.handleInputChange}/>
                            </div>
                            <div class="mb-3">
                                <label for="date_time" class="form-label">Date Time : </label>
                                <input name="date_time" class="form-control" id="date_time" rows="10" style={{resize: "none"}} placeholder={this.state.date_time} defaultValue = {this.state.date_time} onChange={this.handleInputChange}></input>
                            </div>
                            <div class="mb-3">
                                <label for="examiner_name" class="form-label">Examinar Name : </label>
                                <input name="examiner_name" class="form-control" id="examiner_name" style={{resize: "none"}} placeholder={this.state.examiner_name} defaultValue = {this.state.examiner_name} onChange={this.handleInputChange}></input>
                            </div>

                            <button type="submit" class="btn btn-dark btn-send" value="UPDATE" onClick={this.onSubmit}>UPDATE</button>
                        </form>
                        
                        </div>
            </div>  
    
        );
        
    }
}