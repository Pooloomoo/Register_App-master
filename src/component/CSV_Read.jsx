import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CSV_read() {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8200/api/User/")
      .then(res => {
        setData(res.data);
        console.log(res.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // Empty dependency array means this effect will run once when the component mounts.

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post("http://localhost:8200/api/User/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          console.log(`Upload Progress: ${progress}%`);
        },
      });

      console.log('File uploaded successfully', res.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <div>
        <input type="file" onChange={handleFileChange} />
        <br />
        <button onClick={handleUpload}>Submit</button>
      </div>
      {/* Render the fetched data */}
      <div>
        <h2>Fetched Data</h2>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
