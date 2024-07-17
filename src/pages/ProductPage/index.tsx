import { useNavigate, useParams } from 'react-router-dom';

import BaseLayout from '@/layouts/BaseLayout';
import { ROUTER_PATH } from '@/routes/path';

import { Content } from '@/components/Content';

import { ProductDetail } from './components/ProductDetail';
import { ProductForm } from './components/ProductForm';
import { containerStyle } from './styles';

export const ProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  if (!productId) {
    navigate(ROUTER_PATH.HOME);
    return null;
  }

  return (
    <BaseLayout>
      <Content gap="2rem" height="92vh" maxWidth="1296px" css={containerStyle}>
        <ProductDetail productId={productId} />
        <ProductForm productId={productId} />
      </Content>
    </BaseLayout>
  );
};
