"use client";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import WhiteCar from "../_components/svg/WhiteCar";
import { CameraIcon } from "../_components/svg/Icons";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      if (
        data.email === "anthonyb.ft@gmail.com" &&
        data.password === "password"
      ) {
        console.log("Success!!");

        return router.push("/explore");
      } else console.log("Incorrect..");

      // let response = await fetch("http://localhost:3000/api/login");
      // let userData = await response.json();
      // let userProfile = JSON.parse(JSON.stringify(userData));

      // console.log(userData);
      // return {
      //   userProfile
      // };
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <section className="bg-stone-950">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form className="w-full max-w-md text-center pb-20">
            <CameraIcon className="w-auto h-12 sm:h-16 mx-auto" />

            <h1 className="mt-3 mb-12 text-2xl text-gray-800 capitalize sm:text-3xl dark:text-white">
              Log In
            </h1>

            <div className="mt-6">
              <Link
                href="#"
                onClick={() => signIn()}
                className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>

                <span className="mx-2">Sign in with Google</span>
              </Link>

              <div className="mt-6 text-center text-xs">
                By continuing, you confirm you&apos;ve read and agree to our{" "}
                <a
                  href="/terms-of-service"
                  className="text-blue-500 hover:underline dark:text-blue-400"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  className=" text-blue-500 hover:underline dark:text-blue-400"
                >
                  Privacy Policy
                </a>
                {"."}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
