import Link from "next/link";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 z-20 w-full px-4 py-2 bg-zinc-900 text-neutral-400 border-t border-zinc-700 shadow ">
      <div className="mx-auto max-w-screen-2xl">
        <div className="text-center text-xs lg:text-sm sm:flex sm:justify-between sm:text-left">
          <p className="hidden sm:block text-white">
            <span className="block sm:inline">All rights reserved. </span>

            <a
              className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
              href="/terms-of-service"
            >
              Terms & Conditions
            </a>

            <span> &middot; </span>

            <a
              className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>

            <span> &middot; </span>

            <a
              className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
              href="/contact"
            >
              Contact
            </a>
          </p>

          <p className="text-gray-500 sm:order-first">
            &copy; {date} Apptelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
