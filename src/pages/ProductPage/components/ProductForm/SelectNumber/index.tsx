import { Card } from '@/components/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input/Default';
import { Container } from '@/components/ui/Layout/Container';
import { Text } from '@/components/ui/Text';

import { buttonStyle, cardStyle } from './styles';

type SelectNumberProps = {
  productName: string;
};

export const SelectNumber = ({ productName }: SelectNumberProps) => {
  return (
    <Card flexDirection="column" gap="0.5rem" css={cardStyle}>
      <Text isBold>{productName}</Text>
      <Container flexDirection="row" gap="0.5rem">
        <Button theme="lightGray" size="medium" css={buttonStyle}>
          -
        </Button>
        <Input type="number" />
        <Button theme="lightGray" size="medium" css={buttonStyle}>
          +
        </Button>
      </Container>
    </Card>
  );
};
