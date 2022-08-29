import { useState } from 'react';
import NavigationBar from './organisms/NavigationBar';
import ExpandGalleryBtn from './organisms/ExpandGalleryBtn';
import GalleryTab from './organisms/GalleryTab';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

function App() {
	const [currentImage, setGlobalCurrentImage] = useState(img1);
	const [isOpenTab, setIsOpenTab] = useState(false);

	const images = [img1, img2, img3, img4, img5, img6];

	return (
		<div className="gallery">
			<div className="gallery__mainWindow">
				<div
					className="gallery__mainPicture"
					style={{ backgroundImage: `url(${currentImage})` }}
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
			<ExpandGalleryBtn isOpen={isOpenTab} switchAction={setIsOpenTab} />
		</div>
	);
}

export default App;
