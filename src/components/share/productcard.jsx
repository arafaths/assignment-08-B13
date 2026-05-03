import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ Product }) {
  

  const { id, name, price, rating, image } = Product;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl">
      {/* Image */}
      <figure className="p-4">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-xl object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </figure>

      {/* Content */}
      <div className="card-body pt-0">
        {/* Product Name */}
        <h2 className="font-heading text-lg font-semibold">{name}</h2>

        {/* Rating */}
        <p className="text-sm text-gray-500">⭐ {rating}</p>

        {/* Price */}
        <p className="text-xl font-bold text-primary">${price}</p>

        {/* Button */}
        <div className="card-actions justify-end mt-2">
          <Link href={`/products/${id}`}>
            <button className="btn btn-primary btn-sm rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
