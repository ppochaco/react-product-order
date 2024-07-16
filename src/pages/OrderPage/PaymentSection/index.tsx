import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { Container } from '@/components/ui/Layout/Container';
import { Text } from '@/components/ui/Text';

import { CashCheckForm } from './CashCheckForm';
import { TotalAmount } from './TotalAmount';
import { buttonStyle, containerStyle } from './styles';

export const PaymentSection = () => {
  return (
    <Container flexDirection="column" gap="1rem" css={containerStyle}>
      <Text size="lg" isBold>
        결제 정보
      </Text>
      <Divider />
      <CashCheckForm />
      <Divider />
      <TotalAmount />
      <Divider />
      <Button size="large" css={buttonStyle}>
        9900원 결제하기
      </Button>
    </Container>
  );
};
