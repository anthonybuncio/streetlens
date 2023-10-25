import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="text-white bg-[url('background.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl flex h-screen items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="py-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Search Dashcam Footage.
              <span className="sm:block"> A Public Database. </span>
            </h1>
            <p className="mx-auto py-8 max-w-xl sm:text-xl sm:leading-relaxed">
              We are a community of dashcam owners coming together and helping
              others. Protect yourself and others with our cloud dashcam
              database service.
            </p>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              Sign up for full access today. It&apos;s{" "}
              <span className=" font-bold">FREE!</span>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/register"
              >
                Get Started
              </Link>

              <Link
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
