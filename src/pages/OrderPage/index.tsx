import BaseLayout from '@/layouts/BaseLayout';

import { Content } from '@/components/Content';

import { GiftSection } from './GiftSection';
import { PaymentSection } from './PaymentSection';

export const OrderPage = () => {
  return (
    <BaseLayout>
      <Content height="92vh" maxWidth="1296px">
        <GiftSection />
        <PaymentSection />
      </Content>
    </BaseLayout>
  );
};
