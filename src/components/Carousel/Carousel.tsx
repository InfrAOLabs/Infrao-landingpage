import React, { useState, useEffect } from 'react';

interface CarouselProps {
  items: {
    title: string;
    description: string;
  }[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getPreviousIndex = () => {
    return currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return (currentIndex + 1) % items.length;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(getNextIndex());
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex(getPreviousIndex());
  };

  const handleNextClick = () => {
    setCurrentIndex(getNextIndex());
  };

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 0',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '0 1rem'
      }}>
        {/* Previous Item */}
        <div style={{
          flex: '1',
          opacity: '0.7',
          transform: 'scale(0.9)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          padding: '1rem',
          backgroundColor: '#f8f8f8',
          borderRadius: '8px',
          minWidth: '250px'
        }} onClick={handlePrevClick}>
          <h3 style={{ 
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#666'
          }}>
            {items[getPreviousIndex()].title}
          </h3>
          <p style={{ 
            fontSize: '1rem',
            lineHeight: '1.4',
            color: '#888'
          }}>
            {items[getPreviousIndex()].description}
          </p>
        </div>

        {/* Current Item */}
        <div style={{
          flex: '1',
          transform: 'scale(1)',
          transition: 'all 0.3s ease',
          zIndex: 1,
          padding: '1.5rem',
          backgroundColor: '#fff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          minWidth: '300px'
        }}>
          <h2 style={{ 
            fontSize: '2rem',
            marginBottom: '1rem',
            color: '#333'
          }}>
            {items[currentIndex].title}
          </h2>
          <p style={{ 
            fontSize: '1.2rem',
            lineHeight: '1.6',
            color: '#666'
          }}>
            {items[currentIndex].description}
          </p>
        </div>

        {/* Next Item */}
        <div style={{
          flex: '1',
          opacity: '0.7',
          transform: 'scale(0.9)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          padding: '1rem',
          backgroundColor: '#f8f8f8',
          borderRadius: '8px',
          minWidth: '250px'
        }} onClick={handleNextClick}>
          <h3 style={{ 
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: '#666'
          }}>
            {items[getNextIndex()].title}
          </h3>
          <p style={{ 
            fontSize: '1rem',
            lineHeight: '1.4',
            color: '#888'
          }}>
            {items[getNextIndex()].description}
          </p>
        </div>
      </div>
      
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '2rem'
      }}>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === currentIndex ? '#333' : '#ddd',
              cursor: 'pointer',
              padding: 0,
              margin: '0 4px'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
