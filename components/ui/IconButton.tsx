import { cn } from '@/lib/utils';
import React, { MouseEventHandler } from 'react';

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  icon: React.ReactElement;
}

const IconButton = ({ onClick, className, icon }: IconButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          `rounded-full flex items-center justify-center h-min p-2 bg-white border shadow-md  hover:scale-110 transition`,
          className
        )}
      >
        {icon}
      </button>
    </>
  );
};
export default IconButton;
