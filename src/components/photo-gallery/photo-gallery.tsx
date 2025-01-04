type PhotoGalleryProps = {
  images: string[];
};

function PhotoGallery ({ images }: PhotoGalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image, index) => (
          <div key={index} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
