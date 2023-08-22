import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 Error',
  description: 'Could not find requested resource',
  keywords: 'not found, 404',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50 dark:bg-gray-900'>
      <h1 className='text-4xl font-bold text-gray-800 dark:text-white mb-4'>Not Found</h1>

      <p className='text-gray-600 dark:text-gray-300 mb-6'>
        Could not find the requested resource.
      </p>

      <Link href='/' className='text-blue-500 hover:underline dark:text-blue-300'>
        Return Home
      </Link>
    </div>
  );
}
