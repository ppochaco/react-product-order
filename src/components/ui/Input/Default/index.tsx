import { InputHTMLAttributes, forwardRef } from 'react';

import { inputStyle } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <input css={inputStyle} ref={ref} {...props} />;
});

Input.displayName = 'Input';

export { Input };
