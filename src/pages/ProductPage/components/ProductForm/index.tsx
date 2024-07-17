import { useProductDetail } from '@/api/hooks/useProductDetail';
import { useProductOptions } from '@/api/hooks/useProductOptions';
import { useNavigateToOrder } from '@/pages/ProductPage/hooks/useNavigateToOrder';
import { useTotalPrice } from '@/pages/ProductPage/hooks/useTotalPrice';
import { useOrder } from '@/provider/order/useOrder';

import { OneTextContainer } from '@/components/OneTextContainer';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout/Container';

import { SelectQuantity } from './SelectQuantity';
import { TotalPriceCallout } from './TotalPriceCallout';
import { buttonStyle, containerStyle } from './style';

type ProductFormProps = {
  productId: string;
};

export const ProductForm = ({ productId }: ProductFormProps) => {
  const { data, error } = useProductOptions(productId);
  const { totalPrice, quantity, updateQuantity } = useTotalPrice(productId);

  if (error) {
    return <OneTextContainer>{error.message}</OneTextContainer>;
  }

  const { orderProductDetail } = useProductDetail(productId);
  const { navigateToOrder } = useNavigateToOrder();
  const { updateOrderDetail } = useOrder();

  const onClick = () => {
    navigateToOrder();
    updateOrderDetail(orderProductDetail, totalPrice);
  };

  return (
    <Container
      flexDirection="column"
      justifyContent="space-between"
      css={containerStyle}
    >
      <SelectQuantity
        productName={data.productName}
        quantity={quantity}
        setQuantity={updateQuantity}
      />
      <Container flexDirection="column" gap="1rem">
        <TotalPriceCallout totalPrice={totalPrice} />
        <Button theme="black" onClick={onClick} css={buttonStyle}>
          나에게 선물하기
        </Button>
      </Container>
    </Container>
  );
};
