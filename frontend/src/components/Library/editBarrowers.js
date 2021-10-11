import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import swal from "sweetalert2";


export default class EditBarrowers extends Component{
    constructor(props) {
        super(props);

        this.onChangeBookName= this.onChangeBookName.bind(this);
        this.onChangeFirstname= this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangeDateBarrowed = this.onChangeDateBarrowed.bind(this);
        this.onChangeDateReturned = this.onChangeDateReturned.bind(this);
        this.onChangestatus = this.onChangestatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
         

        this.state = {
            BookName: '',
            Firstname: '',
            Lastname:'',
            NIC:'',
            email:'',
            DateBarrowed: new Date(),
            DateReturned:new Date(),
            status:'',
            Barrowers: [] 

        }
    
    }

    componentDidMount(){
        axios.get('http://localhost:8070/Barrow/'+this.props.match.params.id)
        .then(response => {
            this.setState({
            
            
                BookName: response.data.BookName,
                Firstname: response.data.Firstname,
                Lastname:response.data.Lastname,
                NIC:response.data.NIC,
                email:response.data.email,
                DateBarrowed: new Date(response.data.DateBarrowed),
                DateReturned:new Date(response.data.DateReturned),
                status:response.data.status
               
               })
        })
        .catch(function (error){
            console.log(error);
        })
    }
    
    onChangeBookName(e){
        this.setState({
            BookName : e.target.value
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
            NIC : e.target.value
        });
    }
    onChangeBocontact(e){
        this.setState({
            bocontact : e.target.value
        });
    }
    onChangeemail(e){
        this.setState({
            email : e.target.value
        });
    }
    onChangeDateBarrowed(date){
        this.setState({
            DateBarrowed : date
        });
    } 
    onChangeDateReturned(date){
        this.setState({
            DateReturned : date
        });
    } 

    onChangestatus(e){
        this.setState({
            status : e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const Barrowers ={

            BookName: this.state.BookName,
            Firstname: this.state.Firstname,
            Lastname:this.state.Lastname,
            NIC:this.state.NIC,
            email:this.state.email,
            DateBarrowed: this.state.DateBarrowed,
            DateReturned:this.state.DateReturned,
            status:this.state.status
        }

    
       console.log(Barrowers);

       axios.put('http://localhost:8070/Barrow/update/'+this.props.match.params.id ,Barrowers)
       //swal.fire("Updated","Borrower details updated successfully!","success")
       .then(res => console.log(res.data));
       
       window.location='/listB'; 
        
    }



    render(){

        return(
            <div className="container">
            <div>
                <center><h3>Edit Barrowers Details</h3></center>
                <form onSubmit={this.onSubmit}>

                    <div className="form-grouo">
                         
                         <label>Book Name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.BookName}
                            onChange={this.onChangeBookName}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>First name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Firstname}
                            onChange={this.onChangeFirstname}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>Last name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Lastname}
                            onChange={this.onChangeLastname}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>ID Number</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.NIC}
                            onChange={this.onChangeNIC}
                            />      
                        
                    </div>
                    <div className="form-grouo">
                         
                         <label>Email address</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeemail}
                            />      
                        
                    </div>
                    <div className="form-grouo">
                         
                        <label>Date Barrowed</label> 
                        <div>
                            <DatePicker
                            selected={this.state.DateBarrowed}
                            onChange={this.onChangeDateBarrowed}
                            />     
                        </div>  
                    </div>

                    <div className="form-grouo">
                         
                        <label>Date Returned</label> 
                        <div>
                            <DatePicker
                            selected={this.state.DateReturned}
                            onChange={this.onChangeDateReturned}
                            />     
                        </div>  
                    </div>
                    <div className="form-grouo">
                         
                         <label>Status</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangestatus}
                            />      
                        
                    </div>
                    
                    <br/>
                    <div className="form-group" align="center">
                            <input type="submit" value="Edit Barrowers" className="btn btn-primary"/>
                    </div>
                     
                </form> 
             </div> 
             </div>
        )
    }
}