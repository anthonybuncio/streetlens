import Link from "next/link";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 z-20 w-full px-4 py-2 bg-zinc-900 text-neutral-400 border-t border-zinc-700 shadow ">
      <div className="mx-auto max-w-screen-2xl">
        <div className="text-center text-xs sm:flex flex-row-reverse sm:justify-between sm:text-left">
          <p className="hidden sm:block text-neutral-500">
            <a
              className="inline-block text-neutral-600 underline transition hover:text-neutral-600/75"
              href="/terms-of-service"
            >
              Terms & Conditions
            </a>

            <span> &middot; </span>

            <a
              className="inline-block text-neutral-600 underline transition hover:text-neutral-600/75"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>

            <span> &middot; </span>

            <a
              className="inline-block text-neutral-600 underline transition hover:text-neutral-600/75"
              href="/contact"
            >
              Contact Us
            </a>
          </p>

          <p className="text-neutral-500 sm:order-first">
            &copy; {date} Apptelligence Labs.{" "}
            <span className="block sm:inline"> All rights reserved. </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
