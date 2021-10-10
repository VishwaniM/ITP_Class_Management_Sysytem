import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import jspdf from "jspdf";
import 'jspdf-autotable';
import swal from "sweetalert2";


const generatePDF = staff=> {

    const doc = new jspdf();
    const tableColumn = ["First Name", "Last Name", "StaffID", "StaffType", "Position", "Address", "Age", "Gender", "NIC", "Contact Number", "Username"];
    const tableRows = [];
   

    staff.map(staf => {
        const stafData = [
            staf.firstName,
            staf.secondName,
            staf.userID,
            staf.type,
            staf.position,
            staf.address,
            staf.age,
            staf.gender,
            staf.nic,
            staf.contactNumber,
            staf.username,


             
        ];
        tableRows.push(stafData);
    })
   
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save(" All Staff Members Details Report.pdf");
};

const Staff = props =>(
    <tr>
        <td style={{color:'white'}}>{props.staff.firstName}</td>
        <td style={{color:'white'}}>{props.staff.secondName}</td>
        <td style={{color:'white'}}>{props.staff.userID}</td>
        <td style={{color:'white'}}>{props.staff.type}</td>
        <td style={{color:'white'}}>{props.staff.position}</td>
        <td style={{color:'white'}}>{props.staff.address}</td>
        <td style={{color:'white'}}>{props.staff.age}</td>
        <td style={{color:'white'}}>{props.staff.gender}</td>
        <td style={{color:'white'}}>{props.staff.nic}</td>
        <td style={{color:'white'}}>{props.staff.contactNumber}</td>
        <td style={{color:'white'}}>{props.staff.username}</td>
        {/*<td>{props.staff.password}</td>*/}
        
    
        {/*<td >

        <Link to ={"/updateStaff/"+props.staff._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeleteStaff(props.staff._id)}}>Delete</a></td>
        */}
      <td>
             <a className="btn btn-warning" href={`/updateStaff/${props.staff._id}`}>
                 <i className="fas fa-edit"></i>&nbsp;Update
            </a>
             &nbsp;
           <a className="btn btn-danger" href="#" onClick={()=>{ props.DeleteStaff(props.staff._id) }}>
                 <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
      </td>
       </tr>
)

export default class EditStaff extends Component{
    constructor(props){
        super(props);

        this.DeleteStaff = this.DeleteStaff.bind(this);
        this.state = {staff: []}
    }

    componentDidMount(){
        axios.get('http://localhost:8070/Staff/')
        .then(response => {
            this.setState({staff: response.data})
        })
        .catch((error) =>{
         console.log(error);
        })
    }

    DeleteStaff(id){
        axios.delete('http://localhost:8070/Staff/delete/'+id)
        .then(res => console.log(res.data));
        swal.fire("Deleted","Staff member successfully Deleted","success")
        this.setState({
            staff: this.state.staff.filter(el => el._id !== id)
        })
    }
    filterData(staff,searchKey){

        const result = staff.filter((stf)=>

        stf.firstName.toLowerCase().includes(searchKey)||

        stf.userID.toLowerCase().includes(searchKey)||

        stf.position.toLowerCase().includes(searchKey)||

        stf.username.toLowerCase().includes(searchKey)


        )

        this.setState({staff:result})

    }

    

    

      handleSearchArea = (e) =>{

          const searchKey = e.currentTarget.value;
          var searchKeyLc=(String(searchKey)).toLowerCase();


          axios.get('http://localhost:8070/Staff/').then(res =>{

            

         this.filterData(res.data,searchKeyLc);

               

          })

      }

    CurrentStaffTable(){
        return this.state.staff.map(currentexercise => {

            return <Staff staff={currentexercise} DeleteStaff={this.DeleteStaff} key={currentexercise._id}/>

        })

    }

    

   render(){
       return (
           <div  className = "container">
               <br></br>
               <center><h1>All STAFF MEMBERS</h1></center>
               <div className="container">



<div className="row">

    <div className="col-lg-9 mt-2 mb-2"/>

    <div className="col-lg-3 mt-2 mb-2">

        <input className="form-control" type="search" placeholder="Search" name="searchEmployee" onChange={this.handleSearchArea}>                                

        </input>

    </div>

</div>

<table className="table table-hover" style={{backgroundColor:"rgb(0,0,0,0.6)",borderRadius:"20px 20px 0px 0px", marginTop:"30px"}}>
                   <thead className="thead-light">
                       <tr>
                       <th >Staff Member First Name</th>
                       <th >Staff Member Last Name</th>
                       <th >Staff ID</th>
                       <th >Staff Type</th>
                       <th >Position</th>
                       <th >Address</th>
                       <th >Age</th>
                       <th >Gender</th>
                       <th >NIC</th>
                       <th >Contact Number</th>
                       <th >User Name</th>
                       <th>Action</th>
                       
                       </tr>
                       </thead>
                       <tbody>
                           {this.CurrentStaffTable()  }
                       </tbody>
               </table>
           </div>
           <div class="button">
         <button type ="button" class = "btn btn-secondary btn-sm" onClick={()=> generatePDF(this.state.staff)}>GenerateReport</button>
            </div>
           </div>


           
       )
   }
}