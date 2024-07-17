import { ReactNode, useState } from 'react';

import { ProductDetail } from '@/types/productType';

import { OrderContext } from './OrderContext';

export type OrderDetail = {
  productDetail: ProductDetail;
  finalPrice: number;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderDetail, setOrderDetail] = useState<OrderDetail>({
    productDetail: {
      imageURL:
        'https://st.kakaocdn.net/product/gift/product/20200331113312_a44ce3fd92424d40ba0c8964ff9bb81b',
      brandName: '카카오프렌즈',
      productName: '카카오프렌즈_튜브',
    },
    finalPrice: 1000,
  });

  const updateOrderDetail = (
    productDetail: ProductDetail,
    finalPrice: number
  ) => {
    setOrderDetail({
      productDetail,
      finalPrice,
    });
  };

  return (
    <OrderContext.Provider value={{ orderDetail, updateOrderDetail }}>
      {children}
    </OrderContext.Provider>
  );
};
