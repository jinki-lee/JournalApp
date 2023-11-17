import React from "react";

export default function JounralInfoSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            An app for over thinkers.
          </h2>
          <p className="mb-4">2023 was an extremely wild year for me.</p>
          <p className="mb-4">
            I worked my first full-time job, took a full course load at school,
            and began my journey to become a scratch golfer. I also started
            going to the gym in the mornings every single day to clear my head
            and get ready for the day ahead helped, but I my mind was still
            overflowing with thoughts.
          </p>
          <p className="mb-4">
            I was figuring out what I wanted to do with my life, keep in touch
            with friends and family, and looking for ways to integrate and map
            out everything I do.
          </p>
          <p className="mb-4">
            I found myself overthinking every situation, lacking creativity and
            motivation, and exhausted from keeping up with relationships. I
            needed to learn how to take a break and write down my thoughts so I
            could focus on what was important and look back on how I really did
            overthink every situation.
          </p>
          <p className="mb-4">
            That's what inspired me to develop this app and book a backpacking
            trip to Peru by myself.
          </p>

          <button
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Default
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
