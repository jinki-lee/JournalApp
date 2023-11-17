import React from "react";

export default function JounralFeatureSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            App Features
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img
                className="w-7 h-7 rounded-full"
                src="https://www.svgrepo.com/show/373595/firebase.svg"
                alt="Firebase"
                data-tooltip-target="tooltip-dark"
                data-tooltip-style="dark"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Firebase Authentication
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Firebase Authentication, part of Google Cloud, offers secure,
              scalable user sign-in and sign-up options with support for
              multiple authentication methods.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img
                className="w-7 h-7 rounded-full"
                src="https://www.svgrepo.com/show/373598/firestore.svg"
                alt="Firestore"
                data-tooltip-target="tooltip-dark"
                data-tooltip-style="dark"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Cloud Firestore
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Scalable NoSQL cloud database, built on Google Cloud
              infrastructure, to store and sync data for client-and-server-side
              development.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img
                className="w-7 h-7 rounded-full"
                src="https://www.svgrepo.com/show/475684/spotify-color.svg"
                alt="Spotify"
                data-tooltip-target="tooltip-dark"
                data-tooltip-style="dark"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Spotify API Integration
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Auto-assign tasks, send Slack messages, and much more. Now power
              up with hundreds of new templates to help you get started.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img
                className="w-7 h-7 rounded-full"
                src="https://www.svgrepo.com/show/382697/file-document-new-contract.svg"
                alt="Form"
                data-tooltip-target="tooltip-dark"
                data-tooltip-style="dark"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Journal Entry Form
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Audit-proof software built for critical financial operations like
              month-end close and quarterly budgeting.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img
                className="w-7 h-7 rounded-full"
                src="https://www.svgrepo.com/show/404490/digital-security-enter-pin-passkey-security-code-security-pin.svg"
                alt="DeX"
                data-tooltip-target="tooltip-dark"
                data-tooltip-style="dark"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Digital Experience
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Craft beautiful, delightful experiences for both marketing and
              product with real cross-company collaboration.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img
                className="w-7 h-7 rounded-full"
                src="https://www.svgrepo.com/show/191615/light-bulb.svg"
                alt="Inspire"
                data-tooltip-target="tooltip-dark"
                data-tooltip-style="dark"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Inspiration
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Keep your company’s lights on with customizable, iterative, and
              structured workflows built for all efficient teams and individual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
