import React, { Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Toast } from 'react-bootstrap';
import swal from "sweetalert2";

//boarder
const styles = {
    border:  '20px solid  rgba(0, 0, 0, 0.05)', 
    
  };
  
const initialState = {
    BookName: '',
    Firstname: '',
    Lastname:'',
    NIC:'',
    email:'',
    DateBarrowed: new Date(),
    DateReturned:new Date(),
    status:'',
    Barrowers: [] ,
    BookNameError: '',
    FirstnameError:'',
    LastnameError: '',
    NICError:'',
    statusError:'',
}

export default class AddBarrowers extends Component{
    constructor(props) {
        super(props);

        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangeDateBarrowed = this.onChangeDateBarrowed.bind(this);
        this.onChangeDateReturned = this.onChangeDateReturned.bind(this);
        this.onChangestatus = this.onChangestatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state= initialState;
    }
    
    //componentDitMount called automatically called right before anything display on the page
    componentDidMount(){
        this.setState({
            Barrowers:['test user'],
            name : 'test user'
        })
    }
    
    
    onChangeBookName(e){
        this.setState({
            BookName: e.target.value
        });
    }
    onChangeFirstname(e){
        this.setState({
            Firstname: e.target.value
        });
    }
    onChangeLastname(e){
        this.setState({
            Lastname: e.target.value
        });
    }
    onChangeNIC(e){
        this.setState({
            NIC: e.target.value
        });
    } 
    onChangeemail(e){
        this.setState({
            email: e.target.value
        });
    } 
    onChangeDateBarrowed(date){
        this.setState({
            DateBarrowed: date
        });
    } 
    onChangeDateReturned(date){
        this.setState({
            DateReturned: date
        });
    } 
    onChangestatus(e){
        this.setState({
            status: e.target.value
        });
    }
    validate = () =>{
        let BookNameError='';
        let FirstnameError='';
        let LastnameError='';
        let NICError='';
        let statusError='';

        if(!this.state.BookName){
            BookNameError="Book name cannot be empty";
        }
        if(!this.state.Firstname){
            FirstnameError="First name cannot be empty";
        }
        if(!this.state.Lastname){
            LastnameError="Last name cannot be empty";
        }
        if(this.state.NIC.trim().length != 5){
            NICError = "Invalid ID number length should be 5";
            }
        if(!this.state.status){
            statusError="status cannot be empty";
        }
        if( BookNameError|| FirstnameError ||  LastnameError || NICError ||  statusError ){
            this.setState({ BookNameError, FirstnameError ,LastnameError , NICError  , statusError });
            return false
        } 
        return true;

    };
    onSubmit(e){
        e.preventDefault();

        const Barrow ={
            BookName : this.state.BookName,
            Firstname : this.state.Firstname,
            Lastname : this.state.Lastname,
            NIC : this.state.NIC,
            email:this.state.email,
            DateBarrowed : this.state.DateBarrowed,
            DateReturned : this.state.DateReturned,
            status : this.state.status,

        }
        const isValid = this.validate()
        if(isValid){
        
        axios.post('http://localhost:8070/Barrow/add',Barrow)
        .then(()=>{
            //alert("New Barrower Added Successfully")
            swal.fire("Inserted","Borrower details inserted successfully!","success")
        }).catch((err)=>{
            alert(err)
        })

        this.state = ({
            BookName: '',
            Firstname: '',
            Lastname:'',
            NIC:'',
            email:'',
            DateBarrowed: new Date(),
            DateReturned:new Date(),
            status:'',
            Barrowers: [] ,
        })
      }
    }

    btnDemo = (e) => {
        e.preventDefault();
      
        const { BookName,Firstname,Lastname,NIC,email,status} = this.state;
      
        const data = {
            BookName: BookName,
            Firstname: Firstname,
            Lastname: Lastname,
            NIC: NIC,
            email : email,
            status:status
        }
      
        console.log(data)
      
        this.setState(
            {
              BookName: "Elephant Complex",
              Firstname: "Gayan",
              Lastname: "Kariyawasam",
              NIC:"ID009",
              email:"gayan@gmail.com",
              status:"Not returned"
            }
        )
      }
      





 render(){
        return(
            <div className = "container"  style={{backgroundColor:"rgb(0,0,0,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
                <center><h3 style={{color:'white'}}>ADD NEW BORROWER</h3></center>
                <form onSubmit={this.onSubmit}>

                    <div className="form-grouo">
                         
                         <label style={{color:'white'}}>Book Name</label> 
                         <input 
                            type="text"
                            placeholder="Enter book name"
                            className="form-control"
                            value={this.state.BookName}
                            onChange={this.onChangeBookName}
                            /> 
                            
                            <div style={{color:"red"}}>
                                {this.state.BookNameError}
                            </div> 
                            
  
    
    
    

                    </div>
                    <div className="form-group">
                        
                        <label style={{color:'white'}}>First name</label>
                        <input 
                            type="text"
                            placeholder="Enter first name"
                            className="form-control"
                            value={this.state.Firstname}
                            onChange={this.onChangeFirstname}
                            /> 
                            <div style={{color:"red"}}>
                                {this.state.FirstnameError}
                            </div> 
                        
                    </div>

                    <div className="form-grouo">
                         
                         <label style={{color:'white'}}>Last name</label> 
                         <input 
                            type="text"
                            placeholder="Enter last name"
                            className="form-control"
                            value={this.state.Lastname}
                            onChange={this.onChangeLastname}
                            />
                            <div style={{color:"red"}}>
                                {this.state.LastnameError}
                            </div>       
                    </div>

                    <div className="form-grouo">
                         
                         <label style={{color:'white'}}>ID Number</label> 
                         <input 
                            type="text"
                            placeholder="Enter ID number"
                            className="form-control"
                            value={this.state.NIC}
                            onChange={this.onChangeNIC}
                            />  
                            <div style={{color:"red"}}>
                                {this.state.NICError}
                            </div>     
                        
                    </div>
                    <div className="form-grouo">
                         
                         <label style={{color:'white'}}>Email address</label> 
                         <input 
                            type="email"
                            placeholder="Enter email address"
                            className="form-control"
                            
                            value={this.state.email}
                            onChange={this.onChangeemail}
                                
                            />  
                            <Form.Text  className="text-muted" className="text-muted" >
                                 Enter valid email address
                            </Form.Text>
                            
                    </div>


                        <div className="form-grouo">
                         
                        <label style={{color:'white'}}>Date Barrowed</label> 
                        <div>
                            <DatePicker
                            selected={this.state.DateBarrowed}
                            onChange={this.onChangeDateBarrowed}
                            minDate={new Date()}
                            />  
                               
                        </div>  
                    </div>

                    <div className="form-grouop">
                         
                         <label style={{color:'white'}}>DateReturned</label> 
                         <div>
                             <DatePicker
                             selected={this.state.DateReturned}
                             onChange={this.onChangeDateReturned}
                             minDate={new Date()}
                             />   
                              
                         </div>  
                     </div>

                     <div className="form-group">
                        
                        <label style={{color:'white'}}>Status</label>
                        <input 
                            type="text"
                            placeholder="Enter status"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangestatus}
                            /> 
                            <div style={{color:"red"}}>
                                {this.state.statusError}
                            </div> 
                        
                    </div>
                    
                    <br/>



                    

                    <div className="form-group" align="center">
                            <input type="submit" value="Insert new Borrower" className="btn btn-primary"/>
                    </div>
                    <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'5px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
                    </button>
                </form> 
             </div>
        )
    }

}