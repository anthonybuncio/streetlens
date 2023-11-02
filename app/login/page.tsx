import { getProviders, signIn, useSession } from "next-auth/react";
import WhiteCar from "../_components/svg/WhiteCar";
import { CameraIcon } from "../_components/svg/Icons";
import LoginButtons from "../_components/LoginButtons";

export default async function Login() {
  const providers = await getProviders();

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

        // return router.push("/explore");
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
          <form className="w-2/3 md:w-full max-w-md text-center pb-20">
            <WhiteCar className="w-full h-28 mx-auto" />
            <h1 className="text-lg text-white sm:text-xl font-bold">
              Welcome to Street Lens
            </h1>
            <h1 className="text-sm text-gray-600 capitalize sm:text-md">
              Create an account or login
            </h1>

            <div className="mt-6">
              <LoginButtons providers={providers} />
              <div className="mt-6 text-center text-xs text-white">
                By continuing, you agree to our{" "}
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
