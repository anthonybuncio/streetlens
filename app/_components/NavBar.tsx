"use client";
import Link from "next/link";
import { useState } from "react";
import WhiteCar from "./svg/WhiteCar";
import { signIn } from "next-auth/react";
import { DriverPovIcon } from "./svg/Icons";

// https://merakiui.com/components/application-ui/navbars
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative uppercase text-neutral-400 bg-zinc-900">
      <div className="px-4 sm:px-4 lg:max-w-screen-2xl mx-auto">
        <div className="sm:w-full md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-white">
              {/* <WhiteCar className="mr-2 mt-2 h-12 sm:h-16" /> */}

              <DriverPovIcon className="m-3 h-8 sm:h-12" />
              <div className="flex flex-col">
                <h1 className="self-center whitespace-nowrap text-lg md:text-xl lg:text-2xl font-bold tracking-wide leading-none">
                  Street Lens
                </h1>
                {/* <span className="text-neutral-400 text-sm md:text-lg tracking-widest leading-none">
                  New York
                </span> */}
              </div>
            </Link>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 px-2 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out text-neutral-400 bg-zinc-900 md:text-xs md:font-medium md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 md:flex-row md:items-center md:mx-2 lg:mx-8">
              <a
                href="/explore"
                className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md md:mt-0 hover:bg-zinc-600 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
              >
                Explore
              </a>
              <a
                href="/about"
                className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md md:mt-0 hover:bg-zinc-600 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
              >
                About
              </a>
              <a
                href="/"
                className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md md:mt-0 hover:bg-zinc-600 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
              >
                Premium
              </a>
              <a
                href="/upload"
                className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md md:mt-0 hover:bg-zinc-600 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
              >
                Upload
              </a>
              <a
                href="faq"
                className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md md:mt-0 hover:bg-zinc-600 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
              >
                Blog
              </a>
            </div>

            <div className="flex flex-col items-start md:flex-row md:items-center mt-4 md:mt-0 uppercase">
              {/* <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button> */}

              {/* <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-gray-700 dark:text-gray-200 md:hidden">
                  Anthony B
                </h3>
              </button> */}

              <a
                href="/login"
                className="md:hidden py-2 md:mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md md:mt-0 hover:bg-zinc-600 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
              >
                Login
              </a>

              <button
                type="button"
                className="hidden md:mx-3 transition-colors duration-300 transform text-white font-semibold md:block border uppercase py-1.5 px-4 text-center focus:outline-none rounded-lg hover:bg-zinc-800 tracking-widest"
                onClick={() => signIn()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
