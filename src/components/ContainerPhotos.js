import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import NotFound from './NotFound';
import Photo from './Photo';

const ContainerPhotos = (props) => {

    let photos = props.data;
    let query = props.query
    if(photos.length > 0) {
        return <Photo photos={photos} query={query}/>
    }
    return <NotFound />
    


}

export default ContainerPhotos;