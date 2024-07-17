import BaseLayout from '@/layouts/BaseLayout';

import { Content } from '@/components/Content';

import { GiftSection } from './components/GiftSection';
import { PaymentSection } from './components/PaymentSection';
import { useOrderForm } from './hooks/useOrderForm';

export const OrderPage = () => {
  const { formData, handleCheckboxChange, handleInputChange, handleSubmit } =
    useOrderForm();

  return (
    <BaseLayout>
      <form onSubmit={handleSubmit}>
        <Content height="92vh" maxWidth="1296px">
          <GiftSection
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <PaymentSection
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
            handleInputChange={handleInputChange}
          />
        </Content>
      </form>
    </BaseLayout>
  );
};
