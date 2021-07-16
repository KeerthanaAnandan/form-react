import React from 'react';
import "./CompanyDetails.css"

function FileUpload() {
 
      
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    // image: URL.createObjectURL(img)
      let img = event.target.files[0];
      setFile(URL.createObjectURL(img))
    // setFile(event.target.files[0]);
    // Add code here to upload file to server
    // ...
  }

  return (
    <div className="fileupload">
    
      {/* <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p> */}
      {/* {file && <ImageThumb image={file} className="img"/>} */}
      {/* {file && <ImageThumb image={file} />} */}
      <img src={file} className="img" />
     {/* <p>Upload image </p> */}
      <input type="file" onChange={handleUpload} name="file" id="file" />
      <div class="file-name">
               File name here
            </div>
    </div>
  
  )
  }
  // const ImageThumb = ({ image }) => {
  //   return <img className="img" src={URL.createObjectURL(image)} alt={image.name} />;
  // };
  
  
  // export default function Images() {
  //   return <FileUpload />;
  // }
export default FileUpload;
