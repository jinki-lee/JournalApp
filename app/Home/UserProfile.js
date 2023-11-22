import React from "react";

const UserProfile = () => {
  const yourName = "Jinki Lee"; // Replace with your actual name
  const personalBio = "Software & Web Developer | Business Graduate"; // Replace with your course section
  const personalWebsiteUrl = "https://www.jinkilee.ca/";

  const linkedInUrl = "https://www.linkedin.com/in/jinkilee/";
  const githubRepoUrl = "https://github.com/jinki-lee";
  const spotifyUrl =
    "https://open.spotify.com/user/jinkiplease?si=a5ae5b87966b4ebc";
  const instagramUrl = "https://www.instagram.com/jinki.jpeg/";
  const youtubeUrl = "https://www.youtube.com/channel/UCMADNoVufMJPluqkbkRQVoQ";

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <section>
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          {yourName}
        </h1>
        <p className="mb-8 text-base font-normal text-gray-500 sm:text-lg md:text-xl lg:text-xl sm:px-8 md:px-16 xl:px-48 dark:text-gray-400">
          {personalBio}
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Personal Website */}
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
            className="mb-2 text-xl font-bold text-gray-400 hover:text-black"
          >
            Personal Website
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome to my personal website, where I showcase my journey and
            skills as a Software & Web Developer. Explore my portfolio of
            innovative projects and my professional achievements.
          </p>
        </div>

        {/* LinkedIn */}
        <div>
          <a
            href={linkedInUrl}
            target="_blank"
            className="flex justify-center items-center mb-4 w-full h-auto"
          >
            <img
              src="https://www.svgrepo.com/show/452051/linkedin.svg"
              className="w-20 h-20 mx-auto"
              alt="LinkedIn Logo"
            />
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            className="mb-2 text-xl font-bold text-gray-400 hover:text-black"
          >
            LinkedIn
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            Connect with me on LinkedIn to view my professional network,
            endorsements, and detailed work experience. As a Software & Web
            Developer with a business background, I engage in diverse projects
            and discussions related to technology and business innovation.
          </p>
        </div>

        {/* Github */}
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
            />
          </a>
          <a
            href={githubRepoUrl}
            target="_blank"
            className="mb-2 text-xl font-bold text-gray-400 hover:text-black"
          >
            Github
          </a>

          <p className="text-gray-500 dark:text-gray-400">
            Explore my GitHub profile to see my coding projects, contributions,
            and collaborations. As a Software & Web Developer, my GitHub
            showcases a range of repositories that highlight my skills in coding
            and software development.
          </p>
        </div>
        {/* Instagram */}
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
            />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            className="mb-2 text-xl font-bold text-gray-400 hover:text-black"
          >
            Instagram
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            Follow me on Instagram for a glimpse into my life beyond code. Here,
            I share moments from my personal and professional journey, offering
            a more visual and engaging perspective on who I am.
          </p>{" "}
        </div>
        {/* Youtube */}
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
            />
          </a>
          <a
            href={youtubeUrl}
            target="_blank"
            className="mb-2 text-xl font-bold text-gray-400 hover:text-black"
          >
            Youtube
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            Dive into my YouTube channel for a collection of short videos and
            Instagram reels where I capture and share the highlights of my
            adventures and activities. It's a creative space where I piece
            together memories and experiences, creating a visual diary that's
            both personal and expressive.
          </p>{" "}
        </div>
        {/* Spotify */}
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
            />
          </a>
          <a
            href={spotifyUrl}
            target="_blank"
            className="mb-2 text-xl font-bold text-gray-400 hover:text-black"
          >
            Spotify
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            Tune into my Spotify profile to discover playlists I've curated.
            Whether it's music to code by, unwind to, or get inspired, my
            Spotify collection reflects my personal tastes and the soundtrack to
            my life.
          </p>{" "}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
