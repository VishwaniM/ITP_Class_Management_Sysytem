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
                <input type="text" class="form-control" id="subject" aria-describedby="nothelp" maxLength = "100" onChange={(e)=>{
                    setSubject(e.target.value);
                }}required />
                <div id="nothelp" class="form-text">Please use propper Subject for your Notice!(Max 100 charactors)</div>
            </div>
            <div class="mb-3">
                <label for="noticebody" class="form-label">Insert Your Notice</label>
                <textarea class="form-control" id="noticebody" rows="10" style={{resize: "none"}} maxLength = "500" onChange={(e)=>{
                    setBody(e.target.value);
                }}required ></textarea>
            </div>
        
           
            <button type="submit" class="btn btn-success">Submit</button>
            </form></div>

            

        </div>
    )
}

