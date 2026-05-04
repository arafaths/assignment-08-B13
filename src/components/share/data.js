import React from 'react';

const ProductsData = async() => {
  const res = await fetch('https://suncart-two.vercel.app/products.json');
  return res.json();
};

export default ProductsData;