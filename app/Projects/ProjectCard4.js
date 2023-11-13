
import React from "react";

export default function ProjectCard4() {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-between items-center mb-5 text-gray-500">
      <span className="bg-green-200 text-green-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-red-500 dark:text-red-500">
        <svg
          className="mr-1 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
            clip-rule="evenodd"
          ></path>
          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
        </svg>
        Web Application
      </span>

      <span className="text-sm">September 2023 - December 2023</span>
    </div>
    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <a href="https://www.qpcleaners.ca/" target="_blank">
        Company Website
      </a>
    </h2>
    <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
      During my childhood, I was engaged in the dry cleaning business
      owned by my parents. Once I learned website development,
      specifically using React and Next.js with npm packages, I
      created a website for my dad's business.
    </p>
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          className="w-7 h-7 rounded-full"
          src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
          alt="react"
          data-tooltip-target="tooltip-dark13"
          data-tooltip-style="dark"
        />

        <div
          id="tooltip-dark13"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          React
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <img
          className="w-7 h-7 rounded-full"
          src="https://www.svgrepo.com/show/342062/next-js.svg"
          alt="nextjs"
          data-tooltip-target="tooltip-dark14"
          data-tooltip-style="dark"
        />

        <div
          id="tooltip-dark14"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Next JS
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <img
          className="w-7 h-7 rounded-full"
          src="https://www.svgrepo.com/show/445925/npm.svg"
          alt="npm"
          data-tooltip-target="tooltip-dark15"
          data-tooltip-style="dark"
        />

        <div
          id="tooltip-dark15"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          npm
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <img
          className="w-7 h-7 rounded-full"
          src="https://www.svgrepo.com/show/521297/node-16.svg"
          alt="nodejs"
          data-tooltip-target="tooltip-dark16"
          data-tooltip-style="dark"
        />

        <div
          id="tooltip-dark16"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Node JS
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <a
        target="_blank"
        href="https://www.qpcleaners.ca/"
        className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
      >
        View Website
        <svg
          className="ml-2 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </article>
  );
}
