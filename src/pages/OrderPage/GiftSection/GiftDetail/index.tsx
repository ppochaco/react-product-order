import { DEFAULT_IMAGE_URL } from '@/constants/data';

import { Card } from '@/components/Card';
import { Image } from '@/components/ui/Image/Default';
import { Container } from '@/components/ui/Layout/Container';
import { Text } from '@/components/ui/Text';

import { cardStyle, containerStyle, subtitleStyle } from './styles';

export const GiftDetail = () => {
  return (
    <Container flexDirection="column" gap="1rem" css={containerStyle}>
      <Text isBold>선물내역</Text>
      <Card gap="0.5rem" css={cardStyle}>
        <Image
          src={DEFAULT_IMAGE_URL}
          ratio="square"
          width="7rem"
          radius={0.2}
        />
        <Container flexDirection="column">
          <Text size="sm" css={subtitleStyle}>
            제이블룸(팬시)
          </Text>
          <Text size="sm">
            말랑 쫀득 꿀잠 선물 허그 오리 모찌 인형 /애착 쿠션 35cm X 1개
          </Text>
        </Container>
      </Card>
    </Container>
  );
};
