import ProductsData from '@/components/share/data';
import ProductCard from '@/components/share/productcard';
import React from 'react';

const ProductsPage = async() => {

  const Products = await ProductsData();
  return (
    <div className="bg-base-200">
      <div className="max-w-7xl mx-auto px-5 pb-10 pt-5">
        <h2 className="text-xl font-semibold">All Products</h2>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {Products.map(Product => (
            <ProductCard key={Product.id} Product={Product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;