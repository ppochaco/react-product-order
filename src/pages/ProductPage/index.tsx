import BaseLayout from '@/layouts/BaseLayout';

import { Content } from '@/components/Content';

import { ProductDetail } from './components/ProductDetail';
import { ProductForm } from './components/ProductForm';
import { containerStyle } from './styles';

export const ProductPage = () => {
  return (
    <BaseLayout>
      <Content gap="2rem" height="92vh" maxWidth="1296px" css={containerStyle}>
        <ProductDetail />
        <ProductForm />
      </Content>
    </BaseLayout>
  );
};
