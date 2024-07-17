import { FormEvent, useState } from 'react';

import { useOrder } from '@/provider/order/useOrder';
import { OrderFormType } from '@/types/orderType';

export const useOrderForm = () => {
  const { orderDetail } = useOrder();

  const [formData, setFormData] = useState<OrderFormType>({
    productId: orderDetail.productId,
    productQuantity: orderDetail.productQuantity,
    gitfMessage: '',
    isCashChecked: false,
    cashReceiptType: '개인소득공제',
    cashReceiptNumber: '',
  });

  const handleCheckboxChange = (checkboxField: keyof OrderFormType) => {
    setFormData((prevData) => ({
      ...prevData,
      [checkboxField]: !prevData[checkboxField],
    }));
  };

  const handleInputChange = (
    inputField: keyof OrderFormType,
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [inputField]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('주문이 완료되었습니다.');
  };

  return { formData, handleCheckboxChange, handleInputChange, handleSubmit };
};
