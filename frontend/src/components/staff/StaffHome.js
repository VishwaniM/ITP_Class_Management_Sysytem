import React,{ Component} from 'react';
//import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import axios from 'axios';
import { Button} from 'react-bootstrap';
import { Card} from 'react-bootstrap';
//import ButtonGroup from 'react-bootstrap/Image';
//import Col from 'react-bootstrap/Image';

// import library from '../images/library.jpg';



export default class StaffHome extends Component{

    render(){
        return(
            
        <div className="d-grid gap-2">
         
         
  {/* <img src="assets/images/newStaff.jpeg" /> */}
  


  
   {/* <Card>
    <Card.Body>
      <Card.Text>
      <center><h1>WELCOME TO THE DEKMA INSTITUTE LIBRARY</h1></center>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="assets/images/plibrary.jpeg" height="500px" />
    <br></br>
    <br></br>
    
  </Card>  */}

<Card className="bg-dark text-white">
  <Card.Img src="https://lh3.googleusercontent.com/proxy/waq_4FZFv_7gdtf5W309gdBMfi66wJZYC_n4a7AaCOhdIiPHg_2knWsxpEgT-jPZixSDWIwWnD69hyBZoCdvNA" height="500px" />
  <Card.ImgOverlay>
    <Card.Title ><h1>WELCOME </h1></Card.Title>
    <Card.Text>
      <h2>Staff Management-DAKMA INSTITUTE </h2>
    </Card.Text>

    
  
  </Card.ImgOverlay>
</Card>


          <div className="d-grid gap-2"></div>
          {/*<Button variant="secondary" size="lg"  href="http://localhost:3000/add"  >
           Add Staff
</Button>*/}
          
   <a type="button"  href="http://localhost:3000/add" class="btn btn-secondary btn-lg btn-block">Add New Staff Member</a>
   <a type="button"  href="http://localhost:3000/listS" class="btn btn-secondary btn-lg btn-block">Update Staff Member</a>
   <a type="button"  href="http://localhost:3000/listS" class="btn btn-secondary btn-lg btn-block">Delete Staff Member</a>
   <a type="button"  href="http://localhost:3000/listS" class="btn btn-secondary btn-lg btn-block">All Staff Members</a>        
          
        {/*<Button variant="secondary" size="lg"  href="http://localhost:3000/listS"  variant="outline-dark">
            Update Staff Details
          </Button>
       
          
        <Button variant="primary" size="lg" href="http://localhost:3000/listS" variant="outline-dark">
           Remove Staff
          </Button>
       
          
        <Button variant="secondary" size="lg" href="http://localhost:3000/listS" variant="outline-dark">
            Get Report
</Button>*/}
          
          
        
          <br></br>
          <br></br>

        </div>
        )}
        

}