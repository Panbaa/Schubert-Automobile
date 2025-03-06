import React, { useRef, useState } from "react";
import "./ScrollingGallery.css";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type ScrollingGalleryProps = {
  images: string[];
};

const ScrollingGallery: React.FC<ScrollingGalleryProps> = ({ images }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null);

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

  const openFullscreen = (index: number) => {
    setFullscreenImage(index);
  };

  const closeFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFullscreenImage(null);
  };

  const navigateFullscreen = (e: React.MouseEvent, direction: number) => {
    e.stopPropagation();
    if (fullscreenImage !== null) {
      const newIndex = fullscreenImage + direction;
      if (newIndex >= 0 && newIndex < images.length) {
        setFullscreenImage(newIndex);
      }
    }
  };

  return (
    <>
      <div className="scrolling-gallery-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="scrolling-gallery" ref={galleryRef}>
          {images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => openFullscreen(index)}>
              <img src={image} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
      {fullscreenImage !== null && (
        <div className="fullscreen-popup" onClick={closeFullscreen}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <button className="fullscreen-close" onClick={closeFullscreen}><X /></button>
            <button className="fullscreen-nav left" onClick={(e) => navigateFullscreen(e, -1)}>
              <ChevronLeft />
            </button>
            <img src={images[fullscreenImage]} alt={`Fullscreen item ${fullscreenImage + 1}`} className="fullscreen-image" />
            <button className="fullscreen-nav right" onClick={(e) => navigateFullscreen(e, 1)}>
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollingGallery;