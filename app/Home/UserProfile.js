import React from "react";

const UserProfile = () => {
  const yourName = "Jinki Lee"; // Replace with your actual name
  const personalBio = "Software & Web Developer | Business Graduate"; // Replace with your course section
  const githubRepoUrl = "https://github.com/jinki-lee"; // Replace with your GitHub repository URL
  const linkedInUrl = "https://www.linkedin.com/in/jinkilee/";
  const porfolioUrl = "https://jinkilee.ca";
  const journalUrl = "/Journal";
  const personalWebsiteUrl = "https://www.jinkilee.ca/";
  const instagramUrl = "https://www.instagram.com/jinki.jpeg/";
  const youtubeUrl = "https://www.youtube.com/channel/UCMADNoVufMJPluqkbkRQVoQ";
  const spotifyUrl =
    "https://open.spotify.com/user/jinkiplease?si=a5ae5b87966b4ebc";

  return (
    <main className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <a
        href={porfolioUrl}
        target="_blank"
        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        role="alert"
      >
        <span className="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3">
          New
        </span>{" "}
        <span className="text-sm font-medium">My Website</span>
        <svg
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {yourName}
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {personalBio}
      </p>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">
              Marking a Digital Footprint
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Specializes in strategizing and implementing tech solutions to
              elevate customer engagement and drive digital adoption. With a
              focus on emerging technologies and market trends, my approach
              aligns digital transformations with business goals, fostering
              growth and enhancing user experiences.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <a
                href={personalWebsiteUrl}
                target="_blank"
                className="flex justify-center items-center mb-4 w-full h-auto"
              >
                <img
                  src="https://www.svgrepo.com/show/530444/availability.svg"
                  className="w-20 h-20 mx-auto"
                  alt="Website Logo"
                />
              </a>
              <a
                href={personalWebsiteUrl}
                target="_blank"
                className="mb-2 text-xl font-bold dark:text-white"
              >
                Personal Website
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                Welcome to my personal website, where I showcase my journey and
                skills as a Software & Web Developer. Explore my portfolio of
                innovative projects and my professional achievements.
              </p>
            </div>
            <div>
              <a
                href={personalWebsiteUrl}
                target="_blank"
                className="flex justify-center items-center mb-4 w-full h-auto"
              >
                <img
                  src="https://www.svgrepo.com/show/452051/linkedin.svg"
                  className="w-20 h-20 mx-auto"
                  alt="LinkedIn Logo"
                />{" "}
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                className="mb-2 text-xl font-bold dark:text-white"
              >
                LinkedIn
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                Connect with me on LinkedIn to view my professional network,
                endorsements, and detailed work experience. As a Software & Web
                Developer with a business background, I engage in diverse
                projects and discussions related to technology and business
                innovation.
              </p>
            </div>
            <div>
              <a
                href={githubRepoUrl}
                target="_blank"
                className="flex justify-center items-center mb-4 w-full h-auto"
              >
                <img
                  src="https://www.svgrepo.com/show/452211/github.svg"
                  className="w-20 h-20 mx-auto"
                  alt="Github Logo"
                />{" "}
              </a>
              <a
                href={githubRepoUrl}
                target="_blank"
                className="mb-2 text-xl font-bold dark:text-white"
              >
                Github
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                Explore my GitHub profile to see my coding projects,
                contributions, and collaborations. As a Software & Web
                Developer, my GitHub showcases a range of repositories that
                highlight my skills in coding and software development.
              </p>
            </div>
            <div>
              <a
                href={instagramUrl}
                target="_blank"
                className="flex justify-center items-center mb-4 w-full h-auto"
              >
                <img
                  src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                  className="w-20 h-20 mx-auto"
                  alt="Instagram Logo"
                />{" "}
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                className="mb-2 text-xl font-bold dark:text-white"
              >
                Instagram
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                Follow me on Instagram for a glimpse into my life beyond code.
                Here, I share moments from my personal and professional journey,
                offering a more visual and engaging perspective on who I am.
              </p>
            </div>
            <div>
              <a
                href={youtubeUrl}
                target="_blank"
                className="flex justify-center items-center mb-4 w-full h-auto"
              >
                <img
                  src="https://www.svgrepo.com/show/452138/youtube.svg"
                  className="w-20 h-20 mx-auto"
                  alt="Youtube Logo"
                />{" "}
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                className="mb-2 text-xl font-bold dark:text-white"
              >
                Youtube
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                Dive into my YouTube channel for a collection of short videos
                and Instagram reels where I capture and share the highlights of
                my adventures and activities. It's a creative space where I
                piece together memories and experiences, creating a visual diary
                that's both personal and expressive.
              </p>
            </div>
            <div>
              <a
                href={spotifyUrl}
                target="_blank"
                className="flex justify-center items-center mb-4 w-full h-auto"
              >
                <img
                  src="https://www.svgrepo.com/show/475684/spotify-color.svg"
                  className="w-20 h-20 mx-auto"
                  alt="Spotify Logo"
                />{" "}
              </a>
              <a
                href={spotifyUrl}
                target="_blank"
                className="mb-2 text-xl font-bold dark:text-white"
              >
                Spotify
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                Tune into my Spotify profile to discover playlists I've curated.
                Whether it's music to code by, unwind to, or get inspired, my
                Spotify collection reflects my personal tastes and the
                soundtrack to my life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserProfile;
