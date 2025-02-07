'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { lusitana } from './fonts';
import { registerUser } from '../lib/actions';
import { Button } from '@/app/ui/button';
import {
  AtSymbolIcon,
  KeyIcon,
  UserCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SignUpForm() {
  const [errorMessage, dispatch] = useFormState(registerUser, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 style={lusitana.style} className="mb-3 text-2xl">
          Create a new account
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your username address"
                required
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            New Account will be seeded with placeholder data
          </div>
        </div>
        <SignUpButton />
        <div>
          <span className="mt-2 text-xs text-gray-500">or</span>
          <Link href="/login">
            <Button className="mt-4 w-full">
              Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
          </Link>
        </div>
        {errorMessage && (
          <div className="flex h-8 items-end space-x-1 text-red-500">
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}

function SignUpButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Sign Up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
