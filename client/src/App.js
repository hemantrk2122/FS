import './App.css';
import { useState, useEffect, useRef } from 'react';
import { uploadFile } from './service/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const resp = await uploadFile(data);
        // console.log(resp);
        setResult(resp.path);
      }
    }
    getFile();
  }, [file]);
  // console.log(file);
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  return (
    <>
      <div class='main-wrapper' style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')` }}>
        <div class='container'>
          <div class='wrapper'>
            <h1>File Sharing App!</h1>
            <p>Upload and share the download link!</p>
            <button onClick={() => onUploadClick()}>Upload</button>
            <input type='file' style={{ display: "none" }} ref={fileInputRef} onChange={(e) => { setFile(e.target.files[0]) }} />
            <a href={result} target='_blank'>{result}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
