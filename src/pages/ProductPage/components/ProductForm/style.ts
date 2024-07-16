import { css } from '@emotion/react';

export const formStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: '16rem',
  '@media (min-width: 768px)': {
    minWidth: '20rem',
  },
});

export const buttonStyle = css({
  height: '3.5rem',
  fontSize: '1rem',
});
