import React, { useRef } from "react";
import "./ScrollingGallery.css"

type ScrollingGalleryProps = {
  images: string[];
};

const ScrollingGallery: React.FC<ScrollingGalleryProps> = ({ images }) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -225, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 225, behavior: "smooth" });
    }
  };

  return (
    <div className="scrolling-gallery-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        &#8249;
      </button>
      <div className="scrolling-gallery" ref={galleryRef}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
  );
};

export default ScrollingGallery;