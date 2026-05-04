import Link from 'next/link';
import SummerBanner from '../../asset/summerbanner.png'
import Image from 'next/image';

const Hero = () => { 
  return (
    <div className="hero sm:min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10">
        {/* Image */}
        <Image
          src={SummerBanner}
          className="w-full max-w-sm md:max-w-md rounded-lg shadow-2xl"
          alt="summer"
        />

        {/* Text Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            <span className=" animate__animated animate__fadeInDown">
              {' '}
              Summer Sale ☀️
            </span>{' '}
            <br />
            <span className="text-orange-500 animate__animated animate__fadeInUp">
              Up to 50% OFF
            </span>
          </h1>

          <p className="py-4 text-gray-500 max-w-md">
            Discover the hottest summer deals on sunglasses, outfits, skincare
            and more. Stay cool and stylish with SunCart!
          </p>

          <div className="flex gap-4">
            <Link
              href="/products"
              className="btn btn-sm sm:btn-md btn-primary bg-orange-500 border-none hover:bg-orange-600 animate__animated animate__zoomIn"
            >
              Shop Now
            </Link>

            <Link href="/products" className="btn btn-sm sm:btn-md btn-outline">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
