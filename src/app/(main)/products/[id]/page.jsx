import Image from 'next/image';
import ProductsData from '@/components/share/data';

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const products = await ProductsData();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500">Product not found ❌</div>
    );
  }

  return (
    <div className="bg-base-200">
      <div className="min-h-[80vh] max-w-6xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div>
            {/* Title */}
            <h1 className="text-3xl font-heading font-bold">{product.name}</h1>

            {/* Brand */}
            <p className="text-gray-500 mt-2">Brand: {product.brand}</p>

            {/* Rating */}
            <p className="mt-2 text-yellow-500">⭐ {product.rating}</p>

            {/* Price */}
            <p className="text-2xl font-bold text-primary mt-4">
              ${product.price}
            </p>

            {/* Stock */}
            <p className="mt-2">Stock: {product.stock}</p>

            {/* Description */}
            <p className="mt-4 text-gray-600">{product.description}</p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="btn btn-primary rounded-full">Buy Now</button>
              <button className="btn btn-outline rounded-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
