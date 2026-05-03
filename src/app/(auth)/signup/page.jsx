'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      photo,
      password,
    });
    if (!error) {
      router.push('/')
    }
    if (data) {
      alert('SignUp Successful');
    }
    if (error) {
      alert(`SignUp filed ${error.message}`);
    }
  };

  const signIn = async () => {
    await authClient.signIn.social({
      provider: 'google',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        {/* Title */}
        <h2 className="text-2xl font-heading font-bold text-center mb-4">
          Create Account
        </h2>

        {/* Form */}
        <Form onSubmit={handleRegister} className="space-y-2.5">
          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Your Name" />
            <FieldError />
          </TextField>

          {/* Image */}
          <TextField isRequired name="photo" type="text">
            <Label>Image URL</Label>
            <Input placeholder="example.com/image" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={value => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address';
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={value => {
              if (value.length < 8) {
                return 'Password must be at least 8 characters';
              }
              if (!/[A-Z]/.test(value)) {
                return 'Password must contain at least one uppercase letter';
              }
              if (!/[0-9]/.test(value)) {
                return 'Password must contain at least one number';
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="">
            <button
              type="submit"
              className="btn btn-primary w-full rounded-full"
            >
              Register
            </button>
          </div>
        </Form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Login */}
        <button onClick={signIn} className="btn btn-outline w-full">
        <FcGoogle size={20}/>  Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{' '}
          <Link href="/signin" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
