# Simple react gallery component
## Description
This instructions are for projects are made with a create-react-app utility. \
This component helps users for viewing pictures.\
It makes a lightbox with simple navigation menu and expandable panel with pictures.

Steps: \
1.[installing](#installing) \
2.[Using](#using)

<a id="installing"></a>
## Installing
<a id="using"></a>
In your project install the packet with npm command: \
npm i pet-react-lightbox-gallery
## Using

You just need to import component from /components/Gallery, \
use this component in your code. \
Add and fulfill "images" and "closeGallery" props into component and you will see the work of component.\
If you want to expand styles of the component just use prop className with your custom class and modify elements of component.

### Props
#### images
This is necessary prop needs array of images or null value. \
For correct work array need to include minimum one picture in other way you will see the empty lighbox. \
You can push in array both types of pictures url and imported pictures from your structure. \
Null is value for switching off component.

#### closeGallery
It is function heeds to clean array of images, set null to the array of images.

#### className
This is prop for expand class list of the parent div of the component.
The main classes of parts of the component:\
gallery\
gallery__mainWindow\
gallery__mainPicture\
gallery__navigationBar\
gallery__chevron\
gallery__expandGalleryBtn\
gallery__expandGalleryBtn_close\
gallery__galleryTab


### Example of using

```
import {useState} from 'react';
import Gallery from "pet-react-lightbox-gallery";
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';

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
```