import React from 'react';

interface ExpandlessfilledLevel2Props {
  className?: string;
}

const ExpandlessfilledLevel2: React.FC<ExpandlessfilledLevel2Props> = ({ className }) => {
  return (
    <svg
      className={`expandlessfilled-102 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.47 8L6.46997 4L5.52997 4.94L8.5833 8L5.52997 11.06L6.46997 12L10.47 8Z"
        fill="black"
        fillOpacity="0.6"
      />
    </svg>
  );
};

export default ExpandlessfilledLevel2;
