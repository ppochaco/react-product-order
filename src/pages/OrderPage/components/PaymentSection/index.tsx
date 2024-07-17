import { useOrder } from '@/provider/order/useOrder';
import { OrderFormType } from '@/types/orderType';

import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { Container } from '@/components/ui/Layout/Container';
import { Text } from '@/components/ui/Text';

import { CashCheckForm } from './CashCheckForm';
import { FinalPrice } from './FinalPrice';
import { buttonStyle, containerStyle } from './styles';

type PaymentSectionProps = {
  formData: OrderFormType;
  handleCheckboxChange: (checkboxField: keyof OrderFormType) => void;
  handleInputChange: (inputField: keyof OrderFormType, value: string) => void;
};

export const PaymentSection = ({
  formData,
  handleCheckboxChange,
  handleInputChange,
}: PaymentSectionProps) => {
  const { orderDetail } = useOrder();

  return (
    <Container flexDirection="column" gap="1rem" css={containerStyle}>
      <Text size="lg" isBold>
        결제 정보
      </Text>
      <Divider />
      <CashCheckForm
        formData={formData}
        handleCheckboxChange={handleCheckboxChange}
        handleInputChange={handleInputChange}
      />
      <Divider />
      <FinalPrice />
      <Divider />
      <Button size="large" css={buttonStyle}>
        {orderDetail.finalPrice} 결제하기
      </Button>
    </Container>
  );
};
