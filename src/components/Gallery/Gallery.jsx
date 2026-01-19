import React, { useState } from 'react';
import './Gallery.css';

export function Gallery({ 
  images = [], 
  width = 'auto', 
  height = 'auto', 
  radius = '0px',
  showThumbs = false,
  className = ''
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className="gallery">No images provided</div>;
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === images.length - 1;

  return (
    <div className={`gallery ${className}`}>
      <div
        className="gallery-container"
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
        }}
      >
        <div className="gallery-main">
          <div className="gallery-slide" style={{ borderRadius: radius }}>
            <img
              src={images[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              style={{ borderRadius: radius }}
            />
          </div>

          <button
            className="gallery-arrow gallery-arrow-left"
            onClick={handlePrevious}
            disabled={isPrevDisabled}
            aria-label="Previous image"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="gallery-arrow gallery-arrow-right"
            onClick={handleNext}
            disabled={isNextDisabled}
            aria-label="Next image"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {showThumbs && (
          <div className="gallery-thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={`gallery-thumbnail ${
                  index === currentIndex ? 'active' : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
                style={{ borderRadius: radius }}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  style={{ borderRadius: radius }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
