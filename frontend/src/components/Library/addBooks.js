import React, { Component} from 'react';

import axios from 'axios';
import { Form } from 'react-bootstrap';
import swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';

//import { useState } from 'react';

//boarder
// const body = {
// };


//validation
  const initialState = {

    title:'',
    AuthorFirstname:'',
    AuthorLastname:'',
    Description:'',
    Language:'',
    Company:'',
    Availability:'',
    Totalbooks:'',
    Books:[],
    titleError: '',
    AuthorFirstnameError:'',
    AuthorLastnameError:'',
    DescriptionError:'',
    LanguageError:'',
    CompanyError:'',
    AvailabilityError:'',
    TotalbooksError:'',
  }


  export default class AddBooks extends Component{
    constructor(props) {
        super(props);
        //enables  to access props and state for the component
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeAuthorFirstname = this.onChangeAuthorFirstname.bind(this);
        this.onChangeAuthorLastname = this.onChangeAuthorLastname.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeAvailability = this.onChangeAvailability.bind(this);
        this.onChangeTotalbooks = this.onChangeTotalbooks.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.state= initialState;
    }

    componentDidMount(){
      this.setState({
          Books:['test user'],
          name : 'test user'
      })
    }
    onChangetitle(e){
      this.setState({
        title: e.target.value
      });
  }
  onChangeAuthorFirstname(e){
      this.setState({
        AuthorFirstname: e.target.value
      });
  }
  onChangeAuthorLastname(e){
      this.setState({
        AuthorLastname: e.target.value
      });
  }
  onChangeDescription(e){
      this.setState({
        Description: e.target.value
      });
  } 
  onChangeLanguage(e){
    this.setState({
      Language: e.target.value
    });
  } 

  onChangeCompany(e){
      this.setState({
        Company: e.target.value
      });
  } 
  
  onChangeAvailability(e){
      this.setState({
        Availability: e.target.value
      });
  }
  onChangeTotalbooks(e){
    this.setState({
      Totalbooks: e.target.value
    });
}
validate = () =>{
  let titleError='';
  let AuthorFirstnameError='';
  let AuthorLastnameError='';
  let DescriptionError='';
  let LanguageError='';
  let CompanyError='';
  let AvailabilityError='';
  let TotalbooksError='';
  

  if(!this.state.title){
    titleError="Book name cannot be empty";
  }
  if(!this.state.AuthorFirstname){
    AuthorFirstnameError="First name cannot be empty";
  }
  if(!this.state.AuthorLastname){
    AuthorLastnameError="Last name cannot be empty";
  }
  if(!this.state.Description){
    DescriptionError="Description cannot be empty";
  }
  if(!this.state.Language){
    LanguageError="Language cannot be empty";
  }
  if(!this.state.Company){
    CompanyError="company cannot be empty";
  }

  if(!this.state.Availability){
    AvailabilityError="Availability cannot be empty";
  }
  if(!this.state.Totalbooks){
    TotalbooksError="Total Books cannot be empty";
  }
  if( titleError|| AuthorFirstnameError||AuthorLastnameError  ||DescriptionError||LanguageError||CompanyError||  AvailabilityError || TotalbooksError ){
      this.setState({ titleError, AuthorFirstnameError ,AuthorLastnameError,DescriptionError,LanguageError,CompanyError,AvailabilityError ,TotalbooksError  });
      return false
  } 
  return true;

};
onSubmit(e){
  e.preventDefault();

  const newLibrary ={
    title: this.state.title,
    AuthorFirstname : this.state.AuthorFirstname,
    AuthorLastname : this.state.AuthorLastname,
    Description : this.state.Description,
    Language : this.state.Language,
    Company:this.state.Company,
    Availability : this.state.Availability,
    Totalbooks : this.state.Totalbooks,
     

  }
  const isValid = this.validate()
  if(isValid){
    axios.post("http://localhost:8070/Library/add",newLibrary).then(()=>{
      //alert("Book Added Successfully")
      swal.fire("Inserted","Book inserted successfully!","success")
    }).catch((err) =>{
      alert(err)
    })
     this.state = ({
       title:'',
       AuthorFirstname:'',
       AuthorLastname:'',
       Description:'',
       Language:'',
       Company:'',
       Availability:'',
       Totalbooks:'',
       Books:[],
   })
}
}
//DEMO button
btnDemo = (e) => {
  e.preventDefault();

  const { title,AuthorFirstname,AuthorLastname,Description,Language,Company,Availability,Totalbooks} = this.state;

  const data = {
      title: title,
      AuthorFirstname: AuthorFirstname,
      AuthorLastname: AuthorLastname,
      Description: Description,
      Language : Language,
      Company : Company,
      Availability : Availability,
      Totalbooks:Totalbooks
  }

  console.log(data)

  this.setState(
      {
        title: "Elephant Complex",
        AuthorFirstname: "John",
        AuthorLastname: "Gimlette",
        Description:"Home to thousands of wild elephants, this is a place where natural beauty has endured, indifferent to human tragedy.",
        Language: "English",
        Company: "ADK",
        Availability: "6",
        Totalbooks:"9"
      }
  )
}



  render(){
  
  return(
    
        <div className = "container"  style={{backgroundColor:"rgb(0,0,0,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
          
         
         <center><h3 style={{color:'white'}} >ADD NEW BOOK</h3></center>
         
         <form onSubmit={this.onSubmit}>
         
      <div className="form-grouo"  >
     
     <label style={{color:'white'}} >Book Name</label> 
     <input 
        type="text"
        placeholder="Enter book name"
        className="form-control"
        value={this.state.title}
        onChange={this.onChangetitle}
        />  
        <div style={{color:"red"}}>
            {this.state.titleError}
        </div>     
    
</div>
<div className="form-group">
    
    <label style={{color:'white'}}>Author First name</label>
    <input 
        type="text"
        placeholder="Enter first name"
        className="form-control"
        value={this.state.AuthorFirstname}
        onChange={this.onChangeAuthorFirstname}
        /> 
        <div style={{color:"red"}}>
            {this.state.AuthorFirstnameError}
        </div> 
    
</div>



<div className="form-grouo">
     
     <label style={{color:'white'}}>Author Last name</label> 
     <input 
        type="text"
        placeholder="Enter author name"
        className="form-control"
        value={this.state.AuthorLastname}
        onChange={this.onChangeAuthorLastname}
        />
        <div style={{color:"red"}}>
            {this.state.AuthorLastnameError}
        </div>        
</div>
<div className="form-grouo">
     
     <label style={{color:'white'}}>Language</label> 
     <input 
        type="text"
        placeholder="Enter language"
        className="form-control"
        value={this.state.Language}
        onChange={this.onChangeLanguage}
        />
        <div style={{color:"red"}}>
            {this.state.LanguageError}
        </div> 
               
</div>

<Form.Group className="from-group" >
    <Form.Label style={{color:'white'}}>Discription</Form.Label>
    <Form.Control as="textarea" rows={3}

    value={this.state.Description} 
    onChange = {this.onChangeDescription}
     />
    <div style={{color:"red"}}>
            {this.state.DescriptionError}
        </div> 
  </Form.Group>


  <div className="form-group">
    
    <label style={{color:'white'}}>Company</label>
    <input 
        type="text"
        placeholder="Enter company name"
        className="form-control"
        value={this.state.Company}
        onChange={this.onChangeCompany}
        /> 
        <div style={{color:"red"}}>
            {this.state.CompanyError}
        </div> 
  </div>
  
<div className="form-group">
    
    <label style={{color:'white'}}>Availability</label>
    <input 
        type="text"
        placeholder="Enter availability"
        className="form-control"
        value={this.state.Availability}
        onChange={this.onChangeAvailability}
        /> 
        <div style={{color:"red"}}>
            {this.state.AvailabilityError}
        </div> 
    
</div>
<div className="form-group">
    
    <label style={{color:'white'}}>Total books</label>
    <input 
        type="text"
        placeholder="Enter total book"
        className="form-control"
        value={this.state.Totalbooks}
        onChange={this.onChangeTotalbooks}
        /> 
        <div style={{color:"red"}}>
            {this.state.TotalbooksError}
        </div> 
    
</div>

<br/>





<div className="form-group" align="center">
        <input type="submit" value="Insert new Book" className="btn btn-primary" />
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