import {useState} from "react";
import NavigationBar from "./organisms/NavigationBar";
import ExpandGalleryBtn from "./organisms/ExpandGalleryBtn";
import GalleryTab from "./organisms/GalleryTab";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";


function App() {

    const [currentImage, setGlobalCurrentImage] = useState();
    const [isOpenTab, setIsOpenTab] = useState(false);

    const images = [img1, img2, img3, img4];

    return (
        <div className="gallery">
            <div className="gallery__mainWindow">
                <img className="gallery__mainPicture" src={currentImage} alt="test"/>
                {isOpenTab && <GalleryTab currentImage={currentImage} setGlobalCurrentImage={setGlobalCurrentImage} images={images}/>}
            </div>
            <NavigationBar currImg={currentImage} setGlobalCurrentImage={setGlobalCurrentImage} images={images}/>
            <ExpandGalleryBtn isOpen={isOpenTab} switchAction={setIsOpenTab} />
        </div>
    );
}

export default App;
