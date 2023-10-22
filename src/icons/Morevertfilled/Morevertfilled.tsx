import React from 'react';

interface MorevertfilledProps {
  color?: string;
  opacity?: string;
  className?: string;
}

const Morevertfilled: React.FC<MorevertfilledProps> = ({
  color = 'black',
  opacity = 'unset',
  className,
}) => {
  return (
    <svg
      className={`morevertfilled-14 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.00002 5.33335C8.73335 5.33335 9.33335 4.73335 9.33335 4.00002C9.33335 3.26669 8.73335 2.66669 8.00002 2.66669C7.26669 2.66669 6.66669 3.26669 6.66669 4.00002C6.66669 4.73335 7.26669 5.33335 8.00002 5.33335ZM8.00002 6.66669C7.26669 6.66669 6.66669 7.26669 6.66669 8.00002C6.66669 8.73335 7.26669 9.33335 8.00002 9.33335C8.73335 9.33335 9.33335 8.73335 9.33335 8.00002C9.33335 7.26669 8.73335 6.66669 8.00002 6.66669ZM8.00002 10.6667C7.26669 10.6667 6.66669 11.2667 6.66669 12C6.66669 12.7334 7.26669 13.3334 8.00002 13.3334C8.73335 13.3334 9.33335 12.7334 9.33335 12C9.33335 11.2667 8.73335 10.6667 8.00002 10.6667Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

export default Morevertfilled;
