import Link from 'next/link';
import React from 'react';
import ProductsData from '../share/data';
import ProductCard from '../share/productcard';

const PopularProducts = async() => {
 
  const Products = await ProductsData();
  
  return (
    <div className="bg-base-200">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Popular Products</h2>
          <Link href={'/products'} className="text-blue-500">
            more...
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {Products.slice(0, 3).map(Product => (
            <ProductCard key={Product.id} Product={Product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;