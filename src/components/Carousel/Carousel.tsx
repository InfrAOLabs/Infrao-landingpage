import React, { useState, useEffect, useRef } from 'react';

interface CarouselProps {
  items: {
    title: string;
    description: string;
  }[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  const getPreviousIndex = () => (currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex + 1) % items.length;

  const goToIndex = (index: number) => {
    if (transitioning) return;
    
    setTransitioning(true);
    setCurrentIndex(index);
    
    // Reset transition state after animation completes
    setTimeout(() => setTransitioning(false), 250);
  };

  const handlePrevClick = () => goToIndex(getPreviousIndex());
  const handleNextClick = () => goToIndex(getNextIndex());

  // Auto-advance carousel
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      if (!transitioning) {
        handleNextClick();
      }
    }, interval);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, transitioning]);

  // Calculate heights for consistent card sizing
  useEffect(() => {
    if (!containerRef.current) return;
    
    const cards = containerRef.current.querySelectorAll('.carousel-card');
    let maxHeight = 0;
    
    // Reset heights to auto to get natural heights
    cards.forEach(card => {
      (card as HTMLElement).style.height = 'auto';
    });
    
    // Find the tallest card
    cards.forEach(card => {
      maxHeight = Math.max(maxHeight, card.getBoundingClientRect().height);
    });
    
    // Set all cards to the same height
    cards.forEach(card => {
      (card as HTMLElement).style.height = `${maxHeight}px`;
    });
  }, [currentIndex, items]);

  // Get items to display (previous, current, next)
  const displayItems = [
    items[getPreviousIndex()],
    items[currentIndex],
    items[getNextIndex()]
  ];

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 0',
      overflow: 'hidden'
    }}>
      <div 
        ref={containerRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '0 1rem',
          position: 'relative',
          minHeight: '300px' // Prevent layout shift during transitions
        }}
      >
        {displayItems.map((item, idx) => {
          const isCurrent = idx === 1;
          return (
            <div
              key={`${currentIndex}-${idx}`}
              className="carousel-card"
              style={{
                flex: '1',
                opacity: isCurrent ? 1 : 0.7,
                transform: isCurrent ? 'scale(1)' : 'scale(0.9)',
                transition: 'all 0.25s ease-in-out',
                cursor: isCurrent ? 'default' : 'pointer',
                padding: isCurrent ? '1.5rem' : '1rem',
                backgroundColor: isCurrent ? '#fff' : '#f8f8f8',
                boxShadow: isCurrent ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                borderRadius: '8px',
                minWidth: '280px',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
              onClick={!isCurrent ? (idx === 0 ? handlePrevClick : handleNextClick) : undefined}
            >
              <h2 style={{ 
                fontSize: isCurrent ? '1.75rem' : '1.5rem',
                margin: '0 0 0.75rem 0',
                color: isCurrent ? '#333' : '#666',
                lineHeight: '1.3',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center'
              }}>
                {item.title}
              </h2>
              <p style={{ 
                fontSize: isCurrent ? '1.1rem' : '1rem',
                lineHeight: '1.5',
                color: isCurrent ? '#666' : '#888',
                margin: 0,
                flex: 1,
                display: 'flex',
                alignItems: 'center'
              }}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '1.5rem',
        position: 'relative',
        zIndex: 2
      }}>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === currentIndex ? '#333' : '#ddd',
              cursor: 'pointer',
              padding: 0,
              margin: '0 4px',
              transition: 'background-color 0.2s ease',
              opacity: transitioning ? 0.7 : 1
            }}
            disabled={transitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
