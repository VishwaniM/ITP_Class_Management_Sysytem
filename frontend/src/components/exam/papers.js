import React, { useState, useRef ,useEffect} from 'react';
import axios from "axios";
import { API_URL } from '../../utils/constants'
import Dropzone from 'react-dropzone';
import Retrive from '../exam/retrievepapers'



const Papers = (props) => {

    const [file, setFile] = useState(null);
    const [fileTitle, setFileTitle] = useState ('');
    const [previewSrc, setPreviewSrc] = useState(''); 
    const [state, setState] = useState({
        paperdescription: '',
        year: ''
        
      });
      const [errorMsg, setErrorMsg] = useState('');
      const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); 
      const dropRef = useRef(); 

      const handleInputChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.value
        });
      };


    const handleOnSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target[2].value)
        try {
            const { paperdescription, year} = state;
         //   if (paperdescription.trim() !== '' && year.trim() ) {
              if (file) {
                const formData = new FormData();
                formData.append('files', file);
                formData.append('paperdescription', event.target[0].value);
                formData.append('year', event.target[1].value);
                
        
                setErrorMsg('');
                await axios.post('http://localhost:5000/paper/uploadpaper', formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                });
                
              } else {
                setErrorMsg('Please select a file to add.');
                console.log("Please select a file to add")
              }
         //   } else {
          //    setErrorMsg('Please enter all the field values.');
           //   console.log("Please enter all the field values.")
         //   }
          } catch (error) {
            error.response && setErrorMsg(error.response.data);
            console.log("Error : "+error.response.data)
          }
      };
    
    
      useEffect (() =>{
        console.log("Name"+fileTitle);
      });

      const onDrop = (file) => {
        const [uploadedFile] = file;
        setFile(uploadedFile);
      
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    
        dropRef.current.style.border = '2px dashed #e9ebeb';
      };
      const updateBorder = (dragState) => {
        if (dragState === 'over') {
          dropRef.current.style.border = '2px solid #000';
        } else if (dragState === 'leave') {
          dropRef.current.style.border = '2px dashed #e9ebeb';
        }
      };
    

return(
    <React.Fragment>
    <div className="container"align="center">
         <br></br>  
         
        <h3 class="hstyle" align="center">New Paper Entry</h3>
        <br></br>  <br></br>  
        <form class="form" align="center" onSubmit={handleOnSubmit} autocomplete="off" id="form" >
        <br></br>  <br></br>  <br></br>  <br></br> 

        <div class="mb-3 container">
            <label for="paperdescription" class="form-label">Paper Description:</label>
            <input type="text"placeholder="Enter Paper Description" class="form-control" id="paperdescription" aria-describedby="nothelp"  onChange={handleInputChange} required/>

        </div>
        <div class="mb-3 container">
            <label for=" year" class="form-label"> Year:</label>
            <input type="number" placeholder="Enter Year" class="form-control" id=" year" aria-describedby="nothelp" onChange={handleInputChange} required/>

        </div>
        <div className="upload-section">
        {errorMsg && <p style={{color : 'red'}}className="errorMsg">{errorMsg}</p>}
  <Dropzone onDrop={onDrop}
   onDragEnter={() => updateBorder('over')}
   onDragLeave={() => updateBorder('leave')}
  >
    {({ getRootProps, getInputProps }) => (
      <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
        <input {...getInputProps()} />
        <p>Drag and drop a file OR click here to select a file</p>
        {file && (
          <div>
            <strong>Selected file:</strong> {file.name}
          </div>
        )}
      </div>
    )}
  </Dropzone>
  {/*{previewSrc ? (
    isPreviewAvailable ? (
      <div className="image-preview">
        <img className="preview-image" src={previewSrc} alt="Preview" />
      </div>
    ) : (
      <div className="preview-message">
        <p>No preview available for this file</p>
      </div>
    )
  ) : (
    <div className="preview-message">
      <p>Image preview will be shown here after selection</p>
  </div>
  )}*/}
  </div>
       
                <button type="submit" class="container btn btn-success"style={{marginLeft:15}}>Submit</button>
        </form>
        <br></br>
        <br></br> <br></br> <br></br>
        <Retrive/>
    </div>
    
    </React.Fragment>
   
)
    
}
export default Papers;
