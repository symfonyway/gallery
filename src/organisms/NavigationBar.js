import {useState, useEffect} from 'react';
import Chevron from "../molecules/Chevron";

function NavigationBar({currImg, images, setGlobalCurrentImage}) {
    const [showedPictures, setShowedPictures] = useState(images.slice(0, 3));
    const [currentIndexImage, setCurrentIndexImage] = useState(currImg ? images.findIndex(el => el === currImg) : 0);

    const switchPictureRight = (isRight) => {
        let baseImages = [...showedPictures];

        if (isRight) {
            if (currentIndexImage === 2) {
                baseImages = baseImages.splice(1).concat(baseImages);
            } else {
                setCurrentIndexImage(currentIndexImage + 1)
            }
        } else {
            if (currentIndexImage === 0) {
                baseImages = baseImages.splice(-1, 1).concat(baseImages);
            } else {
                setCurrentIndexImage(currentIndexImage - 1);
            }
        }
        setShowedPictures(baseImages);
    }


    useEffect(() => {
        setGlobalCurrentImage(showedPictures[currentIndexImage])
    }, [currentIndexImage, showedPictures]);

    useEffect(() => {
        const indexOfImg = showedPictures.findIndex((img)=>currImg === img);

        if (indexOfImg !== -1) {
            setCurrentIndexImage(indexOfImg);
        }
        else {
            const indexInGlobalArray = images.findIndex((img)=>currImg === img);
            // setShowedPictures
            const updatedImagesArray = images.splice(1).concat(baseImages);
        }
    }, [currImg]);


    return (
        <ul className="gallery__navigationBar">
            {images.length > 3 && <Chevron onClick={() => switchPictureRight(false)} direction="left"/>}
            {showedPictures.map((img, index) =>
                <li key={index + '-' + img} onClick={() => setCurrentIndexImage(index)}
                    className={currentIndexImage === index ? '-activeImgInLi' : ''}>
                    <img src={img} alt=""/>
                </li>)}
            {images.length > 3 && <Chevron onClick={() => switchPictureRight(true)}/>}
        </ul>
    );
}

export default NavigationBar;
