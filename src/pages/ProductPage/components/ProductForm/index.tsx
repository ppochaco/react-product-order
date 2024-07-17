import { Link } from 'react-router-dom';

import { useProductOptions } from '@/api/hooks/useProductOptions';
import { ROUTER_PATH } from '@/routes/path';

import { OneTextContainer } from '@/components/OneTextContainer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout/Container';

import { SelectNumber } from './SelectNumber';
import { TotalAmount } from './TotalAmount';
import { buttonStyle, formStyle } from './style';

type ProductFormProps = {
  productId: string;
};

export const ProductForm = ({ productId }: ProductFormProps) => {
  const { data, error } = useProductOptions(Number(productId));

  if (error) {
    return <OneTextContainer>{error.message}</OneTextContainer>;
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} css={formStyle}>
      <SelectNumber productName={data.productName} />
      <Container flexDirection="column" gap="1rem">
        <TotalAmount productPrice={data.productPrice} />
        <Link to={ROUTER_PATH.ORDER}>
          <Button theme="black" css={buttonStyle}>
            나에게 선물하기
          </Button>
        </Link>
      </Container>
    </form>
  );
};
