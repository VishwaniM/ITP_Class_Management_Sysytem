import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';



const RetrievePapers = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [search, setSearch] = useState('')
  
  const [name,setName] = useState('');
  const [email,setemail] = useState('');

//for search
  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/paper/searchpaper`);
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);
//search end

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/paper/downloadpapers`);
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);
  

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`http://localhost:5000/paper/downloadpapers/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
        console.log("Download Error "+error)
      }
    }
  };

  const DeleteFile = async (id, path, mimetype) => {
    try {
      await axios.delete(`http://localhost:5000/paper/removepaper/${id}`, {
        
      });
      alert("Paper has beed Deleted")
                window.location.reload();
    } catch (error) {
       console.log("Delete Error "+error);
    }
  };


//extra
const filterData = filesList.filter( item => {
  return item.paperdescription.toLowerCase().includes(search.toLowerCase())

})
  

//end extra

  return (
    <div className = "table table-striped">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <div>
        <br></br>
        <h2>Papers</h2>
        <br></br>
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text"style={{marginLeft:55}} placeholder="Enter Paper Description Here" aria-label="Search" onChange={ e => setSearch(e.target.value)}/>
      <button class="btn btn-success " type="submit">Search</button>
    </form>
    <br></br>
      </div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Paper Description</th>
            <th>Year</th>
            <th></th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
          {filterData.length > 0 ? (
            filterData.map(
              ({ _id, paperdescription, year, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td className="file-paperdescription">{paperdescription}</td>
                  <td className="file-year">{year}</td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Download
                    </a>
                    
                  </td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        DeleteFile(_id, file_path, file_mimetype)
                      }
                    >
                      Delete
                    </a>
                    
                  </td>
                 
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found
              </td>
            </tr>
          )}
        </tbody>
      </table>

<hr></hr>
      <br></br>
      <br></br>
      <br></br>
   


</div>
    

  );


};


export default RetrievePapers;