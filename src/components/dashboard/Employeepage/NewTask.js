import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';

const NewTask = () => {

  const host = "http://localhost:5000"

  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${host}/api/file/getAllFiles`);
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
      const result = await axios.get(`${host}/api/file/download/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };


  return (
    <div style={{ marginLeft: "25px" }}>
      <div className="files-container">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <table className="table table border shadow table-striped table-hover table-responsive" style={{ marginTop: '6%' }}>
          <thead className="table-light">
            <tr style={{ color: 'blue', "fontSize": "18px", backgroundColor: "" }}>
              <th scope="col">Project Name</th>
              <th scope="col">project Description</th>
              <th scope="col">Download</th>
            </tr>
          </thead>
          <tbody>
            {filesList.length > 0 ? (
              filesList.map(
                ({ _id, title, description, file_path, file_mimetype }) => (
                  <tr key={_id}>
                    <td>{title}</td>
                    <td style={{ justifyContent: 'center', alignItems: 'center' }}>{description}</td>
                    <td>
                      <a href="#/" onClick={() => downloadFile(_id, file_path, file_mimetype)} className="link-danger">Download File</a>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan={3} style={{ fontWeight: '300' }}>
                  No files found. Please add some.
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

    </div>


  )
}

export default NewTask;