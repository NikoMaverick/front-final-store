import { useState, useEffect} from 'react'

const ImageCard = (props) => {
    const imageElement = props.pictureUrls;

    const [currentImage, setCurrentImage] = useState(null); // Estado para controlar la URL de la imagen

  useEffect(() => {
    if (imageElement) {
      setCurrentImage(imageElement); // Cuando la URL está disponible, actualiza el estado
    }
  }, [imageElement]);

  return (
    <img
      src={currentImage || "../../assets/imageNoFound.jpeg"} // Muestra la imagen vacía si currentImage es null
      alt="Image"
      style={{ width: "100%", height: "auto" }}
    />
  );
   
}

export default ImageCard;

