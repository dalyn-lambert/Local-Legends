export default function SignIn() {
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-dk-purple rounded-md'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-white'>
            Sign in to edit content
          </h2>
        </div>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-white'>
                Email
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  placeholder='fox@corneria.gov'
                  required
                  className='block w-full rounded-md border-0 py-1.5 pl-1 bg-lt-gray text-white shadow-sm ring-1 ring-inset ring-dk-gray placeholder:text-dk-gray focus:ring-2 focus:ring-inset focus:ring-dk-purple sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium leading-6 text-white'>
                Password
              </label>

              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  placeholder='*****'
                  required
                  className='block w-full rounded-md border-0 pl-1 py-1.5 bg-lt-gray text-white shadow-sm ring-1 ring-inset ring-dk-gray placeholder:text-dk-gray focus:ring-2 focus:ring-inset focus:ring-dk-purple sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-lt-gray px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-md-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
