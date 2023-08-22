import Link from 'next/link';

export default function ProfilePage() {
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <Link
          href='/'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          Auth App
        </Link>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              User Profile
            </h1>
            <div className='space-y-4 md:space-y-6'>
              <div>
                <label
                  htmlFor='username'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Username
                </label>
                <p className='text-gray-700 dark:text-gray-300'>JohnDoe123</p>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email
                </label>
                <p className='text-gray-700 dark:text-gray-300'>john.doe@example.com</p>
              </div>
              <button className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
