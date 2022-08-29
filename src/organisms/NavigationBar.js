import { useState, useEffect } from 'react';
import Chevron from '../molecules/Chevron';

function NavigationBar({ currImg, images, setGlobalCurrentImage }) {
	const findNearestPositions = (images, newCurrImg, isEdge) => {
		const index = images.findIndex((img) => img === newCurrImg);

		if (isEdge) {
			if (index === images.length - 1) {
				setCurrentIndexImage(1);
				return setShowedPictures([
					images[images.length - 2],
					images[index],
					images[0],
				]);
			} else if (index === 0) {
				setCurrentIndexImage(1);
				return setShowedPictures(
					images[images.length - 1],
					images[index],
					images[1]
				);
			}
		}

		setCurrentIndexImage(1);
		return [images[index - 1], images[index], images[index + 1]];
	};

	const [showedPictures, setShowedPictures] = useState(images.slice(0, 3));
	const [currentIndexImage, setCurrentIndexImage] = useState(
		currImg ? images.findIndex((el) => el === currImg) : 0
	);

	const switchPictureRight = (isRight) => {
		let baseImages = [...showedPictures];
		if (isRight) {
			if (currentIndexImage === 2) {
				// baseImages = baseImages.splice(1).concat(baseImages);
				// проверка на пространство
				const index = images.findIndex((img) => img === currImg);

				if (index === images.length - 1) {
					setGlobalCurrentImage(images[0]);
					// baseImages = [images[images.length - 1], images[0], images[1]];
				} else {
					// baseImages = [images[index - 1], images[index], images[index + 1]];
					setGlobalCurrentImage(images[index + 1]);
				}
			} else {
				setCurrentIndexImage(currentIndexImage + 1);
				setGlobalCurrentImage(baseImages[currentIndexImage + 1]);
			}
		} else {
			if (currentIndexImage === 0) {
				// baseImages = baseImages.splice(-1, 1).concat(baseImages);
			} else {
				setCurrentIndexImage(currentIndexImage - 1);
				setGlobalCurrentImage(baseImages[currentIndexImage - 1]);
			}
		}
		setShowedPictures(baseImages);
	};

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
				<Chevron onClick={() => switchPictureRight(false)} direction="left" />
			)}
			{showedPictures.map((img, index) => (
				<li
					key={index + '-' + img}
					onClick={() => setGlobalCurrentImage(img)}
					className={currentIndexImage === index ? '-activeImgInLi' : ''}
				>
					<img src={img} alt="" />
				</li>
			))}
			{images.length > 3 && (
				<Chevron onClick={() => switchPictureRight(true)} />
			)}
		</ul>
	);
}

export default NavigationBar;
