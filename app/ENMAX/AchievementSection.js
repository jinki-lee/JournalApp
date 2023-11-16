import React from "react";

export default function AchievementSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Achievements
          </h2>
          <div className="flex items-center justify-center w-full">
            <hr className="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="px-3 font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">
              Success Story
            </span>
            <hr className="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            We successfully launched ENMAX's <b>first </b>capstone project in collaboration
            with SAIT, marking a pivotal moment in our partnership between
            industry and education. This achievement highlights the power of
            collaboration and innovation, creating opportunities for both ENMAX
            and SAIT.
          </p>
          <div className="flex items-center justify-center w-full">
            <hr className="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="px-3 font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">
              Scholarships and Awards
            </span>
            <hr className="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Our work on the ENMAX capstone project did not go unnoticed. Thanks
            to our dedication and innovative approach, our capstone group was
            received the SAIT Work Integrated Learning General Award, a total of <b>$10,000 </b> in scholarships and awards.
          </p>
        </div>
      </div>
    </section>
  );
}
