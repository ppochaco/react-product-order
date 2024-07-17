import { useContext } from 'react';

import { OrderContext, OrderContextType } from './OrderContext';

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('OrderProvider를 반드시 사용해야합니다.');
  }

  return context;
};
