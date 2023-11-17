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
            src="https://www.youtube.com/embed/NpEaa2P7qZI?si=Hhv2nU-sHWLNoSDZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
              lobortis enim. Vivamus rhoncus risus non ligula porttitor aliquet.
              Donec et auctor magna. Aenean sit amet blandit ipsum. Nam laoreet
              turpis eu gravida tincidunt. Aliquam ultrices quam vitae blandit
              tristique. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Integer eget cursus
              mauris, in convallis turpis. Vivamus sagittis hendrerit mollis.
              Suspendisse id auctor est.
            </p>
          </div>
        </div>
      </section>

      {/* Video 2 */}
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Peru 2
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
              lobortis enim. Vivamus rhoncus risus non ligula porttitor aliquet.
              Donec et auctor magna. Aenean sit amet blandit ipsum. Nam laoreet
              turpis eu gravida tincidunt. Aliquam ultrices quam vitae blandit
              tristique. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Integer eget cursus
              mauris, in convallis turpis. Vivamus sagittis hendrerit mollis.
              Suspendisse id auctor est.
            </p>
          </div>
          <iframe
            className="w-full dark:hidden"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NpEaa2P7qZI?si=Hhv2nU-sHWLNoSDZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
        </div>
      </section>
    </main>
  );
}
