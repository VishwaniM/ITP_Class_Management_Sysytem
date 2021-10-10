import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class UpdateStaff extends Component{
    constructor(props) {
        super(props);

        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangesecondName = this.onChangesecondName.bind(this);
        this.onChangeuserID = this.onChangeuserID.bind(this);
        this.onChangetype = this.onChangetype.bind(this);
        this.onChangeposition = this.onChangeposition.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onChangeage = this.onChangeage.bind(this);
        this.onChangegender = this.onChangegender.bind(this);
        this.onChangenic = this.onChangenic.bind(this);
        this.onChangecontactNumber = this.onChangecontactNumber.bind(this);
        this.onChangeusername= this.onChangeusername.bind(this);
        //this.onChangepassword = this.onChangepassword.bind(this);



        this.onSubmit = this.onSubmit.bind(this);
         

        this.state = {
            firstName: '',
            secondName: '',
            userID:'',
            type: '',
            position: '',
            address:'',
            age:'',
            gender:'',
            nic:'',
            contactNumber:'',
            username: '',
            //password: '',
            
            
            Staff: [] 

        }
    
    }

    componentDidMount(){
        axios.get('http://localhost:8070/Staff/'+this.props.match.params.id)
        .then(response => {
            this.setState({
            
            
                firstName: response.data.firstName,
                secondName: response.data.secondName,
                userID: response.data.userID,
                type: response.data.type,
                position: response.data.position,
                address:response.data.address,
                age:response.data.age,
                gender: response.data.gender,
                nic: response.data.nic,
                contactNumber:response.data.contactNumber,
                username: response.data.username,
                //password: response.data.password,

               
               })
        })
        .catch(function (error){
            console.log(error);
        })
    }
    
    onChangefirstName(e){
        this.setState({
            firstName : e.target.value
        });
    }
    onChangesecondName(e){
        this.setState({
            secondName: e.target.value
        });
    } 
    onChangeuserID(e){
        this.setState({
            userID: e.target.value
        });
    } 
    onChangetype(e){
        this.setState({
            type: e.target.value
        });
    } 
    onChangeposition(e){
        this.setState({
            position: e.target.value
        });
    } 

    onChangeaddress(e){
        this.setState({
            address: e.target.value
        });
    } 
    
    onChangeage(e){
        this.setState({
            age : e.target.value
        });
    }
    onChangegender(e){
        this.setState({
            gender : e.target.value
        });
    }
    onChangenic(e){
        this.setState({
            nic : e.target.value
        });
    } 
    onChangecontactNumber(e){
        this.setState({
            contactNumber : e.target.value
        });
    } 

    onChangeusername(e){
        this.setState({
            username : e.target.value
        });
    }

    /*onChangepassword(e){
        this.setState({
            password : e.target.value
        });
    }*/
    


    onSubmit(e){
        e.preventDefault();
        const Staff ={

            firstName: this.state.firstName,
            secondName: this.state.secondName,
            userID: this.state.userID,
            type:this.state.type,
            position:this.state.position,
            address:this.state.address,
            birthday:this.state.birthday,
            age:this.state.age,
            gender: this.state.gender,
            nic:this.state.nic,
            contactNumber:this.state.contactNumber,
            username:this.state.username,
            //password:this.state.password,
        }

    
       console.log(Staff);

       axios.put('http://localhost:8070/Staff/update/'+this.props.match.params.id ,Staff)
       .then(res => console.log(res.data));

       window.location='/listS'; 
        
    }



    render(){

        return(
            <div className="container">
            <div>
                <h3>Update Staff Member</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                         
                         <label>Staff Member First Name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangefirstName}
                            />      
                        
                    </div> 
                    <div className="form-group">
                         
                         <label>Staff Member Last Name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.secondName}
                            onChange={this.onChangesecondName}
                            />      
                        
                    </div> 

                    <div className="form-group">
                         
                         <label>Staff Member ID</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.userID}
                            onChange={this.onChangeuserID}
                            />      
                        
                    </div> 

                    <div className="form-group">
                         
                         <label>Staff Member Type</label> 
                         <label> Staff Member Type</label><br/>
<input
type="radio"
onClick={this.onChangetype}
name="type"
value="Academic"
id="Academic"
checked={this.state.type=="Academic"}
/>
<label for="Academic">
    Academic
</label><br/>
<input
type="radio"
onClick={this.onChangetype}
name="type"
value="Nonacademic"
id="NonAca"
checked={this.state.type=="Nonacademic"}
/>
<label for="NonAca">
    Non Academic
</label>      
                        
                    </div> 

                    <div className="form-group">
                         
                         <label>Position</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.position}
                            onChange={this.onChangeposition}
                            />      
                        
                    </div> 


                    <div className="form-group">
                         
                         <label>Address</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeaddress}
                            />      
                        
                    </div> 
                    
                    <div className="form-group">
                         
                         <label>Age</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeage}
                            />      
                        
                    </div>

                    
                    <div className="form-group">
                         
                         <label>Gender</label> 
                         <label>Gender</label><br/>
<input
type="radio"
onClick={this.onChangegender}
name="gender"
value="Male"
id="Male"
checked={this.state.gender=="Male"}
/>
<label for="Male">
    Male
</label><br/>
<input
type="radio"
onClick={this.onChangegender}
name="gender"
value="Female"
id="Female"
checked={this.state.gender=="Female"}
/>
<label for="Female">
    Female
</label>
                        
                    </div>

                    <div className="form-group">
                         
                         <label>NIC</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.nic}
                            onChange={this.onChangenic}
                            />      
                        
                    </div>

                    <div className="form-group">
                         
                         <label>Contact Number</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.contactNumber}
                            onChange={this.onChangecontactNumber}
                            />      
                        
                    </div>
                    
                    {/*<div className="form-group">
                         
                         <label>User Name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeusername}
                            />      
                        
                    </div> 
                    
                    <div className="form-group">
                         
                         <label>Password</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangepassword}
                            />      
        </div>*/}



                    
                    <br/>
                    <div className="form-group" align="center">
                            <input type="submit" value="Update" className="btn btn-primary"/>
                    </div>
                     
                </form> 
             </div> 
             </div>
        )
    }
}