import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Form } from 'react-bootstrap';
import swal from "sweetalert2";



export default class editLibrary extends Component{
    constructor(props) {
        super(props);

        this.onChangetitle= this.onChangetitle.bind(this);
        this.onChangeAuthorFirstname= this.onChangeAuthorFirstname.bind(this);
        this.onChangeAuthorLastname= this.onChangeAuthorLastname.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeAvailability = this.onChangeAvailability.bind(this);
        this.onChangeTotalbooks = this.onChangeTotalbooks.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
         

        this.state = {
            title:'',
            AuthorFirstname:'',
            AuthorLastname:'',
            Description:'',
            Language:'',
            Company:'',
            Availability:'',
            Totalbooks:'',
            Library:[]
        }
    
    }

    componentDidMount(){
        axios.get('http://localhost:8070/Library/'+this.props.match.params.id)
        
        .then(response => {
            this.setState({
            

                title:response.data.title,
                AuthorFirstname:response.data.AuthorFirstname,
                AuthorLastname:response.data.AuthorLastname,
                Description:response.data.Description,
                Language:response.data.Language,
                Company:response.data.Company,
                Availability:response.data.Availability,
                Totalbooks:response.data.Totalbooks
             })
            
        }).catch(function (error){
            console.log(error);
        })
    }
    
    onChangetitle(e){
        this.setState({
            title : e.target.value
        });
    }
    onChangeAuthorFirstname(e){
        this.setState({
            AuthorFirstname : e.target.value
        });
    } 

    onChangeAuthorLastname(e){
        this.setState({
            AuthorLastname : e.target.value
        });
    } 
    onChangeDescription(e){
        this.setState({
            Description : e.target.value
        });
    }
    onChangeLanguage(e){
        this.setState({
            Language : e.target.value
        });
    }
    onChangeCompany(e){
        this.setState({
           Company : e.target.value
        });
    }
    onChangeAvailability(e){
        this.setState({
            Availability: e.target.value
        });
    }
    onChangeTotalbooks(e){
        this.setState({
            Totalbooks : e.target.value
        });
    } 

   
    onSubmit(e){
        e.preventDefault();
        const library ={
            title: this.state.title,
            AuthorFirstname : this.state.AuthorFirstname,
            AuthorLastname: this.state.AuthorLastname,
            Description: this.state.Description,
            Language: this.state.Language,
            Company : this.state.Company,
            Availability: this.state.Availability,
            Totalbooks: this.state.Totalbooks,
        }

    
       console.log(library);

       axios.put('http://localhost:8070/Library/update/'+this.props.match.params.id ,library)
       .then(res => console.log(res.data));
       //swal.fire("Updated","Book details updated successfully!","success")
       window.location='/listL'; 
        
    }


    render(){

        return(
            <div className="container">
            <div>
            <center><h3>UPDATE THE DATA PROVIDED ABOUT THE BOOK</h3></center>
                <form onSubmit={this.onSubmit}>

                    <div className="form-grouo">
                         
                         <label>Book name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangetitle}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>Author First name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.AuthorFirstname}
                            onChange={this.onChangeAuthorFirstname}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>Author Last name</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.AuthorLastname}
                            onChange={this.onChangeAuthorLastname}
                            />      
                        
                    </div> 
                    
                    <div className="form-grouo">
                         
                         <label>Language</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Language}
                            onChange={this.onChangeLanguage}
                            />      
                        
                    </div>
                    <Form.Group className="from-group">
                    <Form.Label>Discription</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    value={this.state.Description} 
                    onChange = {this.onChangeDescription}
                     />
                    </Form.Group> 
                    <div className="form-grouo">
                         
                         <label>Company</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Company}
                            onChange={this.onChangeCompany}
                            />      
                        
                    </div>
                    <div className="form-grouo">
                         
                         <label>Availability</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Availability}
                            onChange={this.onChangeAvailability}
                            />      
                        
                    </div>

                    <div className="form-grouo">
                         
                        <label>Total books</label> 
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Totalbooks}
                            onChange={this.onChangeTotalbooks}
                            />  
                        
                    </div>
                    
                    
                    <br/>
                    <div className="form-group" align="center">
                            <input type="submit" value="Edit Library Details" className="btn btn-primary"/>
                    </div>
                     
                </form> 
             </div> 
             </div>
        )
    }
}
