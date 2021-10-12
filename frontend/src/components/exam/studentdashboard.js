import React,{useState} from "react";
import {Link,useParams,withRouter } from 'react-router-dom';
import { Container } from "reactstrap";

function SDash(props){
    const {id} = useParams();
    return(

        <div className="container" align="center" >
            
             
             <br></br>
             Welcome Student : {id}
            <h2 className="text-center">Exam Management</h2>
            <br></br>
            
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4" style={{marginLeft:135}}>
            
           
                <div className="col "  >
                    <Link to="/paperdownload" className="addpapers">
                    <button href="/exams" className="addpapers">
                        <img src="/assets/images/exam.jpg" width="240" height="240" alt="" />
                        <figcaption className="figure-caption" >download Papers</figcaption>
                    </button></Link>
                </div>
                

                <div className="col "> 
                    <button className="Results">
                        <Link to="/studentresult/id" className="results">   
                        <img src="/assets/images/results.jpg" width="240" height="240" alt="" />
                        <figcaption className="figure-caption">Results</figcaption>
                        </Link>
                    </button>
                </div>

                
                <div className="col ">
                <Link to="/studentschedule" className="schedule">
                    <button className="addnotices">
                        <img src="/assets/images/schedule.jpg" width="240" height="240" alt=""/>
                        <figcaption className="figure-caption">Exam Schedule</figcaption>
                    </button>
                    </Link>
                </div>
                
            </div>
            <br></br> <br></br> <br></br> <br></br>
        </div>
        
        
    )
}
export default SDash;