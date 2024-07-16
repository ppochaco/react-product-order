import { DEFAULT_IMAGE_URL } from '@/constants/data';

import { Divider } from '@/components/ui/Divider';
import { Image } from '@/components/ui/Image/Default';
import { Container } from '@/components/ui/Layout/Container';
import { Text } from '@/components/ui/Text';

import { containerStyle, textContainerStyle } from './styles';

export const ProductDetail = () => {
  return (
    <Container gap="2rem" css={containerStyle}>
      <Image src={DEFAULT_IMAGE_URL} ratio="square" />
      <Container flexDirection="column" gap="2rem" css={textContainerStyle}>
        <Container flexDirection="column" gap="1rem">
          <Text size="lg">떠먹는 아박</Text>
          <Text size="lg">6500원</Text>
        </Container>
        <Divider />
        <Text size="sm" isBold>
          카톡 친구가 아니어도 선물 코드로 선물 할 수 있어요!
        </Text>
        <Divider />
      </Container>
    </Container>
  );
};
