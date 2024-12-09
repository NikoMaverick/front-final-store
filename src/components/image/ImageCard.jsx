import { useState, useEffect} from 'react'

const ImageCard = (props) => {
    const imageElement = props.pictureUrls;

    const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (imageElement) {
      setCurrentImage(imageElement);
    }
  }, [imageElement]);

  return (
    <img
      src={currentImage ? "/assets/product/" + currentImage : "/assets/ImagenKO.webp"}
      alt="ImagenKO.webp"
    />
  );
   
}

export default ImageCard;

