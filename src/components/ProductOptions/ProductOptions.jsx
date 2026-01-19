import React, { useState } from 'react';
import './ProductOptions.css';

export function ProductOptions({ options, shape, type, radius = '4px' }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const isCircle = shape === 'circle';
  const isColor = type === 'color';

  return (
    <div className="product-options">
      <div className={`options-list options-shape-${shape}`}>
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-item ${selectedOption === index ? 'active' : ''}`}
            onClick={() => setSelectedOption(index)}
            style={{
              backgroundColor: isColor ? option : 'transparent',
              borderRadius: isCircle ? '50%' : radius,
            }}
          >
            {!isColor && <span className="option-text">{option}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
