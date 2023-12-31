'use client';
import { VARIANT, COLOR } from '@/constants/button-parameters';
import clsx from 'clsx';
import React, { ReactNode, useMemo } from 'react';

interface IButton {
  children: ReactNode;
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
  color?: (typeof COLOR)[keyof typeof COLOR];
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  variant = VARIANT.CONTAINED,
  color = COLOR.PRIMARY,
  onClick = () => {},
  type = 'button',
}: IButton) => {
  const isPrimary = useMemo(() => color === COLOR.PRIMARY, [color]);
  const isSecondary = useMemo(() => color === COLOR.SECONDARY, [color]);
  const isWarning = useMemo(() => color === COLOR.WARNING, [color]);
  const isContained = useMemo(() => variant === VARIANT.CONTAINED, [variant]);
  const isOutlined = useMemo(() => variant === VARIANT.OUTLINED, [variant]);

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'font-medium rounded-lg text-sm px-5 py-2.5 transition-all hover:text-white',
        {
          'text-white  focus:ring-4 ': isContained,
          'bg-primary': isContained && isPrimary,
          'bg-error': isContained && isWarning,
          'bg-secondary': isContained && isSecondary,
          'border focus:ring-4': isOutlined,
          'border-primary text-primary': isOutlined && isPrimary,
          'border-secondary text-secondary ': isOutlined && isSecondary,
          'border-error text-error ': isOutlined && isWarning,
          'hover:bg-primary/75  focus:ring-primary/50': isPrimary,
          'hover:bg-secondary/75 focus:ring-secondary/50': isSecondary,
          'hover:bg-error/75 focus:ring-error/50': isWarning,
        },
      )}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
