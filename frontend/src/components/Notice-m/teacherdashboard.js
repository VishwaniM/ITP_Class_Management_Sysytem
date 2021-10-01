import React,{useState} from "react";
import {Link,useParams,withRouter } from 'react-router-dom';
import { Container } from "reactstrap";

function TDash(props){
    
    const {id} = useParams();

    return(
            
        
        <div className="container" style={{ 
      backgroundImage: `url("/assets/images/bg.jpg")` 
    }}>
          User id : {id}
            <div className="row">
                <div className="col">
                <div class="img-box">
                    <Link to={"/addnotice/"+id} className="addnotices">
                    <button href="/add" className="addnotices">
                        <img src="/assets/images/addnotice.png" width="200" alt="" />
                        <figcaption className="figure-caption" >Add New</figcaption>
                    </button></Link>
                    </div>
                </div>
                <div className="col">
                <div class="img-box">
                    
                    <button className="YourNotices">
                        <Link to={"/editnotices/"+id} className="addnotices">   
                        <img src="/assets/images/editnotices.png" width="240" alt="" />
                        <figcaption className="figure-caption">Edit Your Notices</figcaption>
                        </Link>
                    </button>
                    </div>
                </div>
            <div className="w-100"></div>
                <div className="col">
                <div class="img-box">
                <Link to={"/viewNotice/"+id} className="addnotices">
                    <button className="addnotices">
                        <img src="/assets/images/viewnotices.png" width="240" alt=""/>
                        <figcaption className="figure-caption">View All Notices</figcaption>
                    </button>
                    </Link>
                    </div>
                </div>
                <div className="col">
                <div class="img-box">
                    <button className="addnotices">
                        <img src="/assets/images/report.png" width="240" alt=""/>
                        <figcaption className="figure-caption">View Your Reports</figcaption>
                    </button>
                    </div>
                </div>
            </div>
            
            
            

        </div>
        
    )
}
export default TDash;