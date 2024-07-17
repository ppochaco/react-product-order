import { createContext } from 'react';

import { OrderDetail, OrderProductDetail } from '@/types/orderType';

export type OrderContextType = {
  orderDetail: OrderDetail;
  updateOrderDetail: (
    productDetail: OrderProductDetail,
    totalPrice: number,
    productId: number,
    productQuantity: number
  ) => void;
};

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined
);
