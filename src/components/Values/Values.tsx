import React from 'react';
import Carousel from '../Carousel/Carousel';

interface ValueItem {
  title: string;
  description: string;
}

interface ValuesProps {
  title?: string;
  values: ValueItem[];
}

const Values: React.FC<ValuesProps> = ({
  title = 'Our Values',
  values
}) => {
  return (
    <div className="values-section" style={{ padding: '4rem 1rem' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: '#333'
      }}>
        {title}
      </h2>
      <Carousel items={values} interval={5000} />
    </div>
  );
};

export default Values;
