import React, {useState} from "react";
import axios from 'axios';

export default function Comment (props){
    
    const [noticeid,setNoticeid] = useState(props.message);
    const [userid,setUserid] = useState(props.id);
    const [comment,setComment] = useState(props.id);
    const [time,setTime] = useState(Date().toLocaleString());

    function sendData(e){
        e.preventDefault();
        const newComment={
            noticeid,
            userid,
            comment,
            time
        }
        axios.post("http://localhost:5000/comments/addcomment",newComment).then(()=>{
            alert("Comment Added")
            window.location.reload();

        }).catch((err)=>{
            alert(err)
        })
    }

     
        return(
            <div className="container" id="comments">
            <form onSubmit={sendData}>
            <div class="mb-3">
                <label for="comment" class="form-label">Comment Here</label>
                <textarea class="form-control" id="comment" rows="1" cols="8" onChange={(e)=>{
                    setComment(e.target.value);
                }}></textarea>
                
            </div>

            <button type="submit" class="btn btn-success">Submit</button>
            </form><br></br> 
        </div>

                )
            
           
            }
        
    