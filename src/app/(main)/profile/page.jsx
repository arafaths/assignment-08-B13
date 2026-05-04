'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import avatarIcon from '../../../asset/user.png';
import { Avatar } from '@heroui/react';
import { UpdateProfile } from '@/components/profile/updateprofile';


const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <span className=" loading loading-spinner loading-xl text-info"></span>
      </div>
    );
  }

  const user = data?.user;

  if (!user) {
    return (
      <div className="text-center items-center mt-20 min-h-[40vh]">
        <p className="mb-4 text-2xl font-bold">You are not logged in ❌</p>
        <Link href="/signin" className="btn btn-primary">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="md:min-h-[80vh] bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 text-center">
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative">
           
            <Avatar className='w-24 h-24'>
              <Avatar.Image
                alt="John Doe"
                src={user?.image || avatarIcon.src}
                referrerPolicy="no-referrer"
                className="rounded-full object-cover border-2 border-primary"
              />
              <Avatar.Fallback>{user?.name[0].toUpperCase()}</Avatar.Fallback>
            </Avatar>
          </div>
        </div>

        {/* Name */}
        <h2 className="text-xl font-bold mt-4">{user?.name}</h2>

        {/* Email */}
        <p className="text-gray-500">{user?.email}</p>

        {/* Update Button */}
        <UpdateProfile/>
      </div>
    </div>
  );
};

export default ProfilePage;
