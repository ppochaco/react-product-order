import { css } from '@emotion/react';

import { colors } from '@/styles/variants/theme';

export const cardStyle = css({
  padding: '1rem',
});

export const buttonStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '4rem',
});

export const inputStyle = css({
  border: `1px solid ${colors.gray[200]}`,
  borderRadius: '0.3rem',
  width: '100%',
});
