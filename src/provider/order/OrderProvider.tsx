import { ReactNode, useCallback, useMemo, useState } from 'react';

import { OrderDetail, OrderProductDetail } from '@/types/orderType';

import { OrderContext } from './OrderContext';

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderDetail, setOrderDetail] = useState<OrderDetail>({
    productDetail: {
      imageURL:
        'https://st.kakaocdn.net/product/gift/product/20200331113312_a44ce3fd92424d40ba0c8964ff9bb81b',
      brandName: '카카오프렌즈',
      productName: '카카오프렌즈_튜브',
    },
    finalPrice: 1000,
    productId: 1,
    productQuantity: 1,
  });

  const updateOrderDetail = useCallback(
    (
      productDetail: OrderProductDetail,
      finalPrice: number,
      productId: number,
      productQuantity: number
    ) => {
      setOrderDetail({
        productDetail,
        finalPrice,
        productId,
        productQuantity,
      });
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      orderDetail,
      updateOrderDetail,
    }),
    [orderDetail, updateOrderDetail]
  );

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
