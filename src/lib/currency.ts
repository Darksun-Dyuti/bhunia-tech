export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const CURRENCY_SYMBOL = '₹';
export const FREE_SHIPPING_THRESHOLD = 99;
