import React from 'react';
import ReactDOM from 'react-dom';

const GalleryTab = ({images, currentImage, setGlobalCurrentImage}) => {
    return (<ul className="gallery__galleryTab">
        {images.map((img, index) =>
            <li key={img + index} className={currentImage === img ? '-activeLi' : ''}
                onClick={() => setGlobalCurrentImage(img)}>
                <img src={img} alt=""/>
            </li>)}
    </ul>)
}

export default GalleryTab;