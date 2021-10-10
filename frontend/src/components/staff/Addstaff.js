import React, { Component} from 'react';

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Form } from 'react-bootstrap';
import swal from "sweetalert2";


const styles = {

    border: '20px solid rgba(0, 0, 0, 0.05)', 
  
  
  };

const initialState = {
    firstName: '',
    secondName: '',
    userID:'',
    type:'Nonacademic',
    position:'',
    address:'',
    age:'',
    gender: 'Male',
    nic:'',
    contactNumber:'',
    username:'',
    password:'',
    Staff: [],
    nicError:'',
    contactNumberError:'',
    usernameError:'',
    passwordError:'',
    
    
    
    }





export default class Addstaff extends Component{
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
this.onChangeusername = this.onChangeusername.bind(this);
this.onChangepassword = this.onChangepassword.bind(this);
this.onSubmit = this.onSubmit.bind(this);
this.state = initialState;
}
componentDidMount(){
    this.setState({
    Staff:['test user'],
    name : 'test user'
    })
    }
    
    
    onChangefirstName(e){
    this.setState({
    firstName: e.target.value
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
    age: e.target.value
    });
    }
    onChangegender(e){
    this.setState({
    gender: e.target.value
    });
    }
    onChangenic(e){
    this.setState({
    nic: e.target.value
    });
    }
    onChangecontactNumber(e){
    this.setState({
    contactNumber: e.target.value
    });
    }
    onChangeusername(e){
    this.setState({
    username: e.target.value
    });
    }
    onChangepassword(e){
    this.setState({
    password: e.target.value
    });
    }
    
    validate = () =>{
        let nicError='';
        let contactNumberError='';
        let usernameError='';
        let passwordError='';

        
        if((this.state.nic.trim().length == 10) && (this.state.nic.charAt(9)=="V")){
            
    
            //nicError="NIC length should be 10";
          }
          else if((this.state.nic.trim().length == 12) &&(!(isNaN(this.state.nic)))){

          }
          else{
              nicError="Enter a valid NIC";
          }
          if(this.state.contactNumber.trim().length != 10){
        
            contactNumberError="Contact number length should be 10";
        
          }
          
          if(!this.state.username){
            usernameError="User Name cannot be empty";
          }

          if(this.state.password.trim().length  <8){
            passwordError="Password length should be 8 or more";
          }


        
          if(  nicError || contactNumberError || usernameError || passwordError ){
        
              this.setState({ nicError ,contactNumberError, usernameError, passwordError  });
        
              return false
        
          } 
        
          return true;

    };

    onSubmit(e){
        e.preventDefault();
        
        
        
        const staff ={
        firstName : this.state.firstName,
        secondName : this.state.secondName,
        userID : this.state.userID,
        type : this.state.type,
        position : this.state.position,
        address : this.state.address,
        age : this.state.age,
        gender : this.state.gender,
        nic : this.state.nic,
        contactNumber : this.state.contactNumber,
        username : this.state.username,
        password : this.state.password,
        
        
        }
        const isValid = this.validate()

        if(isValid){
            axios.post('http://localhost:8070/Staff/add',staff)
            .then(()=>{
            //alert("New Staff member successfully Added")
            swal.fire("Inserted","New Staff member successfully Added","success")
            }).catch((err)=>{
            alert(err)
            })
            this.setState(initialState);
            // this.state = ({
            //     firstName: '',
            //     secondName: '',
            //     userID:'',
            //     type:'Academic',
            //     position:'',
            //     address:'',
            //     age:'',
            //     gender: '',
            //     nic:'',
            //     contactNumber:'',
            //     username:'',
            //     password:'',
            //     Staff: [],

            // })
        }
    }



    btnDemo = (e) => {
        e.preventDefault();
        
        
        
        const {firstName ,secondName,userID,position,address,age,nic,contactNumber,username,password} = this.state;
        
        
        
        const data = {
        firstName: firstName,
        secondName: secondName,
        userID: userID,
        position : position,
        address : address,
        age : age,
        nic : nic,
        contactNumber : contactNumber,
        username : username,
        password : password
        }
        
        
        
        console.log(data)
        
        
        
        this.setState(
        {
        firstName: "Dilki",
        secondName: "Nuwansara",
        userID: "id567845",
        position: "Teacher-English",
        address: "Galle",
        age: "22",
        nic:"995673458V",
        contactNumber:"0773456238",
        username:"dilki99@gmail.com",
        password:"dilki1234"





        }
        )
        }    


render(){
return(
<div className = "container" style={styles} style={{backgroundColor:"rgb(150,150,150,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}} >
<center><h3>Register Staff Member</h3></center>
<form onSubmit={this.onSubmit}>



<div className="form-group">

<label> Staff Member First Name</label>
<input
type="text"
placeholder="Enter Your First Name"
className="form-control"
value={this.state.firstName}
onChange={this.onChangefirstName}
/>

</div>
<div className="form-group">

<label> Staff Member Last Name</label>
<input
type="text"
placeholder="Enter Your Last Name"
className="form-control"
value={this.state.secondName}
onChange={this.onChangesecondName}
/>
</div>

<div className="form-group">

<label> Staff Member ID</label>
<input
type="text"
placeholder="Enter Your ID"
className="form-control"
value={this.state.userID}
onChange={this.onChangeuserID}
/>
</div>

<div className="form-group">

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

<label> Position</label>
<input
type="text"
placeholder="Enter Your Position"
className="form-control"
value={this.state.position}
onChange={this.onChangeposition}
/>
</div>



<div className="form-group">

<label>Address</label>
<input
type="text"
placeholder="Enter Your Address"
className="form-control"
value={this.state.address}
onChange={this.onChangeaddress}
/>

</div>

<div className="form-group">

<label>Age</label>
<input
type="text"
placeholder="Enter Your Age"
className="form-control"
value={this.state.age}
onChange={this.onChangeage}
/>
</div>



<div className="form-group">

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
placeholder="Enter Your NIC"
className="form-control"
value={this.state.nic}
onChange={this.onChangenic}
/>
<div style={{color:"red"}}>

    {this.state.nicError}

</div> 
</div>


<div className="form-group">

<label>Contact Number</label>
<input
type="text"
placeholder="Enter Your Contact Number"
className="form-control"
value={this.state.contactNumber}
onChange={this.onChangecontactNumber}
/>
<div style={{color:"red"}}>

    {this.state.contactNumberError}

</div> 
</div>


<div className="form-grouo">

                         

                         <label>User Name</label> 

                         <input 

                            type="email"
                            placeholder="Enter Your Email"

                            className="form-control"

                            

                            value={this.state.username}

                            onChange={this.onChangeusername}

                                

                            />  

                            <Form.Text className="text-muted" className="text-muted">

                                 Enter valid email address

                            </Form.Text>

                            

                    </div>




<div className="form-group">

<label>Password</label>
<input
type="text"
placeholder="Enter Your Password"
className="form-control"
value={this.state.password}
onChange={this.onChangepassword}
/>
<div style={{color:"red"}}>

    {this.state.passwordError}

</div> 
</div>


<br/>


<div className="form-group" align="center">
<input type="submit" value="Add New Staff Member" className="btn btn-primary"/>
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