import React,{useState} from "react";
import {Link,useParams,withRouter } from 'react-router-dom';
import { Container } from "reactstrap";
function TDash(props){
    const {id} = useParams();
    return(

        <div className="container">
            <br></br>
            Welcome User : {id}
            <h2 className="text-center">Exam Management</h2>
            <div className="row">
                <div className="col" align="left">
                    <Link to="/papers" className="addnotices">
                    <button href="/exams" className="addnotices">
                        <img src="/assets/images/exam.jpg" width="240" height="240" alt="" />
                        <figcaption className="figure-caption" >Papers</figcaption>
                    </button></Link>
                </div>
                <div className="col" align="right">
                    
                    <button className="Results">
                        <Link to="/marks" className="results">   
                        <img src="/assets/images/results.jpg" width="240" height="240" alt="" />
                        <figcaption className="figure-caption">Results</figcaption>
                        </Link>
                    </button>
                    
                </div>
                
            <div className="w-100"></div>
            <br></br><br></br><br></br>
                <div className="col" align="left">
                <Link to="/schedule" className="schedule">
                    <button className="addnotices">
                        <img src="/assets/images/schedule.jpg" width="240" height="240" alt=""/>
                        <figcaption className="figure-caption">Schedule</figcaption>
                    </button>
                    </Link>
                </div>
                <div className="col" align="right">
                <Link to="/report" className="report">
                    <button className="reports">
                        <img src="/assets/images/report.jpg" width="240" height="240" alt=""/>
                        <figcaption className="figure-caption">Reports</figcaption>
                    </button>
                    </Link>
                </div>
            </div>
            <br></br> <br></br> <br></br>
        </div>
        
    )
}
export default TDash;