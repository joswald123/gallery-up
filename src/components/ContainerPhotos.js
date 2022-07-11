import React from 'react';

// Components
import NotFound from './NotFound';
import Photo from './Photo';

const ContainerPhotos = (props) => {
    // Passing props from parent component app to the photo component child
    let photos = props.data;
    let query = props.query
    if(photos.length > 0) {
        return <Photo photos={photos} query={query}/>
    }
    return <NotFound />    
}

export default ContainerPhotos;