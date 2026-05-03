import Link from 'next/link';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">☀️ SunCart</h2>
          <p className="mt-2 text-sm text-gray-500">
            Your one-stop shop for all summer essentials. Stay cool and stylish!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p>Email: support@suncart.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-orange-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t text-sm text-gray-500">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
