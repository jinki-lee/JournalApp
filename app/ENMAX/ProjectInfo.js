import React from "react";

export default function ProjectInfo() {
  return (
    <div class="mx-auto max-w-screen-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<ul
  class="flex flex-col sm:flex-row text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
  id="defaultTab"
  data-tabs-toggle="#defaultTabContent"
  role="tablist"
>
  <li class="mb-2 sm:mb-0 sm:mr-2">
    <button
      id="overview-tab"
      data-tabs-target="#overview"
      type="button"
      role="tab"
      aria-controls="overview"
      aria-selected="false"
      class="inline-block w-full sm:w-auto p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
    >
            Purpose and Objectives
          </button>
        </li>

        <li class="mb-2 sm:mb-0 sm:mr-2">
          <button
            id="technology-tab"
            data-tabs-target="#technology"
            type="button"
            role="tab"
            aria-controls="technology"
            aria-selected="false"
            class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            Technology Stack
          </button>
        </li>

        <li class="mb-2 sm:mb-0 sm:mr-2">
          <button
            id="requirements-tab"
            data-tabs-target="#requirements"
            type="button"
            role="tab"
            aria-controls="requirements"
            aria-selected="false"
            class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            Functional Requirements
          </button>
        </li>
        <li class="mb-2 sm:mb-0 sm:mr-2">
          <button
            id="capstone-tab"
            data-tabs-target="#capstone"
            type="button"
            role="tab"
            aria-controls="capstone"
            aria-selected="true"
            class="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
          >
            Capstone Partnership
          </button>
        </li>
      </ul>
      <div id="defaultTabContent">
        {/* Purpose and Objectives */}
        <div
          class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="overview"
          role="tabpanel"
          aria-labelledby="overview-tab"
        >
          <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Develop a Recognition Portal
          </h2>
          <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
            <li class="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                Employee Recognition and Morale Boosting
              </span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">Enhancing Company Culture</span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">Performance Incentives</span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">Feedback and Development</span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">Tracking and Analytics</span>
            </li>
          </ul>
        </div>
        {/* Technology Used */}
        <div
          class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="technology"
          role="tabpanel"
          aria-labelledby="technology-tab"
        >
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            {/* 1 */}

            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="false"
                aria-controls="accordion-flush-body-1"
              >
                <span>ASP.NET Framework</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              class="hidden"
              aria-labelledby="accordion-flush-heading-1"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  For our group project, we chose ASP.NET MVC, a web application
                  framework by Microsoft. Renowned for implementing the
                  Model-View-Controller (MVC) design pattern, it was integral in
                  developing our dynamic, scalable web application.
                </p>
                <br />
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>
                    <u>MVC Architecture Breakdown:</u>
                  </b>
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Model:</b> Our data and business logic layer. Here, we
                  managed data retrieval, processing, and other critical backend
                  functionalities.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>View:</b> This was our presentation layer, where we crafted
                  the user interface with HTML, CSS, and JavaScript. It
                  dynamically displayed data based on user interactions and
                  controller logic.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Controller:</b> Serving as the intermediary, controllers
                  managed user inputs, liaised with the Model for data
                  processing, and updated the Views with the results.
                </p>
                <br />
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  This architecture was pivotal in our team's workflow, allowing
                  us to work efficiently on different application aspects
                  simultaneously. It streamlined our development process,
                  ensuring each team member could focus on specific tasks
                  without overlap, thereby enhancing productivity and
                  maintaining code clarity. ASP.NET MVC not only facilitated an
                  efficient development process but also ensured a responsive
                  and user-friendly final product.
                </p>
              </div>
            </div>

            {/* 2 */}

            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span>User Experience and User Interface Design</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              class="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Figma</b>
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  {" "}
                  In our group project, we effectively utilized Figma as a
                  collaborative design tool to create and refine the user
                  interface of our web portal. Figma's real-time collaboration
                  feature allowed team members to simultaneously work on the
                  design, offer instant feedback, and make immediate
                  adjustments. We took advantage of its component library to
                  ensure consistent design elements across the portal. This
                  streamlined our design process, enhanced team coordination,
                  and played a crucial role in achieving a cohesive and
                  user-friendly interface.
                </p>
              </div>
            </div>

            {/* 3 */}

            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span>Git and Git Branching Strategy</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-3"
              class="hidden"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Branching Strategy:</b>
                </p>
                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    We implemented a structured Git branching strategy to
                    maintain an organized and efficient workflow. This involved
                    using 'feature branches' for individual features or bug
                    fixes, which each developer worked on independently.
                  </li>
                  <li>
                    Upon completion, these branches were reviewed through pull
                    requests and then merged into a 'develop' branch. This
                    ensured that our main branch ('master' or 'main') always
                    remained stable and release-ready.
                  </li>
                </ul>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Collaborative Coding and Code Review:</b>
                </p>
                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    With multiple developers, we used Git for version control to
                    track changes and manage code collaboratively. Code reviews
                    were integral to our process, ensuring code quality and
                    consistency before merging into the main codebase.
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 */}
            <h2 id="accordion-flush-heading-4">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-4"
                aria-expanded="false"
                aria-controls="accordion-flush-body-4"
              >
                <span>Agile Management and Serverless Architecture</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-4"
              class="hidden"
              aria-labelledby="accordion-flush-heading-4"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Agile Methodology:</b>
                </p>
                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    Adopting Agile principles, we managed our workflows in Azure
                    DevOps, effectively planning sprints, and tracking the
                    development progress.
                  </li>
                </ul>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Serverless Backend with Azure Functions:</b>
                </p>
                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    Azure Functions facilitated a scalable, event-driven backend
                    architecture. This serverless computing solution allowed us
                    to focus on building features without worrying about the
                    underlying infrastructure.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5 */}
            <h2 id="accordion-flush-heading-5">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-5"
                aria-expanded="false"
                aria-controls="accordion-flush-body-5"
              >
                <span>Hosting Repositories in Azure DevOps</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-5"
              class="hidden"
              aria-labelledby="accordion-flush-heading-5"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Centralized Repository Management:</b>
                </p>
                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    We hosted our Git repositories in Azure DevOps, which
                    provided a centralized platform for our source code. Azure
                    DevOps offered additional tools for repository management,
                    access control, and integration with other services.
                  </li>
                </ul>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Continuous Integration/Continuous Deployment (CI/CD):</b>
                </p>
                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    Azure DevOps enabled us to set up CI/CD pipelines. Every
                    code commit triggered an automated build and test process,
                    ensuring that our application was always in a deployable
                    state.
                  </li>
                </ul>
              </div>
            </div>

            {/* 6 */}
            <h2 id="accordion-flush-heading-6">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-6"
                aria-expanded="false"
                aria-controls="accordion-flush-body-6"
              >
                <span>Development and Database Management</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-6"
              class="hidden"
              aria-labelledby="accordion-flush-heading-6"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Microsoft Visual Studio:</b>
                </p>
                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    As our main integrated development environment, Visual
                    Studio offered comprehensive tools for coding, debugging,
                    and version control integration, enhancing our coding
                    efficiency and quality.
                  </li>
                </ul>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  <b>Microsoft SQL Server Management Studio (SSMS):</b>
                </p>
                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    SSMS was pivotal for our database management. It provided an
                    efficient platform for configuring, managing, and
                    administering all components of the Microsoft SQL Server.
                    Our team used it to manage the database schema, run queries,
                    and analyze data, ensuring robust database performance and
                    integrity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Functional Requirements */}
        <div
          class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="requirements"
          role="tabpanel"
          aria-labelledby="requirements-tab"
        >
          <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            As a user I want to...
          </h2>
          <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
            <li class="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                easily send and receive recognition and points.
              </span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                {" "}
                track my points and transaction history.
              </span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                enjoy a user-friendly interface for all portal activities.
              </span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                choose from a variety of rewards, including gift cards and
                company swag.
              </span>
            </li>
            <li class="flex space-x-2 rtl:space-x-reverse items-center">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="leading-tight">
                add items to my cart for quick redemption of my rewards points.
              </span>
            </li>
          </ul>
        </div>

        {/* capstone */}
        <div
          class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="capstone"
          role="tabpanel"
          aria-labelledby="capstone-tab"
        >
          <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            SAIT Capstone Project Partnership with ENMAX
          </h2>
          <p class="mb-3 text-gray-500 dark:text-gray-400">
            At SAIT, students benefit from a quality curriculum, delivered by
            instructors, featuring a balanced academic diet of theory and
            hands-on practice. The successful completion of a project requires
            that the team work closely with project stakeholders, plan the
            project carefully, execute according to plan, and solve problems
            efficiently. The PROJ-304 Course focuses on fundamental principles
            of project management. Students will examine basic project
            management practices for initiating and defining the scope of a
            project, planning the project, executing the project with an
            effective project team, and successfully completing the project to
            the client’s satisfaction. Completion of this course prepares
            students for successful entry into PROJ 309, Capstone Project.
          </p>
          <p class="mb-3 text-gray-500 dark:text-gray-400">
            ENMAX Corporation, a leader in utility services, has been a
            significant collaborator in our educational journey at SAIT,
            especially through their advanced IT infrastructure. This idea for
            partnership took root during my cooperative work term at ENMAX in
            Calgary, Alberta, where, as a Digital Experience Co-Op Student, I was
            deeply involved in their innovative IT projects. My role allowed me
            to gain a unique perspective on the integration of technology in
            business processes and customer engagement, fostering an
            understanding of the pivotal role IT plays in modern utility
            services. Witnessing their progressive approach in IT solutions
            within the utility sector, I saw a unique opportunity for
            collaboration. I proposed this partnership to align SAIT's academic
            curriculum with the IT practices at ENMAX. This collaboration has
            been key in enhancing our practical learning, bridging the gap
            between theoretical IT knowledge and its real-life applications in a
            corporate setting, and offering us a comprehensive view into the
            evolving world of IT within modern utility companies.
          </p>
          <a
            href="https://sway.office.com/cUCSN8ErMVeOv633?ref=Link&loc=mysways"
            target="_blank"
            class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
          >
            Learn more
            <svg
              class=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
