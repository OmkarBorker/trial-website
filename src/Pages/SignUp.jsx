const RegistrationForm = () => {
  return (
    <div class="w-full h-screen font-sans bg-cover bg-[url('https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/GTYSdDW/videoblocks-science-fiction-blue-checkerboard-motion-background-loop_sewdlggl0_thumbnail-1080_01.png')]">
      <div class="container flex items-center justify-center flex-1 h-full mx-auto">
        <div class="flex flex-col w-11/12 max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
            Create a new account
          </div>
          <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
            Already have an account ?
            <a class="text-sm text-blue-500 underline hover:text-blue-700">
              <Link to="/sign-up">Sign in</Link>
            </a>
          </span>
          <div class="p-6 mt-8">
            <form action="#">
              <div class="flex flex-col mb-2">
                <div class=" relative ">
                  <input
                    type="text"
                    id="create-account-pseudo"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="pseudo"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="flex gap-4 mb-2">
                <div class=" relative ">
                  <input
                    type="text"
                    id="create-account-first-name"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="First name"
                    placeholder="First name"
                  />
                </div>
                <div class=" relative ">
                  <input
                    type="text"
                    id="create-account-last-name"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="Last name"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div class="flex flex-col mb-2">
                <div class=" relative ">
                  <input
                    type="text"
                    id="create-account-email"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="New Password"
                  />
                </div>
                <div class="flex flex-col mb-2 py-2">
                  <div class=" relative ">
                    <input
                      type="text"
                      id="create-account-email"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>
              <div class="flex w-full my-4">
                <button
                  onClick={hello}
                  class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;
