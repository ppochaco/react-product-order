import { useOrder } from '@/provider/order/useOrder';

import { Container } from '@/components/ui/Layout/Container';
import { Text } from '@/components/ui/Text';

export const FinalPrice = () => {
  const { orderDetail } = useOrder();
  return (
    <Container justifyContent="space-between" alignItems="center">
      <Text isBold>최종 결제금액</Text>
      <Text size="lg" isBold>
        {orderDetail.finalPrice} 원
      </Text>
    </Container>
  );
};
