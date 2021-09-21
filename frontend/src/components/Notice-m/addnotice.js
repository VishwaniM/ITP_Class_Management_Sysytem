import React, {useState} from "react";
import {Link,useParams,withRouter } from 'react-router-dom';
import axios from "axios";


let lastId = 0;
export default function AddNotice(props){
    function newid (prefix='id') {
        return Math.random().toString(16).slice(-4)
    }
   const id = newid();
   
   const [subject,setSubject] = useState("");
   const [body,setBody] = useState("");
   const [userid,setUser] = useState(props.match.params.id);
   const [notid,setID] = useState(id);
   const [time,setTime] = useState(Date().toLocaleString());

   
   

   function sendData(e){
       e.preventDefault();
       const newNotice={
           subject,
           body,
           userid,
           notid,
           time
       }
       axios.post("http://localhost:5000/notice/addnotice",newNotice).then(()=>{
           alert("Notice Added")
           window.location.reload();
           
       }).catch((err)=>{
           alert(err)
       })
   }
   

    return(
        <div className="container"><br></br><br></br>
       User ID :  {props.match.params.id}
            <div class="shadow p-3 mb-5 bg-white rounded">
            <form onSubmit={sendData}>
            <div class="mb-3">
                <label for="Subject" class="form-label">Notice Subject</label>
                <input type="text" class="form-control" id="subject" aria-describedby="nothelp" onChange={(e)=>{
                    setSubject(e.target.value);
                }}/>
                <div id="nothelp" class="form-text">Please use propper Subject for your Notice!</div>
            </div>
            <div class="mb-3">
                <label for="noticebody" class="form-label">Insert Your Notice</label>
                <textarea class="form-control" id="noticebody" rows="10" style={{resize: "none"}} onChange={(e)=>{
                    setBody(e.target.value);
                }}></textarea>
            </div>
        
           
            <button type="submit" class="btn btn-success">Submit</button>
            </form></div>

            

        </div>
    )
}

