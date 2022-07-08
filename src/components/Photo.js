import React from 'react';

const Photo = (props) => {
    const results = props.photos;
    
    let images = results.map(img => {
        let srcPath = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
        return(
            <li key={img.id}>
                <img src={srcPath} alt="dogs"/>
            </li>
        )
        
    })

    return(
        images
    )
}

export default Photo;


