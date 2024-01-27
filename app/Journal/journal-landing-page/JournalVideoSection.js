import React from "react";

export default function JournalVideoSection() {
  return (
    <main>
      {/* Video 1 */}
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <iframe
            className="w-full dark:hidden"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kQyD89EKA-4?si=BSudJVbUwrX5m8M7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Peru 1
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            In 2023, I embarked on an incredible journey through Peru, exploring Arequipa, Cusco, and Lima. I also hiked the breathtaking Inca Trail to Machu Picchu and had the unforgettable experience of spending nights in the Amazon jungle. It was a year filled with excitement and challenges, and amidst it all, I hardly had the opportunity to fully embrace and appreciate my achievements. So, I dedicated 19 days to self-discovery and cherishing every single moment.
            </p>
          </div>
        </div>
      </section>

      {/* Video 2 */}
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <iframe
            className="w-full dark:hidden"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/85k-lRC-WGw?si=6wB3XHSpBQhAFus0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Peru 1
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            This marked my very first solo travel adventure, and it was also my introduction to the world of Contiki tours. The trip was packed with countless sights, activities, and learning opportunities. I had the pleasure of meeting incredible people along the way, and I'm excitedly looking forward to experiencing more Contiki tours in the future.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
