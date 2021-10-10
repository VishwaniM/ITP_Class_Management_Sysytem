import React, {useState,Component} from "react";
import axios from "axios";
import ViewMarks from './viewmarks'

let lastId = 0;

export default function Papers(){
    function mid (prefix='id') {
        return Math.random().toString(16).slice(-4)
    }


   const id = mid();
   const [marksid,setMarksid] = useState(id);
   const [subjectname,setSubject] = useState("");
   const [examcode,setExamcode] = useState("");
   const [studentid,setStudentid] = useState("");
   const [marks,setMarks] = useState("");
   const [date,setTime] = useState(Date().toLocaleString());


   function sendData(e){
    e.preventDefault();
    const newMark={
        marksid,
        studentid,
        subjectname,
        examcode,
        marks,
        date
    }
    axios.post("http://localhost:5000/result/addresult",newMark).then(()=>{
        alert("Marks Added")
        window.location.reload();
    }).catch((err)=>{
        alert(err)
    })
}


    return(
        
        <div className="container"align="center">
            <br></br>   <br></br> <br></br>
            <h3 class="hstyle" align="center">New Mark Entry</h3>
             <br></br>   
            <form class="form" align="center" onSubmit={sendData} autocomplete="off">
            <br></br>  
            <div class="mb-3 container">
                <label for="Subject" class="form-label" ><b>Subject:</b></label>
                <input type="text" placeholder="Enter Subject"class="form-control" maxLength="30" id="subject" aria-describedby="nothelp" onChange={(e)=>{
                    setSubject(e.target.value);
                }} required/>

            </div>
            <div class="mb-3 container">
                <label for="Subject" class="form-label"><b>Exam Code:</b></label>
                <input type="text" placeholder="Enter Exam Code"class="form-control" id="ExamCode"  aria-describedby="nothelp" onChange={(e)=>{
                    setExamcode(e.target.value);
                }}required/>

            </div>
            <div class="mb-3 container">
                <label for="Subject" class="form-label"><b>Student ID:</b></label>
                <input type="text"placeholder="Enter Student ID" class="form-control"maxLength="10" id="StudentID" aria-describedby="nothelp" onChange={(e)=>{
                    setStudentid(e.target.value);
                }}required/>
            </div>
            <div class="mb-3 container">
                <label for="Marks" class="form-label"><b>Marks:</b></label>
                <input type="text"placeholder="Enter Marks" class="form-control" id="marks"  aria-describedby="nothelp" onChange={(e)=>{
                    setMarks(e.target.value);
                }}required/>
            </div>
                    <button type="submit" class="container btn btn-success"style={{marginLeft:15}}>Submit</button>
            </form>
            <br></br><br></br><br></br>
            <ViewMarks/>
        </div>
    )
}