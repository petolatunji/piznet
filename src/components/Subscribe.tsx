const Subscribe = () => {
  return (
    <div className=' lg:px-5 xl:px-40 bg-[#155e75] text-white flex items-center flex-col mt-[50px] w-full rounded'>
      <div className='flex flex-col my-[100px] px-4'>
        <h1 className=' text-3xl xl:text-4xl text-center'>
          Enjoying my content? Subscribe Now!
        </h1>
        <p className='text-base text-center mt-8 mb-6'>
          Be Sure to check your spam folder as emails may not be sent to your
          inbox.
        </p>
        <div className='  '>
          <input
            type='email'
            placeholder='Enter email address'
            required
            className='bg-inherit appearance-none border-2 border-gray-200 rounded  py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-4 mb-8 w-[225px] mr-2 xl:ml-[60px] xl:w-[400px]'
          />
          <button className='text-[#155e75] bg-white rounded px-2  py-3'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
