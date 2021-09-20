import React, {useState,Component} from "react";
import axios from "axios";

export default function PapaerDownload(){

    const [subject, setSubject] = useState("");
    const [grade,setGrade] = useState("");
    const [year,setYear] = useState("");
 
 
    function sendData(e){
     e.preventDefault();
     const newPaperdownload={
        subject,
        grade,
        year,
         
     }
     axios.post("http://localhost:8070/paperdownload/viewpaper",newPaperdownload).then(()=>{
         alert("paper found")
         window.location.reload();
     }).catch((err)=>{
         alert(err)
     })
 }
 return(
    <div className="container">
        <br></br>
        <div class="shadow p-3 mb-5 bg-body rounded">
            <label for=" subject" class="paperdownload"> <b>Subject Name:</b></label>
            <input type="text" class="paperdownload" id="subject" aria-describedby="nothelp" onChange={(e)=>{
                setSubject(e.target.value);
            }}/>

      
        
            <label for=" grade" class="paperdownload"><b>Grade:</b></label>
            <input type="text" class="paperdownload" id="grade" aria-describedby="nothelp" onChange={(e)=>{
                setGrade(e.target.value);
            }}/>

        
       
            <label for="year" class="paperdownload"><b>Year:</b></label>
            <input type="text" class="paperdownload" id="year" aria-describedby="nothelp" onChange={(e)=>{
                setYear(e.target.value);
            }}/>

        
       
                <button type="submit" class="btn btn-outline-primary"  style={{marginLeft:20}}>Search</button>
                    <br></br><br></br><br></br>
                  <p align="left">  <b> <u>Resulted Papers</u></b></p>
                <table class="styled-table">
                <thead>
                    <tr>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Year</th>
                        <th scope="col">Link</th>
                        <th scope="col">File Download</th>
                        
                    </tr>
               </thead>
                <tbody>
                <tr class="active-row">
                    <td scope="row">Science</td>
                    <td scope="row">Grade 11</td>
                    <td scope="row">2020</td>
                    <td scope="row">sample data</td>
                    <td scope="row"><div><button type="button" className="btn btn-outline-success">Download</button></div></td>
                </tr>
                <tr class="active-row">
                    <td scope = "row">Science</td>
                    <td>Grade 11</td>
                    <td>2019</td>
                    <td>sample data</td>
                    <td scope="row"><div><button type="button" className="btn btn-outline-success" >Download</button></div></td>
                </tr>
                <tr class="active-row">
                    <td>Science</td>
                    <td>Grade 11</td>
                    <td>2018</td>
                    <td>sample data</td>
                    <td scope="row"><div><button type="button" className="btn btn-outline-success">Download</button></div></td>
                </tr>
                </tbody>
                </table>
            </div>
        
    </div>


        
    

    
)


    
        
    
    
}
