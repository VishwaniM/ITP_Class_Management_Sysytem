import react,{useState, Component} from 'react';
import axios from 'axios';
import {Link, withRouter,useHistory,Redirect} from 'react-router-dom';


 class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            notice : []
        }
    }
    componentDidMount(){
    
      
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({

            ...this.state,
            [name]:value
        })
    }

    loguser = (e) =>{

        
        e.preventDefault();
        const{username,password} = this.state;

        const data ={
            username: username,
            password:password

        }
        
        axios.get(`http://localhost:5000/newuser/finduser/${username}/${password}`)
        .then(Response =>{
            
            if(Response.data.user !==null){
                console.log(Response.data.user)
                console.log(Response.data.user.usertype)
                if(Response.data.user.usertype=='user')
                 this.props.history.push("/viewNotice/"+Response.data.user.username);
                else
                this.props.history.push("/t/"+Response.data.user.username);
                
            }
            else{
                console.log("User NOt Found")
            }
        }).catch(function(err){
            console.log(err);
        })
    }
    

    
    
    render(){
        return(
                <div className="container">
                    <br></br><br></br>
                    <div class="shadow p-3 mb-5 bg-white rounded" style={{width:"600px"}}>
                        <form>
                            <div class="mb-3">
                                <label for="Subject" class="form-label">UserName</label>
                                <input name="username" type="text" class="form-control" id="subject" aria-describedby="nothelp" onChange={this.handleInputChange} autocomplete="off"/>
                               
                            </div>
                            <div class="mb-3">
                                <label for="Subject" class="form-label">Notice Subject</label>
                                <input name="password" type="password" class="form-control" id="subject" aria-describedby="nothelp" onChange={this.handleInputChange} autocomplete="off"/>
                             
                            </div>
                        
                            <button type="submit" class="btn btn-success btn-send" value="UPDATE" onClick={this.loguser}>Login</button>
                        </form>
                        
                        </div>
                    
                         
            </div>  
    
        );
        
    }
}
export default withRouter(Login);
