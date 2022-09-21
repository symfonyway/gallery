import React from 'react';
import ReactDOM from 'react-dom';
import cross from "../icons/cross_lightgray.svg";
import points from "../icons/points.svg";


const ExpandGalleryBtn = ({isOpen, switchAction}) => {

    return (<button onClick={() => switchAction(!isOpen)} type="button" className="gallery__expandGalleryBtn">
        {!isOpen && <img src={points} alt=""/>}
        {isOpen && <img src={cross} alt=""/>}
    </button>)
}

export default ExpandGalleryBtn;