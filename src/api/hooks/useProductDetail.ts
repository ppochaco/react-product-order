import { useSuspenseQuery } from '@tanstack/react-query';

import { fetchProductDetail } from '../services/productDetail';

export const useProductDetail = (productId: number) => {
  const { data, status, error } = useSuspenseQuery({
    queryKey: ['product', 'detail'],
    queryFn: () => fetchProductDetail(productId),
  });

  const productDetail = {
    imageURL: data.imageURL,
    productName: data.name,
    price: data.price.sellingPrice,
  };

  return { productDetail, status, error };
};
