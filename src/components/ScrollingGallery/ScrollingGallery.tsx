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
      galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const openFullscreen = (index: number) => {
    setFullscreenImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFullscreenImage(null);
    document.body.style.overflow = 'auto';
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
      <div className="relative w-full py-4">
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors duration-300 backdrop-blur-sm"
          onClick={scrollLeft}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div 
          className="scrolling-gallery relative flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          ref={galleryRef}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="flex-none w-[300px] h-[200px] relative rounded-xl overflow-hidden snap-center cursor-pointer group"
              onClick={() => openFullscreen(index)}
            >
              <img 
                src={image} 
                alt={`Gallery item ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Klick zum vergrößern</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors duration-300 backdrop-blur-sm"
          onClick={scrollRight}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {fullscreenImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={closeFullscreen}
        >
          <div 
            className="relative max-w-7xl w-full mx-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 p-2 text-white hover:text-zinc-300 transition-colors duration-300"
              onClick={closeFullscreen}
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full">
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors duration-300"
                onClick={(e) => navigateFullscreen(e, -1)}
                disabled={fullscreenImage === 0}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img 
                src={images[fullscreenImage]} 
                alt={`Fullscreen item ${fullscreenImage + 1}`}
                className="w-full h-full object-contain"
              />

              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors duration-300"
                onClick={(e) => navigateFullscreen(e, 1)}
                disabled={fullscreenImage === images.length - 1}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollingGallery;