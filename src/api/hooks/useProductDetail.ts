import { useSuspenseQuery } from '@tanstack/react-query';

import { fetchProductDetail } from '@/api/services/productDetail';

export const useProductDetail = (productId: number) => {
  const { data, status, error } = useSuspenseQuery({
    queryKey: ['product', 'detail', productId],
    queryFn: () => fetchProductDetail(productId),
  });

  const productDetail = {
    imageURL: data.imageURL,
    productName: data.name,
    price: data.price.sellingPrice,
  };

  return { productDetail, status, error };
};
