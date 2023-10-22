import React from 'react';

interface ExpandlessfilledLevel1Props {
  color?: string;
  opacity?: string;
  className?: string;
}

const ExpandlessfilledLevel1: React.FC<ExpandlessfilledLevel1Props> = ({
  color = 'black',
  opacity = 'unset',
  className,
}) => {
  return (
    <svg
      className={`expandlessfilled-101 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8 10.47L12 6.46997L11.06 5.52997L8 8.5833L4.94 5.52997L4 6.46997L8 10.47Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

export default ExpandlessfilledLevel1;
