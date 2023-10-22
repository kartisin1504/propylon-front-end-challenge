import React from 'react';

interface Starfilled2Props {
  opacity?: string;
  className?: string;
}

const Starfilled: React.FC<Starfilled2Props> = ({ opacity = '0.6', className }) => {
  return (
    <svg
      className={`starfilled-2 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8 11.8467L12.12 14.3333L11.0267 9.64667L14.6667 6.49333L9.87333 6.08667L8 1.66667L6.12667 6.08667L1.33333 6.49333L4.97333 9.64667L3.88 14.3333L8 11.8467Z"
        fill="black"
        fillOpacity={opacity}
      />
    </svg>
  );
};

export default Starfilled;
