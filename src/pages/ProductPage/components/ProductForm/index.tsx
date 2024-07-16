import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout/Container';

import { SelectNumber } from './SelectNumber';
import { TotalAmount } from './TotalAmount';
import { buttonStyle, formStyle } from './style';

export const ProductForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} css={formStyle}>
      <SelectNumber />
      <Container flexDirection="column" gap="1rem">
        <TotalAmount />
        <Button theme="black" css={buttonStyle}>
          나에게 선물하기
        </Button>
      </Container>
    </form>
  );
};
