import React, {useState,Component} from "react";
import {Link,useParams,withRouter } from 'react-router-dom';
import axios from "axios";

export default function SearchResult(props){
    const [result, setresult] = useState([]);
    
    const {id} = useParams();
    const [stuid,setstuid] = useState([]);
    function handleChange(e) {
        setstuid(e.target.value);
        console.log(stuid);
      }

      function submit(){
          console.log("TEST",stuid)
          axios.get(`http://localhost:5000/result/findresult/${stuid}`)
        .then((Response) =>{
            const StuResult = Response.data.Result;
            setresult(StuResult)
            })
            
        .catch(error=>console.error(`Error : ${error}`));
            console.log("Results",result)
        }

 return(
    <div className="container">
        
        {}
        <label for="stdid" class="paperdownload"><b>Student ID:</b></label>
        
        <input type="text" class="paperdownload" id="stdid" onChange={handleChange} />
       <Link to={"/studentresult/"+stuid} className="btn btn-outline-primary"onClick={submit} style={{marginLeft:20}}  >Search</Link>

        <div>
        <table class="styled-table">
        <thead>
        <tr>
            <th scope="col">Subject Name</th>
            <th scope="col">Grade</th>
            <th scope="col"> Marks</th>
            <th scope="col">Exam Code</th>  
        </tr>
        </thead>

        {result.map(result=>(
        
        <tbody>
            <tr class="active-row">
                <td> {result.subjectname}</td>
                <td>{result.grade}</td>
                <td>{result.marks}</td>
                <td>{result.examcode}</td>
            </tr>
        </tbody>
        ))}
        
        </table>
        </div>
        
            
        <br></br><br></br>
    </div>


        
    

    
)
        }