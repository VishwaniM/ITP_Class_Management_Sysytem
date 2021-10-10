import React, {useState,Component} from "react";
import axios from "axios";


export default function Report(){
    return (
    
    <div className="container">
        <br></br><br></br>
        <h1 align="center">Marks on Report</h1>
    <table className = "table table-striped" style={{marginTop:20}}>
    <thead>
        <tr>
            <th scope="col">Subject</th>
            <th scope="col"> Average</th>
            <th scope="col">Exam Code</th>
            <th scope="col">Pass Count</th>
            <th scope="col">Fail Count</th>
        </tr>
        
     </thead>
     <tbody>
         <tr>
         <td scope="row">Mathematics</td>
         <td scope="row">52.2</td>
         <td scope="row">2020</td>
         <td scope="row">45</td>
         <td scope="row">5</td>
        </tr>

        <tr>
         <td scope="row">Science</td>
         <td scope="row">56.2</td>
         <td scope="row">2120</td>
         <td scope="row">40</td>
         <td scope="row">10</td>
        </tr>

        <tr>
         <td scope="row"> General Mathematics</td>
         <td scope="row">42.2</td>
         <td scope="row">2320</td>
         <td scope="row">30</td>
         <td scope="row">10</td>
        </tr>
    </tbody>
    </table>

    <button className="btn btn-dark">Download as pdf</button>
    <br></br><br></br><br></br>
    </div>
    )
}