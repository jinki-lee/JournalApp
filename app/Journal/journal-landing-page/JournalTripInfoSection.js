import React from "react";

export default function JounralFeatureSection() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <hr className="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="px-3 font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">
          Travel Journey
        </span>
        <hr className="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1</dt>
            <dd class="font-light text-gray-500 dark:text-gray-400">Jinki</dd>
          </div>

          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">7</dt>
            <dd class="font-light text-gray-500 dark:text-gray-400">Cities</dd>
          </div>

          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">15</dt>
            <dd class="font-light text-gray-500 dark:text-gray-400">Days</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
