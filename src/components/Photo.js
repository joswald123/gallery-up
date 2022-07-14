import React from "react";

const Photo = (props) => {
  const results = props.photos;
  // Mapping data (props) to obtain the url of the image from the API to return our photos
  let images = results.map((img) => {
    let srcPath = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
    return (
      <li key={img.id}>
        <img src={srcPath} alt={img.title} />
      </li>
    );
  });

  return (
    <div className="photo-container">
      <h2>Images of: {props.query}</h2>
      <ul>{images}</ul>
    </div>
  );
};

export default Photo;
