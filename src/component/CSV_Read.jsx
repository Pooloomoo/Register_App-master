import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';

const CsvUploader = () => {
  const [csvData, setCsvData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
      },
      header: true,
    });
  };

  const prepareDataForBackend = (csvData) => {
    return csvData.map(({ id, score, userStatus }) => ({
      id,
      score,
      userStatus,
    }));
  };

  const sendDataToBackend = () => {
    if (csvData.length === 0) {
      setUploadStatus("No data to upload.");
      return;
    }

    const formattedData = prepareDataForBackend(csvData);

    axios.post('http://localhost:8200/api/Status/', formattedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setUploadStatus(`Data sent successfully: ${response.data.length} Status entries added`);
      })
      .catch(error => {
        setUploadStatus(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={sendDataToBackend}>Upload and Send Data</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default CsvUploader;
