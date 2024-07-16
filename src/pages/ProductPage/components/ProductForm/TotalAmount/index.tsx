import { Callout } from '@/components/Callout';
import { Text } from '@/components/ui/Text';

import { calloutStyle } from './styles';

export const TotalAmount = () => {
  return (
    <Callout
      radius={3}
      theme="lightGray"
      justifyContent="space-between"
      alignItems="center"
      css={calloutStyle}
    >
      <Text size="md">총 결제 금액</Text>
      <Text size="lg">6500원</Text>
    </Callout>
  );
};
