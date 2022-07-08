import React from 'react';

// Components
import NotFound from './NotFound';
import Photo from './Photo';

const ContainerPhotos = (props) => {
    let photos = props.data;
    if(photos.length > 0) {
        return <Photo photos={photos}/>
    } 
    return <NotFound />

}

export default ContainerPhotos;