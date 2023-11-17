// Navbar.js
import React from "react";

function Footer() {
  const journalUrl = "/Journal";
  const enmaxUrl = "/";
  const mealUrl = "https://cprg306-assignments-coral.vercel.app/week10";
  const githubRepoUrl = "https://github.com/jinki-lee";
  const personalWebsiteUrl = "https://www.jinkilee.ca/";
  const instagramUrl = "https://www.instagram.com/jinki.jpeg/";
  const youtubeUrl = "https://www.youtube.com/channel/UCMADNoVufMJPluqkbkRQVoQ";
  const linkedInUrl = "https://www.linkedin.com/in/jinkilee/";
  const spotifyUrl =
    "https://open.spotify.com/user/jinkiplease?si=a5ae5b87966b4ebc";

  return (
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Jinki Lee™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
