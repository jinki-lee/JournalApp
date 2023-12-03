import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import JournalInfoSection from "./journal-landing-page/JournalInfoSection";
import JournalFeatureSection from "./journal-landing-page/JournalFeatureSection";
import JournalVideoSection from "./journal-landing-page/JournalVideoSection";
import JournalTimelineSection from "./journal-landing-page/JournalTimelineSection";
import JournalTripInfoSection from "./journal-landing-page/JournalTripInfoSection";

const Login = () => {
  const { googleSignIn } = useUserAuth(); // Change from gitHubSignIn to googleSignIn

  const handleSignIn = async () => {
    try {
      await googleSignIn(); // Change to use googleSignIn
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Journal App
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            An app for the overthinkers.
          </p>
          <div className="flex flex-col mb-4 lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleSignIn}
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Google to use app
            </button>
          </div>
        </div>
      </section>
      <JournalInfoSection />
      <JournalFeatureSection />
      <JournalVideoSection />
      <JournalTripInfoSection />
      <JournalTimelineSection />
    </main>
  );
};

export default Login;
