import React from "react";

export default function JounralInfoSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Visualize Your Emotions
          </h2>
          <p className="mb-4">
            2023 was an extremely wild year for me. I worked my first full-time
            job, took a full course load at school, and began my journey to
            become a scratch golfer. Additionally, I started going to the gym
            every morning to clear my head and prepare for the day ahead, which
            helped, but my mind was still overflowing with thoughts
          </p>
          <p className="mb-4">
            I was navigating through life, trying to figure out what I wanted to
            do, keeping in touch with friends and family, and looking for ways
            to integrate and map out all my activities.
          </p>
          <p className="mb-4">
            I found myself overthinking every situation, lacking creativity and
            motivation, and exhausted from maintaining relationships. This
            realization led me to understand the importance of taking breaks and
            writing down my thoughts, allowing me to focus on what was important
            and gain perspective on my tendency to overthink.
          </p>
          <p className="mb-4">
          This experience inspired me to develop an app and book a solo backpacking trip to Peru.
          </p>
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
