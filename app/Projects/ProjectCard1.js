
import React from "react";

export default function ProjectCard1() {
  return (
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
  );
}
