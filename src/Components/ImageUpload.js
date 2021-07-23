import React from 'react';
import ImageUploading from 'react-images-uploading';
import "./ImageUpload.css"
import imgbg from "../Assets/img.jpg"
 
 function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber =1;
 console.log(images.length)
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
 
  return (
    <div className="imageUpload">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
        //   onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
        //   <div className="upload__image-wrapper">
        <div>
        
            {images.length === 0 ? (
                <>
                <div className="temp-wrapper">
                <img src={imgbg} alt="" className="temp-img" /> 
                  <button
            //   style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className="image-update-btn"
            >
              Upload your company logo
            </button>
            &nbsp;
          
            </div>
                </>
            ): (   <div className="image-img">
            {imageList.map((image, index) => (
                           <>
                <div key={index} className="image-item">
                  <img key={index} src={image['data_url']} alt="" width="100" className="image-image"/>
                  </div>
                   <div className="image-item__btn-wrapper">
                    <button  className="image-btn" onClick={() => onImageUpdate(index)}>Update</button>
                    <button  className="image-btn" onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                  </>
             ))}
                </div>)}
          
           
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
         
            
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload;