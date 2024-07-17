import { createContext } from 'react';

import { ProductDetail } from '@/types/productType';

import { OrderDetail } from './OrderProvider';

export type OrderContextType = {
  orderDetail: OrderDetail;
  updateOrderDetail: (productDetail: ProductDetail, totalPrice: number) => void;
};

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined
);
