import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Chevron from '../molecules/Chevron';
import useKeyPress from '../hooks/useKeyPress';

function NavigationBar({currImg, images, setGlobalCurrentImage}) {
    const findNearestPositions = (images, newCurrImg) => {
        const index = images.findIndex((img) => img === newCurrImg);

        if (index === images.length - 1) {
            setCurrentIndexImage(1);
            return setShowedPictures([
                images[images.length - 2],
                images[index],
                images[0],
            ]);
        } else if (index === 0) {
            setCurrentIndexImage(1);
            return setShowedPictures([
                images[images.length - 1],
                images[index],
                images[1],
            ]);
        }
        else if (index === -1) {
            return [];
        }

        setCurrentIndexImage(1);
        return setShowedPictures([
            images[index - 1],
            images[index],
            images[index + 1],
        ]);
    };

    const [showedPictures, setShowedPictures] = useState(images.slice(0, 3));
    const [currentIndexImage, setCurrentIndexImage] = useState(
        currImg ? images.findIndex((el) => el === currImg) : 0
    );

    const switchPictureRight = (isRight) => {
        let baseImages = [...showedPictures];
        if (isRight) {
            if (currentIndexImage === 2) {
                const index = images.findIndex((img) => img === currImg);

                if (index === images.length - 1) {
                    setGlobalCurrentImage(images[0]);
                } else {
                    setGlobalCurrentImage(images[index + 1]);
                }
            } else {
                setCurrentIndexImage(currentIndexImage + 1);
                setGlobalCurrentImage(baseImages[currentIndexImage + 1]);
            }
        } else {
            if (currentIndexImage === 0) {
                const index = images.findIndex((img) => img === currImg);

                if (index === 0) {
                    setGlobalCurrentImage(images[images.length - 1]);
                } else {
                    setGlobalCurrentImage(images[index - 1]);
                }
            } else {
                setCurrentIndexImage(currentIndexImage - 1);
                setGlobalCurrentImage(baseImages[currentIndexImage - 1]);
            }
        }
        setShowedPictures(baseImages);
    };

    const arrowLeftPressed = useKeyPress('ArrowLeft');
    const arrowRightPressed = useKeyPress('ArrowRight');

    useEffect(() => {
        if (arrowLeftPressed) switchPictureRight(false);
    }, [arrowLeftPressed]);

    useEffect(() => {
        if (arrowRightPressed) switchPictureRight(true);
    }, [arrowRightPressed]);

    useEffect(() => {
        const indexOfImg = showedPictures.findIndex((img) => currImg === img);

        if (indexOfImg !== -1) {
            setCurrentIndexImage(indexOfImg);
        } else {
            findNearestPositions(images, currImg, true);
        }
    }, [currImg]);

    return (
        <ul className="gallery__navigationBar">
            {images.length > 3 && (
                <Chevron onClick={() => switchPictureRight(false)} direction="left"/>
            )}
            {showedPictures.map((img, index) => (
                <li
                    key={index + '-' + img}
                    onClick={() => setGlobalCurrentImage(img)}
                    className={currentIndexImage === index ? '-activeImgInLi' : ''}
                >
                    <img src={img} alt=""/>
                </li>
            ))}
            {images.length > 3 && (
                <Chevron onClick={() => switchPictureRight(true)}/>
            )}
        </ul>
    );
}

export default NavigationBar;
