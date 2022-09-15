import {useState} from 'react';
import Gallery from "./components/Gallery";
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

function App() {
    const images = [img1, img2, img3, img4, img5, img6];
    const tattoos = [
        'https://i.pinimg.com/564x/be/fb/6c/befb6cc202d1f68d1e3b874438190e33.jpg',
        'https://i.pinimg.com/564x/a2/ae/a5/a2aea50cc7408f1e98b2c97392e9c442.jpg',
        'https://i.pinimg.com/564x/85/c2/d8/85c2d8207fdf3dd4283bf90f7b13edce.jpg',
        'https://i.pinimg.com/564x/b9/2c/55/b92c5560709fc3b68a9c82873804a3a4.jpg',
        'https://i.pinimg.com/564x/be/e3/6a/bee36a66c7c9afec3acb29e8feabbad8.jpg'
    ];

    const [currentImages, setCurrentImages] = useState(null);
    return (
        <div>
            <button onClick={() => setCurrentImages(images)}>Gallery</button>
            <button onClick={() => setCurrentImages(tattoos)}>Tattoos</button>
            <Gallery closeGallery={() => setCurrentImages(null)} images={currentImages}/>
        </div>
    );
}

export default App;
