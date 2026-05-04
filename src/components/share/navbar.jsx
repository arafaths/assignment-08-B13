'use client';

import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import avatarIcon from '../../asset/user.png'

const Navbar = () => {
  const path = usePathname()

  const userData = authClient.useSession();
  const user = userData.data?.user;
  
  const signOut = async() => {
    await authClient.signOut();
  }
  
  return (
    <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">
      {/* Left (Logo) */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-orange-500">
          ☀️ SunCart
        </Link>
      </div>

      {/* Center Menu */}
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-4">
          <li>
            <Link
              href="/"
              className={`${'/' === path ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`${'/products' === path ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className={`${'/profile' === path ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
            >
              My Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Right (Auth Section) */}
      <div className="flex-1 flex justify-end items-center gap-3">
        {user && (
          <>
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src={user?.image || avatarIcon.src}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name[0].toUpperCase()}</Avatar.Fallback>
            </Avatar>
            <button
              onClick={signOut}
              className="btn btn-sm btn-outline btn-error"
            >
              Logout
            </button>
          </>
        )}
        {!user && (
          <>
            <Link href="/signin" className="btn btn-sm btn-outline">
              Login
            </Link>
            <Link href="/signup" className="btn btn-sm btn-primary">
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="dropdown md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          ☰
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content right-0 mt-3 p-2 shadow bg-base-100 rounded-box w-40"
        >
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
    </div>
  );
};

export default Navbar;
