import react,{useState, Component} from 'react';
import axios from 'axios';
import {Link, useLocation,useParams} from "react-router-dom";
import Comment from './addcomment'
import Addcomment from './addcomment';


export default class View extends Component{
    
    
    constructor(props){
        super(props);
        this.state = {
            id : '',
            body : '',
            notice : [],
            subject:'',
            time:'',
            userid:''
        }

    }
    

    

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:5000/notice/vieweditnoit/${id}`)
        .then(Response =>{
            this.setState({
                notice:Response.data,
                subject:Response.data.Notice.subject,
                userid:Response.data.Notice.userid,
                time:Response.data.Notice.time,
                body:Response.data.Notice.body
            })
            console.log("this thi",this.state.subject)
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

        const{subject,body} = this.state;

        const data ={
            subject: subject,
            body:body,
            userid: this.state.userid,
            notid : this.state.notid,
            time : Date().toLocaleString()

        }
        

        axios.put(`http://localhost:5000/notice/updatenotice/${id}`,data).then((res)=>{

          alert("succesfully Notices were updated")
                 if(res.data.success){
                    alert("succesfully Notices were updated")
                   
                     this.setState(
                         {
                            subject:"",
                            body:"",
                            userid:"",
                            notid:"",
                            time:""
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
                                <label for="Subject" class="form-label">Notice Subject</label>
                                <input name="subject" type="text" class="form-control" id="subject" aria-describedby="nothelp" placeholder={this.state.subject} defaultValue = {this.state.subject}  onChange={this.handleInputChange}/>
                                <div id="nothelp" class="form-text">Please use propper Subject for your Notice!</div>
                            </div>
                            <div class="mb-3">
                                <label for="noticebody" class="form-label">Insert Your Notice</label>
                                <textarea name="body" class="form-control" id="body" rows="10" style={{resize: "none"}} placeholder={this.state.body} defaultValue = {this.state.body} onChange={this.handleInputChange}></textarea>
                            </div>
                        
                        
                            <button type="submit" class="btn btn-success btn-send" value="UPDATE" onClick={this.onSubmit}>UPDATE</button>
                        </form>
                        
                        </div>
            </div>  
    
        );
        
    }
}
