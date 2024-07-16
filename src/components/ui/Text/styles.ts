import { css } from '@emotion/react';

const fontSize = {
  sm: '0.9rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
};

export const textStyle = (
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl',
  isBold: boolean
) => {
  if (isBold) {
    return css({
      fontWeight: '600',
      fontSize: fontSize[size],
    });
  }
  return css({
    fontSize: fontSize[size],
  });
};
