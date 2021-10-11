import React, { useState, Component } from "react";
import axios from "axios";
import ViewMarks from './viewmarks'

let lastId = 0;

export default function Papers() {
    function mid(prefix = 'id') {
        return Math.random().toString(16).slice(-4)
    }


    const id = mid();
    const [marksid, setMarksid] = useState(id);
    const [subjectname, setSubject] = useState("");
    const [examcode, setExamcode] = useState("");
    const [studentid, setStudentid] = useState("");
    const [marks, setMarks] = useState("");
    const [date, setTime] = useState(Date().toLocaleString());
    const [iderror, setIderror] = useState("");
    const [suberror, setSuberror] = useState("");
    const [markerror, setMarkError] = useState("");

    function ValidateID() {
        let re = /[a-z]/i;
        if (re.test(studentid)) {
            setIderror("valid")
        }
        else {
            setIderror("Invalid ID format - First Charactor Should be a letter")
        }
    }

    function Validate() {
        if (subjectname.length >= 18) {

            setSuberror("Maximum length is 20 Charactors")
        }
        if (subjectname.length < 19) {
            setSuberror("")
        }
        if(marks>100){
            setMarkError("Marks should be less than or Equal to 100")
        }
        if(marks<=100){
            setMarkError("")
        }
       
    }

    function sendData(e) {
        e.preventDefault();
        const newMark = {
            marksid,
            studentid,
            subjectname,
            examcode,
            marks,
            date
        }
        axios.post("http://localhost:5000/result/addresult", newMark).then(() => {
            alert("Marks Added")
            window.location.reload();
        }).catch((err) => {
            alert(err)
        })
    }


    return (

        <div className="container" align="center">
            <br></br>   <br></br> <br></br>
            <h3 class="hstyle" align="center">New Mark Entry</h3>
            <br></br>
            <form class="form" align="center" onSubmit={sendData} autocomplete="off">
                <br></br>
                <div class="mb-3 container">
                    <label for="Subject" class="form-label" ><b>Subject:</b></label>
                    <input type="text" placeholder="Enter Subject" class="form-control" maxLength="20" value={subjectname} id="subject" aria-describedby="nothelp" onChange={(e) => {
                        setSubject(e.target.value); Validate();
                    }} required /><p style={{color:"red"}}>{suberror}</p>

                </div>
                <div class="mb-3 container">
                    <label for="Subject" class="form-label"><b>Exam Code:</b></label>
                    <input type="text" placeholder="Enter Exam Code" class="form-control" id="ExamCode" value={examcode} aria-describedby="nothelp" onChange={(e) => {
                        setExamcode(e.target.value); Validate();
                    }} required />

                </div>
                <div class="mb-3 container">
                    <label for="Subject" class="form-label"><b>Student ID:</b></label>
                    <input type="text" placeholder="Enter Student ID" class="form-control" maxLength="10" id="StudentID" value={studentid} aria-describedby="nothelp" onChange={(e) => {
                        setStudentid(e.target.value); ValidateID();
                    }} required /><p style={{color:"red"}}>{iderror}</p>
                </div>
                <div class="mb-3 container">
                    <label for="Marks" class="form-label"><b>Marks:</b></label>
                    <input type="text" placeholder="Enter Marks" class="form-control" id="marks" aria-describedby="nothelp" value={marks} onChange={(e) => {
                        setMarks(e.target.value); Validate();
                    }} required /><p style={{color:"red"}}>{markerror}</p>
                </div>
                <button type="submit" class="container btn btn-success" style={{ marginLeft: 15 }}>Submit</button>
            </form>
            <div>
                <button class="btn btn-success" onClick={(e) => {
                    setSubject("Sinhala")
                    setExamcode("EX5475")
                    setStudentid("IT20003364")
                    setMarks("68")

                }}>

                    Demo Button
                </button>
            </div>
            <br></br><br></br><br></br>
            <ViewMarks />
        </div>
    )
}