import React, { useState, useEffect, useRef, useCallback } from 'react';
import './GallerySection.css';

// Import all gallery images
import gallery1 from '../../../assets/image/gallery1.jpg';
import gallery2 from '../../../assets/image/gallery2.jpg';
import gallery3 from '../../../assets/image/gallery3.jpg';
import gallery4 from '../../../assets/image/gallery4.jpg';
import gallery5 from '../../../assets/image/gallery5.jpg';
import gallery6 from '../../../assets/image/gallery6.jpg';
import gallery7 from '../../../assets/image/gallery7.jpg';
import gallery8 from '../../../assets/image/gallery8.jpg';
import gallery9 from '../../../assets/image/gallery9.jpg';
import gallery10 from '../../../assets/image/gallery10.jpg';
import gallery11 from '../../../assets/image/gallery11.jpg';
import gallery12 from '../../../assets/image/gallery12.jpg';
import gallery13 from '../../../assets/image/gallery13.jpg';
import gallery14 from '../../../assets/image/gallery14.jpg';
import gallery15 from '../../../assets/image/gallery15.jpg';
import gallery16 from '../../../assets/image/gallery16.jpg';
import gallery17 from '../../../assets/image/gallery17.jpg';
import gallery18 from '../../../assets/image/gallery18.jpg';
import gallery19 from '../../../assets/image/gallery19.jpg';
import gallery20 from '../../../assets/image/gallery20.jpg';
import gallery21 from '../../../assets/image/gallery21.jpg';
import gallery22 from '../../../assets/image/gallery22.jpg';
import gallery23 from '../../../assets/image/gallery23.jpg';
import gallery24 from '../../../assets/image/gallery24.jpg';
import gallery25 from '../../../assets/image/gallery25.jpg';
import gallery26 from '../../../assets/image/gallery26.jpg';
import gallery27 from '../../../assets/image/gallery27.jpg';
import gallery28 from '../../../assets/image/gallery28.jpg';
import gallery29 from '../../../assets/image/gallery29.jpg';
import gallery30 from '../../../assets/image/gallery30.jpg';
import gallery31 from '../../../assets/image/gallery31.jpg';
import gallery32 from '../../../assets/image/gallery32.jpg';
import gallery33 from '../../../assets/image/gallery33.jpg';
import gallery34 from '../../../assets/image/gallery34.jpg';
import gallery35 from '../../../assets/image/gallery35.jpg';
import gallery36 from '../../../assets/image/gallery36.jpg';
import gallery37 from '../../../assets/image/gallery37.jpg';
import gallery38 from '../../../assets/image/gallery38.jpg';
import gallery39 from '../../../assets/image/gallery39.jpg';
import gallery40 from '../../../assets/image/gallery40.jpg';
import gallery41 from '../../../assets/image/gallery41.jpg';
import gallery42 from '../../../assets/image/gallery42.jpg';
import gallery43 from '../../../assets/image/gallery43.jpg';
import gallery44 from '../../../assets/image/gallery44.jpg';
import gallery45 from '../../../assets/image/gallery45.jpg';
import gallery46 from '../../../assets/image/gallery46.jpg';
import gallery47 from '../../../assets/image/gallery47.jpg';
import gallery48 from '../../../assets/image/gallery48.jpg';
import gallery49 from '../../../assets/image/gallery49.jpg';

const allImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9,
  gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19,
  gallery20, gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27, gallery28, gallery29,
  gallery30, gallery31, gallery32, gallery33, gallery34, gallery35, gallery36, gallery37, gallery38, gallery39,
  gallery40, gallery41, gallery42, gallery43, gallery44, gallery45, gallery46, gallery47, gallery48, gallery49
];

const thumbnailImages = allImages.slice(0, 9);

const GallerySection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  // Preload adjacent images
  const preloadImages = useCallback((index: number) => {
    const indicesToPreload = [
      index - 2,
      index - 1,
      index + 1,
      index + 2,
    ].filter(i => i >= 0 && i < allImages.length);

    indicesToPreload.forEach(i => {
      const img = new Image();
      img.src = allImages[i];
    });
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      preloadImages(currentIndex);
    }
  }, [currentIndex, isModalOpen, preloadImages]);

  // Handle body scroll lock
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    if (touchStart !== null) {
      setDragOffset(currentTouch - touchStart);
    }
  };

  const onTouchEnd = () => {
    setIsDragging(false);

    if (!touchStart || !touchEnd) {
      setDragOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setDragOffset(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="divider"></div>
        <p className="gallery-subtitle">웨딩갤러리</p>

        <div className="gallery-grid">
          {thumbnailImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="gallery-modal"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button className="modal-close" onClick={closeModal}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            ref={imageContainerRef}
          >
            <div
              className="modal-image-wrapper"
              style={{
                transform: `translateX(${dragOffset}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              }}
            >
              <img
                src={allImages[currentIndex]}
                alt={`Gallery ${currentIndex + 1}`}
                className="modal-image"
              />
            </div>
          </div>

          <button className="modal-nav modal-prev" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>

          <button className="modal-nav modal-next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>

          <div className="modal-counter">
            {currentIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
