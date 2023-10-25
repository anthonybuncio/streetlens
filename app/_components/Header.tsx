"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WhiteCar from "./svg/WhiteCar";

const Header = ({}) => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 z-20 w-full uppercase text-neutral-400 bg-zinc-900 px-6 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center text-white">
          <WhiteCar className={"mr-2 h-8 sm:h-16"} />
          <span className=" self-center whitespace-nowrap text-xl font-bold tracking-widest">
            Street Lens
          </span>
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold">
            Houston
          </span> */}
        </Link>
        <div className="flex items-center">
          <div className="mt-2 sm:mt-0 sm:flex md:order-2">
            {/* <!-- Login Button --> */}
            {session ? (
              <HeaderUser user={session.user} />
            ) : (
              <>
                <button
                  type="button"
                  className="mr-3 hidden border border-neutral-400 uppercase py-1.5 px-6 text-center text-xs text-white font-semibold focus:outline-none md:inline-block rounded-lg hover:bg-zinc-800 tracking-widest"
                  onClick={() => signIn()}
                >
                  Log In
                </button>
                <button
                  type="button"
                  className="mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none md:mr-0 md:inline-block rounded-lg"
                  onClick={() => signIn()}
                >
                  Sign up for FREE!
                </button>
              </>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto md:mx-8"
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-xs md:font-medium">
              <li>
                <Link
                  href="/"
                  className="block rounded py-2 pl-3 pr-4 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/explore"
                  className="block rounded py-2 pl-3 pr-4 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block rounded py-2 pl-3 pr-4 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/upload"
                  className="block rounded py-2 pl-3 pr-4 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
                >
                  Upload
                </Link>
              </li>
              {/* <li>
              <Link
                href="/request"
                className="block rounded py-2 pl-3 pr-4 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
              >
                Request
              </Link>
            </li> */}
              <li>
                <Link
                  href="/faq"
                  className="block rounded py-2 pl-3 pr-4 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-white tracking-widest font-semibold"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeaderUser = ({ user }) => {
  const [userMenu, setUserMenu] = useState(false);
  return (
    <>
      <div
        className="inline-flex items-stretch"
        onClick={() => setUserMenu(!userMenu)}
      >
        <div className="relative">
          <button
            type="button"
            className="group flex shrink-0 items-center rounded-lg transition"
          >
            <span className="sr-only">Menu</span>
            <div className="h-10 w-10 object-cover">
              <Image
                src={user.image}
                alt="profile"
                height={100}
                width={100}
                className="rounded-full"
              />
            </div>

            <p className="ml-2 hidden text-left text-xs sm:block">
              <strong className="block font-medium text-white">
                {user.name}
              </strong>

              <span className="text-gray-500"> {user.email} </span>
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {userMenu && (
            <div
              className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
              role="menu"
            >
              <div className="p-2">
                <Link
                  href="/account"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Account
                </Link>

                <Link
                  href="/messages"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  Messages
                </Link>

                <Link
                  href="/"
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
