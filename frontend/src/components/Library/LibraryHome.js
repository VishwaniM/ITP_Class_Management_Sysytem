import React,{ Component} from 'react';
//import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import axios from 'axios';
import { Button} from 'react-bootstrap';
import { Card} from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/Image';
//import Col from 'react-bootstrap/Image';

// import library from '../images/library.jpg';



export default class LibraryHome extends Component{

    render(){
        return(
            
        <div className="d-grid gap-2">
         
         
  {/* <img src="assets/images/library.jpg" /> */}
  


  
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
  <Card.Img src="assets/images/plibrary.jpeg" height="500px" />

  <Card.ImgOverlay>
    <Card.Title ><h1>WELCOME </h1></Card.Title>
    <Card.Text>
      <h2>Welcome-DAKMA INSTITUTE LIBRARY</h2>
    </Card.Text>

    
  {/* <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button> */}

  </Card.ImgOverlay>
</Card>


          <div className="d-grid gap-2"></div>
          <Button variant="secondary" size="lg"  href="http://localhost:3000/listUL"  variant="dark">
           SEARCH BOOKS
          </Button>
          
          
        <Button variant="secondary" size="lg"  href="http://localhost:3000/add1"   variant="dark">
            ADD BOOKS TO THE LIBRARY
          </Button>
       
          
        <Button variant="primary" size="lg" href="http://localhost:3000/listL"  variant="dark">
           EDIT BOOK DETAILS
          </Button>
       
          
        <Button variant="secondary" size="lg" href="http://localhost:3000/add2"  variant="dark">
            ADD BORROWERS DETAILS
          </Button>
          
          
        <Button variant="primary" size="lg" href="http://localhost:3000/listB"  variant="dark">
           EDIT BORROWERS DETAILS
          </Button>
          <br></br>
          <br></br>

        </div>
        )}
        

}
