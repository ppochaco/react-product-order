import { Container } from '@/components/ui/Layout/Container';
import { Text } from '@/components/ui/Text';

export const TotalAmount = () => {
  return (
    <Container justifyContent="space-between" alignItems="center">
      <Text isBold>최종 결제금액</Text>
      <Text size="lg" isBold>
        9900원
      </Text>
    </Container>
  );
};
