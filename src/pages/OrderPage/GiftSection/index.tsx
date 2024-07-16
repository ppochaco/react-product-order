import { Divider } from '@/components/ui/Divider';
import { Container } from '@/components/ui/Layout/Container';

import { GiftDetail } from './GiftDetail';
import { GiftMessage } from './GiftMessage';
import { dividerStyle } from './styles';

export const GiftSection = () => {
  return (
    <Container flexDirection="column">
      <GiftMessage />
      <Divider css={dividerStyle} />
      <GiftDetail />
    </Container>
  );
};
