import react,{useState, Component} from 'react';
import axios from 'axios';
import {Link, useLocation,useParams} from "react-router-dom";



export default class View extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            marksid : '',
            subjectname : '',
            mark : [],
            examcode:'',
            studentid:'',
            marks:'',
            date:'',
            grade:''
        }


    }
    

    

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/result/findmarks/${id}`)
        .then(Response =>{
            this.setState({
                mark:Response.data,
                marksid:Response.data.Marks.marksid,
                subjectname:Response.data.Marks.subjectname,
                examcode:Response.data.Marks.examcode,
                studentid:Response.data.Marks.studentid,
                marks:Response.data.Marks.marks,
                date:Response.data.Marks.date,
                grade:Response.data.Marks.grade

            })
            console.log("Test",this.state.marksid)
            
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

        const{marksid,studentid,subjectname,marks,grade,examcode} = this.state;

        const data ={
            marksid:marksid,
            studentid:studentid,
            subjectname:subjectname,
            marks:marks,
            grade:grade,
            date : Date().toLocaleString(),
            examcode : examcode

        }
        

        axios.put(`http://localhost:5000/result/updateresult/${id}`,data).then((res)=>{

          alert("succesfully Notices were updated")
                 if(res.data.success){
                    alert("succesfully Notices were updated")
                   
                     this.setState(
                         {
                            marksid : "",
                            studentid : "",
                            subjectname : "",
                            marks : "",
                            grade : "",
                            date : "",
                            examcode : ""
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
                                <label for="Subject" class="form-label">Subject : </label>
                                <input name="subject" type="text" class="form-control" id="subject" aria-describedby="nothelp" placeholder={this.state.subjectname} defaultValue = {this.state.subjectname}  onChange={this.handleInputChange}/>
                            </div>
                            <div class="mb-3">
                                <label for="ExamCode" class="form-label">Exam Code : </label>
                                <input name="examcode" class="form-control" id="examcode" rows="10" style={{resize: "none"}} placeholder={this.state.examcode} defaultValue = {this.state.examcode} onChange={this.handleInputChange}></input>
                            </div>
                            <div class="mb-3">
                                <label for="studentid" class="form-label">Student ID : </label>
                                <input name="studentid" class="form-control" id="studentid" rows="10" style={{resize: "none"}} placeholder={this.state.studentid} defaultValue = {this.state.studentid} onChange={this.handleInputChange}></input>
                            </div>
                            <div class="mb-3">
                                <label for="marks" class="form-label">Marks</label>
                                <input name="marks" class="form-control" id="marks" rows="10" style={{resize: "none"}} placeholder={this.state.marks} defaultValue = {this.state.marks} onChange={this.handleInputChange}></input>
                            </div>
                            <div class="mb-3">
                                <label for="grade" class="form-label">Grade </label>
                                <input name="grade" class="form-control" id="grade" rows="10" style={{resize: "none"}} placeholder={this.state.grade} value = {this.state.grade} onChange={this.handleInputChange} disabled = {true}></input>
                            </div>

                        
                        
                            <button type="submit" class="btn btn-dark btn-send" value="UPDATE" onClick={this.onSubmit}>UPDATE</button>
                        </form>
                        
                        </div>
            </div>  
    
        );
        
    }
}