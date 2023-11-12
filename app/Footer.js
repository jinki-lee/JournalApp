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
  const spotifyUrl = "https://open.spotify.com/user/jinkiplease?si=a5ae5b87966b4ebc";

  return (
<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Jinki Lee ™</a>. All Rights Reserved.
    </span>
    </div>
</footer>


  );
}

export default Footer;
