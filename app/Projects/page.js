import React from "react";

export default function Page() {
  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              My Projects
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              I excel in merging technical expertise with creative vision to
              create digital experiences that resonate with users and meet
              varied business objectives. My proficiency extends across software
              development, web app creation, and capturing media through both
              video and photography, ensuring a dynamic and comprehensive
              digital impact.
            </p>
          </div>

          {/* First 2 Cards */}
          <div className="grid gap-8 lg:grid-cols-2 mb-10">
            {/* Vlogs */}
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-purple-200 text-purple-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-red-500 dark:text-red-500">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Videos
                </span>

                <span className="text-sm">Present</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a
                  href="https://www.instagram.com/jinki.jpeg/reels"
                  target="_blank"
                >
                  Vlogs
                </a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                I am a passionate and creative Instagram Reels Content Creator,
                dedicated to sharing my life's adventures and activities with
                the world. Through the power of visual storytelling, I curate
                and craft engaging, bite-sized videos using Adobe Premiere Pro
                that capture the essence of my travels and daily experiences. My
                mission is to inspire, entertain, and connect with my audience
                while exploring the world and pursuing my passions.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                    alt="Instagram"
                    data-tooltip-target="tooltip-dark"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Instagram
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/416500/youtube-circle-logo.svg"
                    alt="Youtube"
                    data-tooltip-target="tooltip-dark2"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark2"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Youtube
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/452150/adobe-premiere.svg"
                    alt="Premiere Pro"
                    data-tooltip-target="tooltip-dark3"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark3"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Adobe Premiere Pro
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://www.instagram.com/jinki.jpeg/reels/"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  View Reels
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

            {/* ENMAX Capstone */}
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

                <span className="text-sm">January 2023 - December 2023</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="/ENMAX">ENMAX - IT Recogntion Portal</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                Developed internal web application to recognize and reward
                employees for their exceptional contributions. By harnessing
                advanced technologies such as ASP.NET, .NET Core 6, and the MVC
                architectural pattern, my capstone group and I developed a
                robust and user-friendly platform that brought about a positive
                transformation in the way ENMAX acknowledges and motivates its
                workforce.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/353622/c-sharp.svg"
                    alt="c#"
                    data-tooltip-target="tooltip-dark4"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark4"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    C#
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/452228/html-5.svg"
                    alt="html"
                    data-tooltip-target="tooltip-dark5"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark5"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    HTML
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/452185/css-3.svg"
                    alt="css"
                    data-tooltip-target="tooltip-dark6"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark6"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    CSS
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/508894/aspnet.svg"
                    alt="asp.net"
                    data-tooltip-target="tooltip-dark7"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark7"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    ASP.NET
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/331760/sql-database-generic.svg"
                    alt="SQL"
                    data-tooltip-target="tooltip-dark8"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark8"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Microsoft SQL Server
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg"
                    alt="Microsoft Visual Studio"
                    data-tooltip-target="tooltip-dark9"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark9"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Microsoft Visual Studio
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/448222/figma.svg"
                    alt="figma"
                    data-tooltip-target="tooltip-dark11"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark11"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Figma
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/452210/git.svg"
                    alt="git"
                    data-tooltip-target="tooltip-dark12"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark12"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Git
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <a
                  href="/ENMAX"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  View Demo
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
          </div>

          {/* Second 2 Cards */}
          <div className="grid gap-8 lg:grid-cols-2 mb-10">
            {/* Journal App */}
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
                <a href="/Journal">Journal App</a>
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                In 2023, I deepened my understanding of software development and
                gained valuable self-awareness. I noticed my inclination to
                overthink, leading to occasional mild anxiety. While completing
                my work term and capstone project at ENMAX and simultaneously
                taking a web development course at SAIT, I learned skills such
                as React, Cloud Firestore, Firebase, and authentication methods.
                Using these skills, I developed a journaling app. Seeking
                relaxation and a break from work, I traveled to Peru, where I
                used this app to journal my experiences, allowing me to breathe,
                unwind, and foster better mental health.
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
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://www.svgrepo.com/show/373595/firebase.svg"
                    alt="firebase"
                    data-tooltip-target="tooltip-dark17"
                    data-tooltip-style="dark"
                  />

                  <div
                    id="tooltip-dark17"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Firebase
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <a
                  href="/Journal"
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Use App
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

            {/* QP Cleaners */}
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
          </div>
        </div>
      </section>
    </main>
  );
}
