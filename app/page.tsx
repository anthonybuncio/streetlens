import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="text-white bg-[url('background.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl flex h-screen items-center -mt-20">
          <div className="container flex flex-col items-center px-4 py-4 mx-auto text-center">
            <div className="text-4xl font-bold md:text-5xl">
              <h1 className="">Search Dashcam Footage.</h1>
              <h2 className="block">
                A{" "}
                <span className=" bg-white bg-opacity-90 text-black uppercase tracking-wider whitespace-pre">
                  {` Public `}
                </span>{" "}
                Database.
              </h2>
            </div>

            <p className="mx-auto py-4 max-w-lg sm:text-xl sm:leading-relaxed">
              We are a community of dashcam owners coming together and helping
              others. Protect yourself and others with our cloud dashcam
              database service.
            </p>
            <p className="mx-auto mt-4 max-w-xl sm:text-lg sm:leading-relaxed">
              Sign up for full access today. It&apos;s{" "}
              <span className=" font-bold">FREE!</span>
            </p>

            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex flex-row-reverse items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                <span className="mx-2">Learn More</span>
              </Link>

              <Link
                href="/login"
                className="inline-flex flex-row-reverse items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5 mx-2 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z"
                  />
                </svg>

                <span className="mx-2">Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
