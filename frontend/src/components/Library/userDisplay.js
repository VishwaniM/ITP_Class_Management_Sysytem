import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

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
     
        </tr>
      
      
)

export default class userDisplay extends Component{
    constructor(props){
        super(props);

        //this.DeleteBooks = this.DeleteBooks.bind(this);
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

               
               <table  class="table" className="table table-hover" style={{backgroundColor:"rgb(0,0,0,0.6)",borderRadius:"20px 20px 0px 0px", marginTop:"30px"}} >
                   <thead className="thead-light">
                       <tr>
                       <th style={{color:'white'}}>Book Name</th>
                       <th style={{color:'white'}}>AuthorFirstname</th>
                       <th style={{color:'white'}}>AuthorLastname</th>
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