import {Fragment, useEffect, useState} from 'react';
import NavigationBar from '../organisms/NavigationBar';
import ExpandGalleryBtn from '../organisms/ExpandGalleryBtn';
import GalleryTab from '../organisms/GalleryTab';
import cross from "../icons/cross_lightgray.svg";

import "../styles/gallery.scss"

function Gallery({images, closeGallery}) {
    const [currentImage, setGlobalCurrentImage] = useState(images ? images[0] : null);
    const [isOpenTab, setIsOpenTab] = useState(false);

    useEffect(() => {
        setGlobalCurrentImage(images ? images[0] : null);
    }, [images]);

    return (
        <Fragment>
            {images !== null && <div className="gallery">
                <div className="gallery__mainWindow">
                    <div
                        className="gallery__mainPicture"
                        style={{backgroundImage: `url(${currentImage})`}}
                    ></div>
                    {isOpenTab && (
                        <GalleryTab
                            currentImage={currentImage}
                            setGlobalCurrentImage={setGlobalCurrentImage}
                            images={images}
                        />
                    )}
                </div>
                <NavigationBar
                    currImg={currentImage}
                    setGlobalCurrentImage={setGlobalCurrentImage}
                    images={images}
                />
                <ExpandGalleryBtn isOpen={isOpenTab} switchAction={setIsOpenTab}/>
                <button onClick={() => closeGallery()} type="button"
                        className="gallery__expandGalleryBtn gallery__expandGalleryBtn_close">
                    <img src={cross} alt="close gallery button"/>
                </button>
            </div>}
        </Fragment>
    );
}

export default Gallery;
