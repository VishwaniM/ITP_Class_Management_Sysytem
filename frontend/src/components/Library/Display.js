import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import swal from "sweetalert2";


//GENERATE REPORT
const generatePDF = Books=> {

    const doc = new jsPDF();
    const tableColumn = ["BOOK NAME", "AUTHOR FIRST NAME", "DESCRIPTION","LANGUAGE","AVAILABILITY","TOTAL BOOKS"];
    const tableRows = [];
   

    Books.map(Book => {
        const BookData = [
            Book.title,
            Book.AuthorFirstname,
            Book.Description,
            Book.Language,
            Book.Availability,
            Book.Totalbooks,
             
        ];
        tableRows.push(BookData);
    })
   
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save("BOOK Details Report.pdf");
};



const Library = props =>(
    <tr>
        <td style={{color:'white'}}>{props.Books.title}</td>
        <td style={{color:'white'}}>{props.Books.AuthorFirstname}</td>
        <td style={{color:'white'}}>{props.Books.AuthorLastname}</td>
        <td style={{color:'white'}}>{props.Books.Description}</td>
        <td style={{color:'white'}}>{props.Books.Language}</td>
        <td style={{color:'white'}}>{props.Books.Company}</td>
        <td style={{color:'white'}}>{props.Books.Availability}</td>
        <td style={{color:'white'}}>{props.Books.Totalbooks}</td>
     
        {/*<td >

        <Link to ={"/updateLibrary/"+props.Books._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeleteBooks(props.Books._id)}}>Delete</a></td>*/}
      
      <td>
             <a className="btn btn-warning" href={`/updateLibrary/${props.Books._id}`} >
                 <i className="fas fa-edit" ></i>&nbsp;Edit
            </a>
             &nbsp;
           <a className="btn btn-danger" href="#" onClick={()=>{ props.DeleteBooks(props.Books._id) }}>
                 <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
       </td> 
       </tr>
)

export default class Display extends Component{
    constructor(props){
        super(props);

        this.DeleteBooks = this.DeleteBooks.bind(this);
        this.state = {Books: []}
    }

    componentDidMount(){
        axios.get('http://localhost:8070/Library/')
        .then(response => {
            this.setState({Books: response.data})
        })
        .catch((error) =>{
         console.log(error);
        })
    }

    //DELETE BOOK
    DeleteBooks(id){
        axios.delete('http://localhost:8070/Library/delete/'+id)
        .then(res => console.log(res.data));
        swal.fire("Deleted","Book deleted successfully!","success")
        this.setState({
            Books: this.state.Books.filter(el => el._id !== id)
        })
    }

    //SEARCH BOOK
    filterData(Books,searchKey){

        const result = Books.filter((Lib)=>

        Lib.title.toLowerCase().includes(searchKey)||
        Lib.AuthorFirstname.toLowerCase().includes(searchKey)||
        Lib.AuthorLastname.toLowerCase().includes(searchKey)||
        Lib.Description.toLowerCase().includes(searchKey)||
        Lib.Company.toLowerCase().includes(searchKey)
       
        )

        this.setState({Books:result})

    }

    handleSearchArea = (e) =>{
          const searchKey = e.currentTarget.value;
          axios.get('http://localhost:8070/Library/').then(res =>{

            this.filterData(res.data,searchKey)
        })

      }



    CurrentBooksTable(){
        return this.state.Books.map(currentexercise => {
        return <Library Books={currentexercise} DeleteBooks={this.DeleteBooks} key={currentexercise._id}/>

        })

    }

    

   render(){
       return (
           <div  className = "container" >
               <br></br>
               <center><h1 style={{color:'white'}}>THE BOOKS THAT ARE ALREADY IN THE LIBRARY</h1></center>

               

            <div className="container">
            <div className="row">
            <div className="col-lg-9 mt-2 mb-2"/>
            <div className="col-lg-3 mt-2 mb-2">

            <input className="form-control" type="search" placeholder="Search" name="searchEmployee" onChange={this.handleSearchArea}>                                
    </input>
</div>
</div>
<div class="button">
         <button  type ="button" class = "btn btn-secondary btn-sm"  onClick={()=> generatePDF(this.state.Books)}>Generate Report</button>
         
     </div>
               
               <table  class="table"   className="table table-hover" style={{backgroundColor:"rgb(0,0,0,0.6)",borderRadius:"20px 20px 0px 0px", marginTop:"30px"}}>
                   <thead className="thead-light">
                       <tr>
                       <th style={{color:'white'}}>Book Name</th>
                       <th style={{color:'white'}}>AuthorFirstname</th>
                       <th style={{color:'white'}}> AuthorLastname</th>
                       <th style={{color:'white'}}>Description</th>
                       <th style={{color:'white'}}>Language </th>
                       <th style={{color:'white'}}>Company</th>
                       <th style={{color:'white'}}>Availability</th>
                       <th style={{color:'white'}}>Totalbooks</th>
                      

                       </tr>
                       </thead>
                       <tbody>
                           {this.CurrentBooksTable()  }
                       </tbody>
               </table>
           
           </div>
           
       
     </div>  

          
       
       )
   }
}