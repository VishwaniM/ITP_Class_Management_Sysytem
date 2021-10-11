import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import swal from "sweetalert2";

const generatePDF = Books=> {

    const doc = new jsPDF();
    const tableColumn = ["BOOK NAME", "FIRST NAME", "LAST NAME","ID","EMAIL ADDRESS","DATE BORROWED","DATE RETURNED","STATUS"];
    const tableRows = [];
   

    Books.map(Book => {
        const BookData = [
            Book.BookName,
            Book.Firstname,
            Book.Lastname,
            Book.NIC,
            Book.email,
            Book.DateBarrowed,
            Book.DateReturned,
            Book.status,
             
        ];
        tableRows.push(BookData);
    })
   
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save("Borrowers Details Report.pdf");
};


const Barrow = props =>(
    <tr>
        <td style={{color:'white'}}>{props.Books.BookName}</td>
        <td style={{color:'white'}}>{props.Books.Firstname}</td>
        <td style={{color:'white'}}>{props.Books.Lastname}</td>
        <td style={{color:'white'}}>{props.Books.NIC}</td>
        <td style={{color:'white'}}>{props.Books.email}</td>
        <td style={{color:'white'}}>{props.Books.DateBarrowed}</td>
        <td style={{color:'white'}}>{props.Books.DateReturned}</td>
        <td style={{color:'white'}}>{props.Books.status}</td>
    {/*<td >
   
    <Link to ={"/updateLibrary/"+props.Books._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeleteBarrower(props.Books._id)}}>Delete</a></td>
    */}

        <td>
             <a className="btn btn-warning" href={`/updateBarrowers/${props.Books._id}`}>
                 <i className="fas fa-edit"></i>&nbsp;Edit
            </a>
             &nbsp;
           <a className="btn btn-danger" href="#" onClick={()=>{ props.DeleteBarrower(props.Books._id) }}>
                 <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
       </td>


    </tr>


)


export default class AllBarrowersDetails extends Component{
    constructor(props){
        super(props);

        this.DeleteBarrower = this.DeleteBarrower.bind(this);
        this.state = {Books: []}
    }

    componentDidMount(){
        axios.get('http://localhost:8070/Barrow/')
        .then(response => {
            this.setState({Books: response.data})
        })
        .catch((error) =>{
         console.log(error);
        })
    }

    DeleteBarrower(id){
        axios.delete('http://localhost:8070/Barrow/delete/'+id)
        .then(res => console.log(res.data));
        swal.fire("Deleted","Borrower details deleted successfully!","success")
        this.setState({
            Books: this.state.Books.filter(el => el._id !== id)
        })
    }

    filterData(Books,searchKey){

        const result = Books.filter((Bow)=>
        Bow.BookName.toLowerCase().includes(searchKey)||
        Bow.Firstname.toLowerCase().includes(searchKey)||
        Bow.Lastname.toLowerCase().includes(searchKey)||
        Bow.NIC.toLowerCase().includes(searchKey)||
        Bow.status.toLowerCase().includes(searchKey)
        

        )

        this.setState({Books:result})

    }
    handleSearchArea = (e) =>{

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:8070/Barrow/').then(res =>{

        this.filterData(res.data,searchKey)

        })

      }





    CurrentBarrowersTable(){
        return this.state.Books.map(currentexercise => {

            return <Barrow Books={currentexercise} DeleteBarrower={this.DeleteBarrower} key={currentexercise._id}/>

        })

    }

    

   render(){
       return (
           <div>
               <br></br>
               <center><h1 style={{color:'white'}}>BORROWERS DETAILS</h1></center>
               
                <div className="container">
                <div className="row">
                <div className="col-lg-9 mt-2 mb-2"/>
                <div className="col-lg-3 mt-2 mb-2">

                <input className="form-control" type="search" placeholder="Search" name="searchEmployee" onChange={this.handleSearchArea}>                                
            </input>
            </div>
             </div>
             <div class="button">
            <button type ="button" class = "btn btn-secondary btn-sm"  onClick={()=> generatePDF(this.state.Books)}>Generate Report</button>
            
            </div>

               <table  class="table" className="table table-hover" style={{backgroundColor:"rgb(0,0,0,0.6)",borderRadius:"20px 20px 0px 0px", marginTop:"30px"}}>
                   <thead className="thead-light">
                       <tr>
                       <th style={{color:'white'}}>Book Name</th>
                       <th style={{color:'white'}}>First Name</th>
                       <th style={{color:'white'}}>Last Name</th>
                       <th style={{color:'white'}}>ID Number</th>
                       <th style={{color:'white'}}>Email Address</th>
                       <th style={{color:'white'}}> Date Borrowed</th>
                       <th style={{color:'white'}}> Date Returned</th>
                       <th style={{color:'white'}}>Status</th>

                       </tr>
                       </thead>
                       <tbody>
                           {this.CurrentBarrowersTable() }
                       </tbody>
               </table>
           </div>
           
           </div>
       )
   }
}