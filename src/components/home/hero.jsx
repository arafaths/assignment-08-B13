import Link from 'next/link';
import SummerBanner from '../../asset/summerbanner.png'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10">
        {/* Image */}
        <Image
          src={SummerBanner}
          className="max-w-sm md:max-w-md rounded-lg shadow-2xl"
          alt="summer"
        />

        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Summer Sale ☀️ <br />
            <span className="text-orange-500">Up to 50% OFF</span>
          </h1>

          <p className="py-4 text-gray-500 max-w-md">
            Discover the hottest summer deals on sunglasses, outfits, skincare
            and more. Stay cool and stylish with SunCart!
          </p>

          <div className="flex gap-4">
            <Link
              href="/products"
              className="btn btn-primary bg-orange-500 border-none hover:bg-orange-600"
            >
              Shop Now
            </Link>

            <Link href="/products" className="btn btn-outline">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
