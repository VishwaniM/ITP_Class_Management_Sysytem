import React, {useState,Component} from "react";
import axios from "axios";
import ViewSchedule from './viewschedule'


let lastId = 0;


export default function Schedules(){
    const [schedule_description, setSchedule_description] = useState("");
   const [examiner_name,setExaminer_name] = useState("");
   const [date_time,setTime] = useState("");
   const [error,setError] = useState("");
   const [errorname,setErrorname] = useState("");
   const [errordate,setErrordate] = useState("");

    function Validation(){
        
            if(schedule_description.length>48){
                setError("Maximum Charactors 50 Reached")
            }
            if(schedule_description.length<49){
                setError("")
            }

            if(examiner_name.length>18){
                setErrorname("Maximum Charactors 20 Reached")
            }

            if(examiner_name.length<19){
                setErrorname("")
            }

            if(date_time.length>23){
                setErrordate("Maximum Charactors 25 Reached")
            }

            if(date_time.length<24){
                setErrordate("")
            }

    }
   
   

  

   function sendData(e){
    e.preventDefault();
    const newSchedule={
        schedule_description,
        examiner_name,
        date_time
    }
    axios.post("http://localhost:5000/schedule/addschedule",newSchedule).then(()=>{
        alert("schedule Added")
        window.location.reload();
    }).catch((err)=>{
        alert(err)
    })
}

return(
    <div className="container"align="center">
        <br></br>   <br></br>
        <h3 class="hstyle" align="center">New Schedule Entry</h3>
        <br></br>  
        <form class="form" align="center" onSubmit={sendData} autocomplete="off">
        <br></br>  <br></br>  <br></br>  
        <div class="mb-3 container">
            <label for="schedule_description" class="form-label">Enter Schedule Description:</label>
            <input type="text"placeholder="Enter Schedule Description" class="form-control"maxLength="50" id="schedule_description" aria-describedby="nothelp" value={schedule_description}onChange={(e)=>{
                setSchedule_description(e.target.value); Validation();
            }}required/><p style={{color:"red"}}>{error}</p>

        </div>
        <div class="mb-3 container">
            <label for="examiner_name" class="form-label">Enter Examiner Name:</label>
            <input type="text"placeholder="Enter Examiner Name" class="form-control" id="examiner_name" maxLength="20" value={examiner_name}aria-describedby="nothelp" onChange={(e)=>{
                setExaminer_name(e.target.value);  Validation();
            }}required/><p style={{color:"red"}}>{errorname}</p>

        </div>
        <div class="mb-3 container">
            <label for="date_time" class="form-label">Enter Date and Time:</label>
            <input type="text"placeholder="Enter Date and Time" class="form-control" id="date_time" maxLength="25" value={date_time}aria-describedby="nothelp" onChange={(e)=>{
                setTime(e.target.value); Validation();
            }}required/><p style={{color:"red"}}>{errordate}</p>

        </div>

       
                <button type="submit" class="container btn btn-success"style={{marginLeft:15}}>Submit</button>
                

        </form>
        <br></br><br></br><br></br>
        <button class="btn btn-success" onClick={(e) => {
                    setSchedule_description("Sinhala Subject Excam")
                    setExaminer_name("Kamala Weerasekara")
                    setTime("2021/01/06 at 10:00Am")

                }}>

                    Demo Button
                </button>
        <ViewSchedule/>
    </div>
)
    
}
