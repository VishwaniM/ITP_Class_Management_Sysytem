import React, {useState,Component} from "react";
import axios from "axios";


export default function Paper(){

   const [paperdescription, setPaperDescription] = useState("");
   const [year,setYear] = useState("");
   const [file,setFile] = useState("");


   function sendData(e){
    e.preventDefault();
    const newPaper={
        paperdescription,
        year,
        file,
        
    }
    axios.post("http://localhost:8070/papers/addpaper",newPaper).then(()=>{
        alert("paper Added")
        window.location.reload();
    }).catch((err)=>{
        alert(err)
    })
}

return(
    <div className="container"align="center">
         <br></br>  
        <h3 class="hstyle" align="center">New Paper Entry</h3>
        <br></br>  <br></br>  
        <form class="form" align="center" onSubmit={sendData} autocomplete="off">
        <br></br>  <br></br>  <br></br>  <br></br> 

        <div class="mb-3 container">
            <label for="paperdescription" class="form-label">Paper Description:</label>
            <input type="text"placeholder="Enter Paper Description" class="form-control" id="paperdescription" aria-describedby="nothelp" onChange={(e)=>{
                setPaperDescription(e.target.value);
            }}/>

        </div>
        <div class="mb-3 container">
            <label for=" year" class="form-label"> Year:</label>
            <input type="text" placeholder="Enter Year" class="form-control" id=" year" aria-describedby="nothelp" onChange={(e)=>{
                setYear(e.target.value);
            }}/>

        </div>
        <div class="mb-3 container">
            <label for="file" class="form-label"> File:</label>
            <input type="text"placeholder="Upload File" class="form-control" id=" file" aria-describedby="nothelp" onChange={(e)=>{
                setFile(e.target.value);
            }}/>

        </div>
       
                <button type="submit" class="container btn btn-success"style={{marginLeft:15}}>Submit</button>
        </form>
        <br></br>
        <br></br> <br></br> <br></br>
    </div>
)
    
}
