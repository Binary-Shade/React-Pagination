import Image from './Image'


const Images = ({ images }) => {
  return (
    <div>
      <div className="images">
        {images.map(image => (
            <Image image = {image} key={image.id}/>
        ))}
      </div>
    </div>
  );
};

export default Images;
