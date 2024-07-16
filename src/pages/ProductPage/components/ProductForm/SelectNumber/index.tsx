import { Card } from '@/components/Card';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout/Container';
import { Text } from '@/components/ui/Text';

import { buttonStyle, cardStyle, inputStyle } from './styles';

export const SelectNumber = () => {
  return (
    <Card flexDirection="column" gap="0.5rem" css={cardStyle}>
      <Text isBold>떠먹는 아박</Text>
      <Container flexDirection="row" gap="0.5rem">
        <Button theme="lightGray" size="medium" css={buttonStyle}>
          -
        </Button>
        <input type="number" css={inputStyle} />
        <Button theme="lightGray" size="medium" css={buttonStyle}>
          +
        </Button>
      </Container>
    </Card>
  );
};
