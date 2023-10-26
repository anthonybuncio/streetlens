import Link from "next/link";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full py-3 bg-zinc-900 text-neutral-400 border-t border-zinc-700 shadow md:flex md:items-center md:justify-between md:p-2 ">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid justify-center lg:justify-between">
          <div className="flex flex-col self-center text-xs text-center md:block lg:col-start-1 md:space-x-6">
            <span>Copyright © {date} by Apptelligence</span>
            <Link
              rel="noopener noreferrer"
              href="/privacy-policy"
              className="hover:text-white"
            >
              <span>Privacy policy</span>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="/terms-of-service"
              className="hover:text-white"
            >
              <span>Terms of service</span>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="/contact"
              className="hover:text-white"
            >
              <span>Contact Us</span>
            </Link>
          </div>
          <div className="hidden md:flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Email"
              className="flex items-center justify-center w-6 h-6"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 hover:text-white duration-150 text-gray-300"
              >
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Twitter"
              className="flex items-center justify-center w-6 h-6"
            >
              <svg
                fill="none"
                viewBox="0 0 15 15"
                className="w-4 h-4 hover:text-white duration-150 text-gray-300"
              >
                <path
                  fill="currentColor"
                  d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
                />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="GitHub"
              className="flex items-center justify-center w-6 h-6"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-4 h-4 hover:text-white duration-150 text-gray-300"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
